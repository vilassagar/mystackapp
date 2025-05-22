import React from 'react';
import AnalyticsPage from "../Pages/AnalyticsPage";
import DashboardPage from "../Pages/DashboardPage";
import MessagesPage from "../Pages/MessagesPage";
import ProfilePage from "../Pages/ProfilePage";
import SettingsPage from "../Pages/SettingsPage";

// PageProps interface
interface PageProps {
    currentRoute: string;
}

// Page Router Component
const PageRouter: React.FC<PageProps> = ({ currentRoute }) => {
    switch (currentRoute) {
        case 'dashboard':
            return <DashboardPage />;
        case 'profile':
            return <ProfilePage />;
        case 'messages':
            return <MessagesPage />;
        case 'analytics':
            return <AnalyticsPage />;
        case 'settings':
            return <SettingsPage />;
        default:
            return <DashboardPage />;
    }
};

export default PageRouter;