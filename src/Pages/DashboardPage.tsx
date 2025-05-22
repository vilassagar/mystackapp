import { User } from "lucide-react";

// Dashboard Page
const DashboardPage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-6 md:mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                <p className="text-sm md:text-base text-gray-600">Welcome back! Here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Total Users</h3>
                    <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">1,234</p>
                    <p className="text-xs md:text-sm text-green-600">+12% from last month</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Revenue</h3>
                    <p className="text-2xl md:text-3xl font-bold text-green-600 mb-1">$45,678</p>
                    <p className="text-xs md:text-sm text-green-600">+8% from last month</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 sm:col-span-2 lg:col-span-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Orders</h3>
                    <p className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">892</p>
                    <p className="text-xs md:text-sm text-red-600">-3% from last month</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-3 md:space-y-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex items-center space-x-3 md:space-x-4 py-2 md:py-3 border-b border-gray-100 last:border-b-0">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <User className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">New user registration</p>
                                <p className="text-xs text-gray-500">2 minutes ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;