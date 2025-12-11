import { useState } from 'react';
import Header from '../components/Header';
import SettingsSidebar from '../components/settings/SettingsSidebar';
import ProfileSection from '../components/settings/ProfileSection';
import AppearanceSection from '../components/settings/AppearanceSection';
import NotificationsSection from '../components/settings/NotificationsSection';
import SecuritySection from '../components/settings/SecuritySection';
import { FiCheckCircle } from 'react-icons/fi';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="page-layout bg-pattern-geometric">
      <div className="layout-container">
        <Header />

        <div className="spacing-component mt-8">
          <h1 className="text-responsive-xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-500">Manage your account preferences and settings</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="flex-1 min-h-[500px]">
            {activeTab === 'profile' && <ProfileSection onSave={handleSave} />}
            {activeTab === 'appearance' && <AppearanceSection />}
            {activeTab === 'notifications' && <NotificationsSection />}
            {activeTab === 'security' && <SecuritySection onSave={handleSave} />}
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-8 right-8 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 transform z-50 ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
          }`}
      >
        <FiCheckCircle className="text-green-400 text-xl" />
        <div>
          <h4 className="font-semibold text-sm">Success</h4>
          <p className="text-xs text-gray-300">Your changes have been saved.</p>
        </div>
      </div>
    <div className="spacing-component">
      <h1 className="text-responsive-xl font-bold text-blue-600 mb-6">Settings</h1>
      <p className="text-gray-600">Settings page is under construction.</p>
    </div>
  );
}
