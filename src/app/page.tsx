/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import SwipeButton from "@/components/SwipeButton";
import WaitlistSignup from "@/components/WaitlistSignup";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [isTopSectionVisible, setTopSectionVisible] = useState(true);
    const [os, setOs] = useState<string>("");

    const handleSwipeComplete = () => {
        setTopSectionVisible(false);
    };

    const handleSwipeReset = () => {
        setTopSectionVisible(true);
    };

    useEffect(() => {
        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault();
        };

        const disableTextSelection = (event: Event) => {
            event.preventDefault();
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("selectstart", disableTextSelection);

        const userPlatform = navigator.platform.toLowerCase();
        if (userPlatform.includes("win")) {
            setOs("windows");
        } else if (userPlatform.includes("mac")) {
            setOs("mac");
        }

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("selectstart", disableTextSelection);
        };
    }, []);

    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col lg:flex-row"
            style={{ backgroundImage: `url('/web-bg.svg')` }}
        >
            {/* Black Screen */}
            <div className="w-full lg:w-1/2 bg-black flex flex-col order-1 lg:order-2 min-h-screen lg:min-h-0">
                <div className="flex justify-end items-center p-4">
                    <nav className="flex gap-4 lg:gap-10 text-white text-sm lg:text-base font-medium mr-4 lg:mr-14">
                        <a
                            href="https://www.linkedin.com/company/treenteq/"
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Partner with us
                        </a>
                        <a
                            href="/LitePaper_treenteq.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex text-[#D8E9A8] items-center gap-1"
                        >
                            Docs
                            <span>
                                <Image
                                    src="/new-tab-icon.svg"
                                    alt="New Tab"
                                    width={15}
                                    height={15}
                                />
                            </span>
                        </a>
                        <a
                            href="https://forms.gle/1fbWksFmLCbcToiv8"
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contact Us
                        </a>
                    </nav>
                </div>
                <div className="flex-1 flex items-center justify-center px-4 lg:px-0 mb-10 lg:mb-20">
                    <Image
                        src="/new-right.svg"
                        alt="Centered Image"
                        width={550}
                        height={550}
                        className="w-[400px] lg:w-[550px] h-auto"
                    />
                </div>
                <div className="flex justify-between items-center p-4 mb-12 lg:mb-0">
                    <div>
                        <Image
                            src="/logo-black.svg"
                            alt="Logo"
                            width={200}
                            height={200}
                            className="w-[140px] lg:w-[200px] h-auto"
                        />
                    </div>
                    <div className="flex gap-4 lg:gap-6 mr-4 lg:mr-14">
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
                            href="https://discord.gg/PUUpUcakmC"
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
            {/* White Section */}
            <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                <div
                    className={`h-[600px] ${
                        isTopSectionVisible ? "bg-white" : ""
                    } mt-4 lg:mt-10 mx-4 lg:mx-10 rounded-3xl relative transition-all duration-300`}
                >
                    <a href="/" className="absolute top-4 left-4">
                        <Image
                            src="/white-logo.svg"
                            alt="Left Logo"
                            width={120}
                            height={120}
                            className="w-[100px] lg:w-[180px] h-auto"
                        />
                    </a>
                    {isTopSectionVisible && (
                        <div className="flex items-center justify-center h-full py-20 lg:py-0">
                            <Image
                                src="/text1.svg"
                                alt="Centered Image"
                                width={400}
                                height={400}
                                className="w-[280px] lg:w-[400px] h-auto"
                            />
                        </div>
                    )}
                </div>
                <div
                    className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
                        isTopSectionVisible ? "opacity-0" : "opacity-100"
                    }`}
                >
                    <WaitlistSignup />
                </div>

                <div className="flex-[1] flex items-center justify-center py-10 lg:py-10 mt-auto">
                    <SwipeButton
                        onComplete={handleSwipeComplete}
                        onReset={handleSwipeReset}
                        text="TREEN IT"
                    />
                </div>
            </div>
        </div>
    );
}
