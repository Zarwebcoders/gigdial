import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import AdminDashboard from './AdminDashboard';
import AdminUsers from './AdminUsers';
import ServiceApprovals from './ServiceApprovals';
import PortfolioApprovals from './PortfolioApprovals';
import Disputes from './Disputes';
import Moderation from './Moderation';
import AdminSettings from './AdminSettings';

const AdminPanel = () => {
    return (
        <DashboardLayout role="admin">
            <Routes>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="service-approvals" element={<ServiceApprovals />} />
                <Route path="portfolio-approvals" element={<PortfolioApprovals />} />
                <Route path="disputes" element={<Disputes />} />
                <Route path="moderation" element={<Moderation />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="*" element={<Navigate to="" replace />} />
            </Routes>
        </DashboardLayout>
    );
};

export default AdminPanel;
