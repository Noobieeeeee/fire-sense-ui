
import React from 'react';
import Sidebar from './Sidebar';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="flex min-h-screen bg-espfire-navy">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex items-center p-4 h-20 border-b border-gray-800">
          <Logo />
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
