import React from 'react';
import { Home, User, Mail, BarChart3, Settings, X } from "lucide-react";

// MenuItem interface
interface MenuItem {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    route: string;
}

// Sidebar Component
interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    currentRoute: string;
    onNavigate: (route: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentRoute, onNavigate }) => {
    const menuItems: MenuItem[] = [
        { icon: Home, label: 'Dashboard', route: 'dashboard' },
        { icon: User, label: 'Profile', route: 'profile' },
        { icon: Mail, label: 'Messages', route: 'messages' },
        { icon: BarChart3, label: 'Analytics', route: 'analytics' },
        { icon: Settings, label: 'Settings', route: 'settings' },
    ];

    const handleNavigation = (route: string) => {
        onNavigate(route);
        onClose(); // Close sidebar on mobile after navigation
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside
                className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">L</span>
                        </div>
                        <h2 className="text-lg font-semibold">Menu</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-md hover:bg-gray-100"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <nav className="mt-4 lg:mt-16 px-2 md:px-4">
                    <ul className="space-y-1 md:space-y-2">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleNavigation(item.route)}
                                    className={`w-full flex items-center space-x-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors text-left text-sm md:text-base ${currentRoute === item.route
                                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <item.icon className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                                    <span className="font-medium truncate">{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="absolute bottom-4 left-2 right-2 md:left-4 md:right-4">
                    <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                        <h3 className="text-xs md:text-sm font-medium text-gray-900 mb-1">Need help?</h3>
                        <p className="text-xs text-gray-600 mb-2 md:mb-3 hidden md:block">Contact our support team</p>
                        <button className="w-full bg-blue-600 text-white text-xs md:text-sm py-2 rounded-md hover:bg-blue-700 transition-colors">
                            Get Support
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;