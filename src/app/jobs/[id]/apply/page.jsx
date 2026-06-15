import { getJobById } from '@/lib/api/jobs';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApplyForm from './JobApplyForm';
import { getApplicationsByApplicant } from '@/lib/api/application';
import Link from 'next/link';
import { ArrowRight, ArrowRightArrowLeft } from '@gravity-ui/icons';
import { getPlanById } from '@/lib/api/plans';

const ApplyPage = async ({ params }) => {
    const { id } = await params;

    const user = await getUserSession();
    if (!user) {
        return (
            redirect(`/auth/signin?redirect=/jobs/${id}/apply`)
        );
    }

    if (user.role !== 'seeker') {
        return (
            <div className="p-6 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-red-500">Access Denied</h2>
                <p className="text-sm text-red-400">Only job seekers can apply for jobs.</p>
            </div>
        );
    }

    const applications = await getApplicationsByApplicant(user.id);

    const plan = await getPlanById(user?.plan || 'seeker_free')

    // console.log(plan, 'plan');

    // const plan = {
    //     name: "Basic",
    //     maxApplicationsPerMonth: 3
    // }

    const job = await getJobById(id);

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-5">
            <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Monthly Quota Status
                </p>

                <h2 className="text-2xl font-bold text-white">
                    You have applied to{" "}
                    <span className="text-blue-500">{applications.length}</span> out of{" "}
                    <span>{plan.maxApplicationsPerMonth}</span> positions
                </h2>
                <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-700">
                    <div
                        className="h-full rounded-full bg-blue-500 transition-all"
                        style={{
                            width: `${(applications.length / plan.maxApplicationsPerMonth) * 100}%`,
                        }}
                    />
                </div>
            </div>
            {applications.length >= plan.maxApplicationsPerMonth ? (
                <div className="p-6 bg-yellow-100 rounded-lg">
                    <h2 className="text-xl font-bold text-yellow-800">Application Limit Reached</h2>
                    <p className="text-sm text-yellow-700">You have reached the maximum number of applications for your current plan. Please upgrade to apply for more jobs.</p>
                    <p className='my-5'>Purchase plan to apply more positions. <Link href="/plans" className="text-blue-500 hover:underline flex items-center gap-1">Purchase Plan <ArrowRight /> </Link> </p>
                </div>
            ) :
                <div>
                    <h2 className='text-xl font-bold text-center'>Apply for this Job: {job.jobTitle}</h2>
                    <JobApplyForm applicant={user} job={job} />
                </div>}
        </div>
    );
};

export default ApplyPage;