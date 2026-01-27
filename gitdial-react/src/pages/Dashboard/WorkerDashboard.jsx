import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import Overview from '../../components/Dashboard/Overview';
import JobRequests from '../../components/Dashboard/JobRequests';
import MyServices from '../../components/Dashboard/MyServices';
import BookingTable from '../../components/Dashboard/BookingTable';
import Earnings from '../../components/Dashboard/Earnings';
import Messages from '../../components/Dashboard/Messages';
import Settings from '../../components/Dashboard/Settings';

import UserProfile from '../../pages/Profile/UserProfile';


const WorkerDashboard = () => {
    return (
        <DashboardLayout role="worker">
            <Routes>
                <Route index element={<Overview />} />
                <Route path="leads" element={<JobRequests />} />
                <Route path="services" element={<MyServices />} />
                <Route path="bookings" element={<BookingTable />} />
                <Route path="earnings" element={<Earnings />} />
                <Route path="messages" element={<Messages />} />
                <Route path="settings" element={<Settings />} />
                <Route path="profile" element={<UserProfile role="worker" />} />
                <Route path="*" element={<Navigate to="" replace />} />
            </Routes>
        </DashboardLayout>
    );
};

export default WorkerDashboard;
