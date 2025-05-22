
import React from 'react';
import { Menu, Bell, Search } from 'lucide-react';
// Header Component

const Header: React.FC<{ onToggleSidebar: () => void }> = ({ onToggleSidebar }) => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between px-3 md:px-4 py-3">
                <div className="flex items-center space-x-3 md:space-x-4">
                    <button
                        onClick={onToggleSidebar}
                        className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
                        aria-label="Toggle sidebar"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                    <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs md:text-sm">L</span>
                        </div>
                        <h1 className="text-lg md:text-xl font-semibold text-gray-900 hidden sm:block">Logo</h1>
                    </div>
                </div>

                <div className="hidden md:flex flex-1 max-w-lg mx-4 lg:mx-8">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-4">
                    {/* Mobile search button */}
                    <button className="p-2 rounded-md hover:bg-gray-100 md:hidden">
                        <Search className="h-5 w-5 text-gray-600" />
                    </button>

                    <button className="p-2 rounded-md hover:bg-gray-100 relative">
                        <Bell className="h-5 w-5 text-gray-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <div className="flex items-center space-x-2">
                        <img
                            src="/api/placeholder/32/32"
                            alt="User avatar"
                            className="w-7 h-7 md:w-8 md:h-8 rounded-full"
                        />
                        <span className="hidden lg:block text-sm font-medium text-gray-700">John Doe</span>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;