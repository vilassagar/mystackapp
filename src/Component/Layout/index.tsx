import React, { useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import PageRouter from '../../Router';

// Import the Sidebar component explicitly
import SidebarComponent from "./SideBar";

// Main Layout Component
const Layout: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentRoute, setCurrentRoute] = useState('dashboard');

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);
    const handleNavigation = (route: string) => setCurrentRoute(route);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <SidebarComponent
                isOpen={sidebarOpen}
                onClose={closeSidebar}
                currentRoute={currentRoute}
                onNavigate={handleNavigation}
            />

            <div className="flex-1 flex flex-col lg:ml-0">
                <Header onToggleSidebar={toggleSidebar} />

                <div className="flex-1 flex flex-col pt-14 md:pt-16">
                    <main className="flex-1 p-3 md:p-6">
                        <PageRouter currentRoute={currentRoute} />
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;