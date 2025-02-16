import Background from '@/components/Background';
import NavBar from '@/components/NavBar';
import WaitlistSignup from '@/components/WaitlistSignup';
import React from 'react';

export default function page() {
    return (
        <div className="min-h-screen overflow-y-auto lg:overflow-hidden relative inset-0 bg-gradient-to-bl from-[#373737] to-black">
            <div className="fixed inset-0 w-full h-full">
                <Background />
            </div>

            <div className="absolute top-0 w-full flex flex-col items-center">
                <NavBar />
                <main className="mt-28 w-5/6">
                    <WaitlistSignup />
                </main>
            </div>
        </div>
    );
}
