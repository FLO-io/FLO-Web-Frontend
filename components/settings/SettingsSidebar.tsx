import { FiUser, FiMonitor, FiBell, FiLock } from 'react-icons/fi';

interface SettingsSidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function SettingsSidebar({ activeTab, setActiveTab }: SettingsSidebarProps) {
    const tabs = [
        { id: 'profile', label: 'Profile', icon: FiUser },
        { id: 'appearance', label: 'Appearance', icon: FiMonitor },
        { id: 'notifications', label: 'Notifications', icon: FiBell },
        { id: 'security', label: 'Security', icon: FiLock },
    ];

    return (
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
                                        ? 'bg-blue-50 text-blue-600 font-medium shadow-sm'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <Icon className={`text-lg transition-colors ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                                {tab.label}
                            </button>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
