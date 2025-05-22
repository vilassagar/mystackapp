import { BarChart3, Users } from "lucide-react";

// Analytics Page
const AnalyticsPage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
                <p className="text-gray-600">Track your performance and growth metrics.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900">Website Traffic</h3>
                        <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                    </div>
                    <div className="space-y-3 md:space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs md:text-sm text-gray-600">Page Views</span>
                            <span className="text-sm md:text-base font-medium">125,432</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs md:text-sm text-gray-600">Unique Visitors</span>
                            <span className="text-sm md:text-base font-medium">45,678</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs md:text-sm text-gray-600">Bounce Rate</span>
                            <span className="text-sm md:text-base font-medium">32.5%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900">User Engagement</h3>
                        <Users className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                    </div>
                    <div className="space-y-3 md:space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs md:text-sm text-gray-600">Active Users</span>
                            <span className="text-sm md:text-base font-medium">8,924</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs md:text-sm text-gray-600">Session Duration</span>
                            <span className="text-sm md:text-base font-medium">4m 32s</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs md:text-sm text-gray-600">Pages per Session</span>
                            <span className="text-sm md:text-base font-medium">2.7</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
                <div className="space-y-3 md:space-y-4">
                    {[
                        { source: 'Google Search', percentage: 45, color: 'bg-blue-500' },
                        { source: 'Direct Traffic', percentage: 30, color: 'bg-green-500' },
                        { source: 'Social Media', percentage: 15, color: 'bg-purple-500' },
                        { source: 'Email Campaign', percentage: 10, color: 'bg-yellow-500' },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 md:space-x-4">
                            <div className="w-16 md:w-20 text-xs md:text-sm text-gray-600 truncate">{item.source}</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${item.color}`}
                                    style={{ width: `${item.percentage}%` }}
                                ></div>
                            </div>
                            <div className="w-8 md:w-12 text-xs md:text-sm font-medium text-gray-900 text-right">{item.percentage}%</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    
  );
};

export default AnalyticsPage;