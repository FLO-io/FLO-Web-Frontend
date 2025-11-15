import React from 'react';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-layout">
      <div className="layout-container">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
