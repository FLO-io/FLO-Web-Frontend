import { useState } from 'react';
import { FiMonitor, FiMoon, FiSun, FiSmartphone, FiCheck } from 'react-icons/fi';

export default function AppearanceSection() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="card p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FiMonitor className="text-blue-600" /> Theme Preferences
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <button
                        onClick={() => setDarkMode(false)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 group ${!darkMode ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-100' : 'border-gray-200 hover:border-blue-300 hover:shadow-md'}`}
                    >
                        <div className="w-full h-24 bg-gray-100 rounded-lg mb-3 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <FiSun className={`text-2xl ${!darkMode ? 'text-blue-600' : 'text-gray-400'}`} />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className={`font-medium ${!darkMode ? 'text-blue-700' : 'text-gray-900'}`}>Light Mode</span>
                            {!darkMode && <FiCheck className="text-blue-600" />}
                        </div>
                    </button>

                    <button
                        onClick={() => setDarkMode(true)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 group ${darkMode ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-100' : 'border-gray-200 hover:border-blue-300 hover:shadow-md'}`}
                    >
                        <div className="w-full h-24 bg-gray-900 rounded-lg mb-3 border border-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <FiMoon className={`text-2xl ${darkMode ? 'text-blue-400' : 'text-gray-500'}`} />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className={`font-medium ${darkMode ? 'text-blue-700' : 'text-gray-900'}`}>Dark Mode</span>
                            {darkMode && <FiCheck className="text-blue-600" />}
                        </div>
                    </button>

                    <button className="p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md text-left transition-all duration-200 group">
                        <div className="w-full h-24 bg-gradient-to-br from-gray-100 to-gray-900 rounded-lg mb-3 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <FiSmartphone className="text-2xl text-gray-400" />
                        </div>
                        <span className="font-medium text-gray-900">System</span>
                    </button>
                </div>

                <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Interface Density</h3>
                    <div className="flex items-center gap-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center">
                                <input type="radio" name="density" className="peer sr-only" defaultChecked />
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-all"></div>
                                <div className="absolute w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                            </div>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Comfortable</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center">
                                <input type="radio" name="density" className="peer sr-only" />
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-all"></div>
                                <div className="absolute w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                            </div>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Compact</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
