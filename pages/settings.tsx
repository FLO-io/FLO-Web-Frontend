import { useState } from 'react';
import Header from '../components/Header';
import { FiUser, FiMonitor, FiBell, FiLock, FiMoon, FiSun, FiSmartphone, FiShield, FiCheck } from 'react-icons/fi';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'appearance', label: 'Appearance', icon: FiMonitor },
    { id: 'notifications', label: 'Notifications', icon: FiBell },
    { id: 'security', label: 'Security', icon: FiLock },
  ];

  return (
    <div className="page-layout">
      <div className="layout-container">
        <Header />

        <div className="spacing-component mt-8">
          <h1 className="text-responsive-xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-500">Manage your account preferences and settings</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <nav className="flex flex-col p-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${isActive
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                    >
                      <Icon className={`text-lg ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="card p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FiUser className="text-blue-600" /> Public Profile
                  </h2>

                  <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-500/20">
                        JD
                      </div>
                      <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
                        Change Avatar
                      </button>
                    </div>

                    <div className="flex-1 w-full grid gap-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">First Name</label>
                          <input type="text" defaultValue="John" className="input" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Last Name</label>
                          <input type="text" defaultValue="Doe" className="input" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Bio</label>
                        <textarea
                          className="input min-h-[120px] resize-y"
                          defaultValue="Product Designer & Developer based in San Francisco. Passionate about building beautiful user experiences."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-100">
                    <button className="btn-primary">Save Changes</button>
                  </div>
                </div>

                <div className="card p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="grid gap-6 max-w-2xl">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <input type="email" defaultValue="john.doe@example.com" className="input" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <input type="tel" defaultValue="+1 (555) 123-4567" className="input" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <div className="card p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FiMonitor className="text-blue-600" /> Theme Preferences
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <button
                      onClick={() => setDarkMode(false)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${!darkMode ? 'border-blue-600 bg-blue-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                      <div className="w-full h-24 bg-gray-100 rounded-lg mb-3 border border-gray-200 flex items-center justify-center">
                        <FiSun className="text-2xl text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Light Mode</span>
                        {!darkMode && <FiCheck className="text-blue-600" />}
                      </div>
                    </button>

                    <button
                      onClick={() => setDarkMode(true)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${darkMode ? 'border-blue-600 bg-blue-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                      <div className="w-full h-24 bg-gray-900 rounded-lg mb-3 border border-gray-700 flex items-center justify-center">
                        <FiMoon className="text-2xl text-gray-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Dark Mode</span>
                        {darkMode && <FiCheck className="text-blue-600" />}
                      </div>
                    </button>

                    <button className="p-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 text-left transition-all">
                      <div className="w-full h-24 bg-gradient-to-br from-gray-100 to-gray-900 rounded-lg mb-3 border border-gray-200 flex items-center justify-center">
                        <FiSmartphone className="text-2xl text-gray-400" />
                      </div>
                      <span className="font-medium text-gray-900">System</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Interface Density</h3>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="density" className="w-4 h-4 text-blue-600" defaultChecked />
                        <span className="text-gray-700">Comfortable</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="density" className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Compact</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div className="card p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FiBell className="text-blue-600" /> Notification Settings
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600">
                          <FiUser />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Email Notifications</h3>
                          <p className="text-sm text-gray-500">Receive updates and newsletters via email</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={emailNotifs} onChange={() => setEmailNotifs(!emailNotifs)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-purple-600">
                          <FiSmartphone />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Push Notifications</h3>
                          <p className="text-sm text-gray-500">Receive real-time alerts on your device</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={pushNotifs} onChange={() => setPushNotifs(!pushNotifs)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="card p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FiShield className="text-blue-600" /> Security & Login
                  </h2>

                  <div className="mb-8">
                    <h3 className="font-medium text-gray-900 mb-4">Change Password</h3>
                    <div className="grid gap-4 max-w-xl">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Current Password</label>
                        <input type="password" className="input" placeholder="••••••••" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">New Password</label>
                        <input type="password" className="input" placeholder="••••••••" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                        <input type="password" className="input" placeholder="••••••••" />
                      </div>
                      <div className="pt-2">
                        <button className="btn-secondary">Update Password</button>
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
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}