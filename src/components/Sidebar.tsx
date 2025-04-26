
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Video, FileText } from 'lucide-react';
import Logo from './Logo';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: Home
    },
    {
      name: 'Live Stream',
      path: '/live-stream',
      icon: Video
    },
    {
      name: 'Logs',
      path: '/logs',
      icon: FileText
    }
  ];

  return (
    <aside className="w-[80px] bg-espfire-dark-blue flex flex-col min-h-screen border-r border-r-gray-800">
      <div className="p-4 flex justify-center mb-6">
        <Logo size="sm" withText={false} />
      </div>

      <nav className="flex-1">
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex flex-col items-center py-3 px-2 text-xs transition-colors ${
                  isActive(item.path)
                    ? 'text-espfire-orange bg-espfire-dark-blue/60'
                    : 'text-gray-400 hover:text-white hover:bg-espfire-dark-blue/40'
                }`}
                title={item.name}
              >
                <item.icon className="h-6 w-6 mb-1" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto p-4">
        <div className="h-8 w-8 rounded-full bg-gray-300 mx-auto" />
      </div>
    </aside>
  );
};

export default Sidebar;
