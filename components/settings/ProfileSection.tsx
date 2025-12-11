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
            <div className="card p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FiUser className="text-blue-600" /> Public Profile
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-500/20 ring-4 ring-white">
                            JD
                        </div>
                        <button className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                            Change Avatar
                        </button>
                    </div>

                    <div className="flex-1 w-full grid gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" defaultValue="John" className="input hover:border-blue-300 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" defaultValue="Doe" className="input hover:border-blue-300 transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Bio</label>
                            <textarea
                                className="input min-h-[120px] resize-y hover:border-blue-300 transition-colors"
                                defaultValue="Product Designer & Developer based in San Francisco. Passionate about building beautiful user experiences."
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-6 border-t border-gray-100">
                    <button
                        onClick={handleSave}
                        disabled={isLoading}
                        className={`btn-primary flex items-center gap-2 ${isLoading ? 'opacity-80 cursor-wait' : ''}`}
                    >
                        {isLoading ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Saving...
                            </>
                        ) : (
                            'Save Changes'
                        )}
                    </button>
                </div>
            </div>

            <div className="card p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="grid gap-6 max-w-2xl">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" defaultValue="john.doe@example.com" className="input hover:border-blue-300 transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" defaultValue="+1 (555) 123-4567" className="input hover:border-blue-300 transition-colors" />
                    </div>
                </div>
            </div>
        </div>
    );
}
