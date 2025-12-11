import { useState } from 'react';
import { FiBell, FiUser, FiSmartphone } from 'react-icons/fi';

export default function NotificationsSection() {
    const [emailNotifs, setEmailNotifs] = useState(true);
    const [pushNotifs, setPushNotifs] = useState(false);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="card p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FiBell className="text-blue-600" /> Notification Settings
                </h2>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600 text-xl">
                                <FiUser />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Email Notifications</h3>
                                <p className="text-sm text-gray-500">Receive updates and newsletters via email</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={emailNotifs} onChange={() => setEmailNotifs(!emailNotifs)} className="sr-only peer" />
                            <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-purple-600 text-xl">
                                <FiSmartphone />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Push Notifications</h3>
                                <p className="text-sm text-gray-500">Receive real-time alerts on your device</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={pushNotifs} onChange={() => setPushNotifs(!pushNotifs)} className="sr-only peer" />
                            <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
