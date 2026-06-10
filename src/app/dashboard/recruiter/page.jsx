'use client'

import DashboardStatsCard from '@/components/dashboard/DashboardStatsCard';
import RecentApplicationPage from '@/components/dashboard/RecentApplicationPage';
import { useSession } from '@/lib/auth-client';
import { Spinner } from '@heroui/react';
import React from 'react';

const RecruiterDashboardPage = () => {
    const { data: session, isPending } = useSession();
    // console.log(session, 'session', isPending);
    const user = session?.user;
    if (isPending) {
        <div className="flex items-center gap-4">
            <Spinner />
        </div>
    }


    return (
        <div>
            <h1 className='text-2xl'>Welcome Back!  <span className='font-bold'>{user?.name}</span></h1>
            <DashboardStatsCard/> 
            <RecentApplicationPage/>              
        </div>
    );
};

export default RecruiterDashboardPage;