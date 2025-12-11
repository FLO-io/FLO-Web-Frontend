import { Bell, User, Search } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import DropdownMenu from './DropdownMenu';

interface HeaderProps {
  customActions?: React.ReactNode;
}

export default function Header({ customActions }: HeaderProps) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="flex items-center space-x-4 md:space-x-8">
          <h1
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => router.push('/')}
          >
            FLO
          </h1>
        </div>

        <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
          {customActions && (
            <div className="flex items-center space-x-3 mr-2">
              {customActions}
            </div>
          )}
          {/* Search Input - Positioned to the right */}
          <div className="search-input-container">
            <Search className={`search-icon ${searchFocused ? 'search-icon-focused' : ''}`} />
            <input
              type="text"
              placeholder="Search projects, templates..."
              className="search-input"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>

          {/* Notification Bell */}
          <div className="relative">
            <Bell className="notification-bell" />
            <div className="notification-badge"></div>
          </div>

          {/* User Avatar */}
          <div className="relative">
            <div
              className="user-avatar"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <User className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            {dropdownOpen && <DropdownMenu onClose={() => setDropdownOpen(false)} />}
          </div>
        </div>
      </div>
    </div>
  );
}