// Profile Page
const ProfilePage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-6 md:mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Profile</h1>
                <p className="text-sm md:text-base text-gray-600">Manage your account settings and preferences.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="lg:col-span-1 order-2 lg:order-1">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="/api/placeholder/100/100"
                                alt="Profile"
                                className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4"
                            />
                            <h3 className="text-base md:text-lg font-semibold text-gray-900">John Doe</h3>
                            <p className="text-sm md:text-base text-gray-600 mb-4">john.doe@example.com</p>
                            <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 order-1 lg:order-2">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        defaultValue="John"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        defaultValue="Doe"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    defaultValue="john.doe@example.com"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    defaultValue="+1 (555) 123-4567"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                            </div>
                            <button className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfilePage;
