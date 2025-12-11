import { useState } from 'react';
import { FiUser } from 'react-icons/fi';

export default function ProfileSection({ onSave }: { onSave: () => void }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            onSave();
        }, 1000);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 min-h-[500px] relative">
                <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                    <FiUser className="text-gray-700" /> Public Profile
                </h2>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                    {/* Avatar Section */}
                    <div className="flex flex-col items-center gap-4 pt-2">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl shadow-blue-500/20 ring-4 ring-white">
                            JD
                        </div>
                        <button className="text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                            Change Avatar
                        </button>
                    </div>

                    {/* Form Section */}
                    <div className="flex-1 w-full space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600 ml-1">First Name</label>
                                <input
                                    type="text"
                                    defaultValue="John"
                                    className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600 ml-1">Last Name</label>
                                <input
                                    type="text"
                                    defaultValue="Doe"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-600 ml-1">Bio</label>
                            <textarea
                                className="w-full px-4 py-3 rounded-xl border border-blue-400 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-sm min-h-[140px] resize-none"
                                defaultValue="Product Designer & Developer based in San Francisco. Passionate about building beautiful user experiences."
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 right-8">
                    <button
                        onClick={handleSave}
                        disabled={isLoading}
                        className={`bg-blue-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${isLoading ? 'opacity-80 cursor-wait' : ''}`}
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Saving...
                            </span>
                        ) : (
                            'Save Changes'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
