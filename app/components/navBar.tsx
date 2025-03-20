'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const NavBar: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-10 w-full">
            <div className="flex h-12 justify-center border-b border-b-foreground/10 bg-background px-5">
                <div className="container flex w-full items-center justify-between py-3 text-sm">
                    <div className="flex items-center gap-5">
                        <Link className="flex items-center gap-2" href="/">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 lg:h-8" viewBox="0 0 32 32" fill='#2E7D32'><g data-name="40-Search">
                                <rect x="0" y="0" width="32" height="32" fill="#E6F4EA" rx="4" ry="4" />
                                <path d="M25 0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V7a7 7 0 0 0-7-7zm5 25a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5z" /><path d="M20 13a7 7 0 1 0-2.82 5.6l7.11 7.11 1.41-1.41-7.1-7.12A7 7 0 0 0 20 13zm-7 5a5 5 0 1 1 5-5 5 5 0 0 1-5 5z" /></g></svg>
                            <span className="text-lg font-semibold lg:text-xl">Faviconer</span>
                        </Link>
                    </div>

                    <div className="hidden gap-6 md:flex">
                        <div className="flex items-center gap-1 text-sm xl:gap-1">
                            <Link href="/" className="group inline-flex h-8 w-max items-center justify-center rounded-sm bg-background px-2.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                Home
                            </Link>

                            <Link href="/#benefits" className="group inline-flex h-8 w-max items-center justify-center rounded-sm bg-background px-2.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                About
                            </Link>

                        </div>


                    </div>

                    <div className="block md:hidden" onClick={() => setSidebarOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 z-20 transition-all duration-300 ${isSidebarOpen ? "bg-black/50" : "pointer-events-none opacity-0"}`}
                onClick={() => setSidebarOpen(false)}
            ></div>

            <aside className={`fixed right-0 top-0 z-30 h-full w-64 bg-white shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
                <div className="flex items-center justify-between p-4 border-b">
                    <span className="text-lg font-semibold">Menu</span>
                    <button onClick={() => setSidebarOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                            <line x1="18" x2="6" y1="6" y2="18"></line>
                            <line x1="6" x2="18" y1="6" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col p-4">
                    <Link href="/" className="p-2 rounded hover:bg-gray-100">Home</Link>
                    <Link href="/#benefits" className="p-2 rounded hover:bg-gray-100">About</Link>
                </nav>
            </aside>
        </nav>
    );
};

export default NavBar;