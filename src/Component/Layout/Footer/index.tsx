const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="px-4 md:px-6 py-3 md:py-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                    <div className="flex items-center space-x-4">
                        <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
                            © 2025 Your Company. All rights reserved.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <a href="#" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;