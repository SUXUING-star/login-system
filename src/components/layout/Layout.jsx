// src/components/Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
			<Header />
			<div className="flex-1 relative">
				<main className={`w-full transition-all duration-300 ${showSidebar ? 'mr-80' : ''}`}>
					<div className="px-4 py-4 sm:px-8 py-8 sm:px-16 py-8">
						<Outlet />
					</div>
					<Footer onShowReference={() => setShowReference(true)} />
				</main>
			</div>
		</div>
	);
}

export default Layout;