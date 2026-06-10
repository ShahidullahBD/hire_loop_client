import { DashboardSideBar } from '@/components/dashboard/DashboardSideBar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex min-h-screen border-t'>
            <DashboardSideBar/>
            <div className='flex-1 p-4'>{children}</div>           
        </div>
    );
};

export default DashboardLayout;