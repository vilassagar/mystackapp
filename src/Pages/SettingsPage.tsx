// Settings Page
const SettingsPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-6 md:mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Settings</h1>
                <p className="text-sm md:text-base text-gray-600">Manage your application preferences and configurations.</p>
            </div>

            <div className="space-y-4 md:space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
                    <div className="space-y-4">
                        {[
                            { label: 'Email Notifications', description: 'Receive notifications via email' },
                            { label: 'Push Notifications', description: 'Receive push notifications on your device' },
                            { label: 'SMS Notifications', description: 'Receive notifications via SMS' },
                        ].map((setting, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                                <div className="flex-1">
                                    <p className="text-sm md:text-base font-medium text-gray-900">{setting.label}</p>
                                    <p className="text-xs md:text-sm text-gray-600">{setting.description}</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Security</h3>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <button className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                            Change Password
                        </button>
                        <button className="flex-1 sm:flex-none px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                            Enable Two-Factor Authentication
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Appearance</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                            <select className="w-full sm:w-48 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                <option>Light</option>
                                <option>Dark</option>
                                <option>System</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                            <select className="w-full sm:w-48 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>German</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SettingsPage;