import Background from '@/components/Background';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import React from 'react';

export default function Teams() {
    const team = [
        {
            image: '/Sheikh.png',
            name: 'Shekh Razaul Islam',
            position: 'Lead, Finance & Operations',
        },
        {
            image: '/Jesu.png',
            name: 'Jesu Neelkamal Borah',
            position: 'Lead, Communications',
        },
        {
            image: '/Rahul.png',
            name: 'Rahul Barman',
            position: 'Lead, Tech',
        },
        {
            image: '/Dhrupad.png',
            name: 'Dhrupad Das',
            position: 'Advisor, Product & Legal',
        },
        {
            image: '/Sumit.png',
            name: 'Sumit Mazumdar',
            position: 'Developer, Full Stack',
        },

        {
            image: '/Vansh.png',
            name: 'Vansh Sahay',
            position: 'Developer, Blockchain',
        },
        { image: '/Nipu.png', name: 'Nipu Das', position: 'Developer, UI/UX' },
        {
            image: '/Barrel.png',
            name: 'Mr. Barrel',
            position: 'Inspiration',
        },
    ];
    return (
        <div className="min-h-screen overflow-y-auto relative inset-0 bg-gradient-to-bl from-[#373737] to-black flex flex-col justify-center items-center">
            <div className="fixed inset-0 w-full h-full pointer-events-none">
                <Background />
            </div>
            <div className="w-full absolute top-0 flex flex-col justify-center items-center">
                <NavBar />
                <p className="text-white my-6 text-2xl">
                    OUR <span className="text-[#00A340]">TEAM</span>
                </p>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center z-10 mb-5">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="rounded-lg p-2 flex flex-col items-center space-y-3 cursor-pointer"
                        >
                            <div className="w-44 h-48 overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={144}
                                    height={144}
                                    className="w-full h-full object-cover mix-blend-screen"
                                />
                            </div>
                            <h3 className="text-white text-lg font-semibold">
                                {member.name}
                            </h3>
                            <h4 className="text-gray-400 text-sm">
                                {member.position}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
