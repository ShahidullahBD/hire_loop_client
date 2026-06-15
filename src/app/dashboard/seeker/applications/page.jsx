import ApplicationsTable from '@/components/dashboard/seeker/ApplicationsTable';
import { getApplicationsByApplicant } from '@/lib/api/application';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const ApplicationsPage = async () => {
    const user = await getUserSession();
    const applications = await getApplicationsByApplicant(user.id);
    return (
        <div>
            <h2 className='text-2xl font-bold my-5'>Applications: {applications.length}</h2>
            <ApplicationsTable applications={applications}/>
        </div>
    );
};

export default ApplicationsPage;