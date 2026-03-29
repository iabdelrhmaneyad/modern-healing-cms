import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickAccessBar from '@/components/QuickAccessBar';

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideFooter = false }) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <div className="relative">
        <div className="absolute top-4 left-4 z-30">
          <QuickAccessBar />
        </div>
        {children}
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
