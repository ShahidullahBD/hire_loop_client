import JobCard from '@/components/jobs/JobCard';
import JobsContainer from '@/components/jobs/JobsContainer';
import JobsFilter from '@/components/jobs/JobsFilter';
import { getJobs } from '@/lib/api/jobs';


const JobsPage = async () => {

    const jobs = await getJobs() || [];
    // console.log(jobs, 'jobs');

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex flex-col gap-1 space-y-2">
                <h2 className="text-4xl font-bold tracking-tight">Explore All Jobs</h2>
                <p className="text-sm text-default-500">Search and filter available opportunities</p>
                <JobsContainer jobs={jobs} />
            </div>
        </div>
    );
};

export default JobsPage;