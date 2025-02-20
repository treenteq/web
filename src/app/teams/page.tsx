import Background from '@/components/Background';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import React from 'react';

export default function Teams() {
    const team = [
        {
            image: '/razaul_coloured.png',
            name: 'Shekh Razaul Islam',
            position: 'Lead, Finance',
        },
        {
            image: '/jesu_coloured_.png',
            name: 'Jesu Neelkamal Borah',
            position: 'Lead, Communications',
        },
        {
            image: '/dhrupad_coloured.png',
            name: 'Dhrupad Das',
            position: 'Advisor, Product and Legal',
        },
        {
            image: '/rahul_coloured.png',
            name: 'Rahul Barman',
            position: 'Lead, Tech',
        },
        {
            image: '/barrel_coloured.png',
            name: 'Mr. Barrel',
            position: 'Inspirarion',
        },
        { image: '/nipu.png', name: 'Nipu Das', position: 'Developer, UI/UX' },
        {
            image: '/vansh_coloured.png',
            name: 'Vansh Sahay',
            position: 'Developer, Blockchain',
        },
        {
            image: '/sumit_coloured.png',
            name: 'Sumit Mazumdar',
            position: 'Developer, Full Stack',
        },
    ];
    return (
        <div className="min-h-screen overflow-y-auto relative inset-0 bg-gradient-to-bl from-[#373737] to-black flex flex-col justify-center items-center mb-5">
            <div className="fixed inset-0 w-full h-full pointer-events-none">
                <Background />
            </div>
            <div className="w-full absolute top-0 flex flex-col justify-center items-center">
                <NavBar />
                <p className="text-white my-6 text-2xl">
                    A TEAM OF <span className="text-[#00A340]">WEB3</span>{' '}
                    EXPERTS
                </p>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center z-10">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="border border-white bg-black/50 rounded-lg p-4 flex flex-col items-center space-y-3 hover:shadow-lg hover:border-green-400 transition duration-300 cursor-pointer"
                        >
                            <div className="w-36 h-36 overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={144}
                                    height={144}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-white text-lg font-semibold">
                                {member.name}
                            </h3>
                            <h4 className="text-gray-400">{member.position}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
