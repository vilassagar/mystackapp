// Messages Page
const MessagesPage: React.FC = () => {
    const messages = [
        { id: 1, sender: "Alice Johnson", subject: "Project Update", time: "2 min ago", unread: true },
        { id: 2, sender: "Bob Smith", subject: "Meeting Tomorrow", time: "1 hour ago", unread: true },
        { id: 3, sender: "Carol Davis", subject: "Invoice #1234", time: "3 hours ago", unread: false },
        { id: 4, sender: "David Wilson", subject: "Welcome to the team!", time: "1 day ago", unread: false },
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-6 md:mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Messages</h1>
                <p className="text-sm md:text-base text-gray-600">Stay connected with your team and clients.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 md:p-6 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                        <h2 className="text-base md:text-lg font-semibold text-gray-900">Inbox</h2>
                        <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                            Compose
                        </button>
                    </div>
                </div>

                <div className="divide-y divide-gray-200">
                    {messages.map((message) => (
                        <div key={message.id} className={`p-3 md:p-4 hover:bg-gray-50 cursor-pointer ${message.unread ? 'bg-blue-50' : ''}`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3 md:space-x-4 flex-1 min-w-0">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-xs md:text-sm font-medium text-gray-700">
                                            {message.sender.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={`text-sm font-medium truncate ${message.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                                            {message.sender}
                                        </p>
                                        <p className={`text-xs md:text-sm truncate ${message.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                                            {message.subject}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                                    {message.unread && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                                    <span className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{message.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MessagesPage;
