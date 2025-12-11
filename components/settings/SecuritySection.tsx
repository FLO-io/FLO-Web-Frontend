import { useState } from 'react';
import { FiShield } from 'react-icons/fi';

export default function SecuritySection({ onSave }: { onSave: () => void }) {
    const [twoFactor, setTwoFactor] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdatePassword = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            onSave();
        }, 1000);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="card p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FiShield className="text-blue-600" /> Security & Login
                </h2>

                <div className="mb-8">
                    <h3 className="font-medium text-gray-900 mb-4">Change Password</h3>
                    <div className="grid gap-4 max-w-xl">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Current Password</label>
                            <input type="password" className="input hover:border-blue-300 transition-colors" placeholder="••••••••" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">New Password</label>
                            <input type="password" className="input hover:border-blue-300 transition-colors" placeholder="••••••••" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                            <input type="password" className="input hover:border-blue-300 transition-colors" placeholder="••••••••" />
                        </div>
                        <div className="pt-2">
                            <button
                                onClick={handleUpdatePassword}
                                disabled={isLoading}
                                className={`btn-secondary w-full md:w-auto flex items-center justify-center gap-2 ${isLoading ? 'opacity-80 cursor-wait' : ''}`}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-gray-400 border-t-gray-800 rounded-full animate-spin"></span>
                                        Updating...
                                    </>
                                ) : (
                                    'Update Password'
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                            <p className="text-sm text-gray-500 mt-1">Add an extra layer of security to your account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} className="sr-only peer" />
                            <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
