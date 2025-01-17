"use client";

import Image from "next/image";

export default function TreeningSoon() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
            style={{ backgroundImage: `url('/web-bg.svg')` }}
        >
            <div className="w-full max-w-4xl bg-black rounded-3xl p-10 mx-4 relative overflow-hidden">
                {/* Logo */}
                <div className="absolute top-6 left-6">
                    <Image
                        src="/white-logo.svg"
                        alt="Treenteq Logo"
                        width={180}
                        height={180}
                        className="w-[140px] lg:w-[180px] h-auto"
                    />
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">TREEN</span>
                        <span className="text-green-500">ING</span>
                        <span className="text-white"> SOON!</span>
                    </h1>
                    <p className="text-gray-300 text-lg lg:text-xl max-w-2xl">
                        Take full control of your data with our decentralized
                        platform. Transform your datasets into tokenized assets
                        that are secure, private, and ready for monetization.
                    </p>
                </div>

                {/* Social Links */}
                <div className="absolute bottom-6 right-6 flex gap-6">
                    <a
                        href="https://x.com/treenteq"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/X.svg"
                            alt="X"
                            width={25}
                            height={25}
                            className="w-[20px] lg:w-[25px] h-auto"
                        />
                    </a>
                    <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/Vector.svg"
                            alt="Discord"
                            width={25}
                            height={25}
                            className="w-[20px] lg:w-[25px] h-auto mt-1"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/treenteq/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/LinkedIn.svg"
                            alt="LinkedIn"
                            width={25}
                            height={25}
                            className="w-[20px] lg:w-[25px] h-auto"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
