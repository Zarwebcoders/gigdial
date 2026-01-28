import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import CustomerOverview from '../../components/Dashboard/CustomerOverview';
import BookingTable from '../../components/Dashboard/BookingTable';
import ServicesCatalog from '../../components/Dashboard/ServicesCatalog';
import ServiceHistory from '../../components/Dashboard/ServiceHistory';
import CustomerSubscriptions from '../../components/Dashboard/CustomerSubscriptions';
import CustomerMessages from '../../components/Dashboard/CustomerMessages';
import FavoriteWorkers from '../../components/Dashboard/FavoriteWorkers';
import Wallet from '../../components/Dashboard/Wallet';
import SavedAddresses from '../../components/Dashboard/SavedAddresses';
import Referral from '../../components/Dashboard/Referral';
import Loyalty from '../../components/Dashboard/Loyalty';
import CustomerSettings from '../../components/Dashboard/CustomerSettings';

import UserProfile from '../../pages/Profile/UserProfile';



const CustomerDashboard = () => {
    return (
        <DashboardLayout role="customer">
            <Routes>
                <Route index element={<CustomerOverview />} />
                <Route path="services" element={<ServicesCatalog />} />
                <Route path="requests" element={<BookingTable />} />
                <Route path="history" element={<ServiceHistory />} />
                <Route path="subscriptions" element={<CustomerSubscriptions />} />
                <Route path="messages" element={<CustomerMessages />} />
                <Route path="favorites" element={<FavoriteWorkers />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="addresses" element={<SavedAddresses />} />
                <Route path="referral" element={<Referral />} />
                <Route path="loyalty" element={<Loyalty />} />
                <Route path="profile" element={<UserProfile role="customer" />} />
                <Route path="settings" element={<CustomerSettings />} />
                <Route path="*" element={<Navigate to="" replace />} />
            </Routes>
        </DashboardLayout>
    );
};

export default CustomerDashboard;
