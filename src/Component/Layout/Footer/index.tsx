
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-4 px-3 md:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                <p className="text-sm text-gray-600">
                    © 2025 Your Company. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;