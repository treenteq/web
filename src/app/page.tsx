"use client";

import SwipeButton from "@/components/SwipeButton";
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
    <div className="min-h-screen bg-cover bg-center flex flex-col lg:flex-row" style={{ backgroundImage: `url('/web-bg.svg')` }}>
      {/* Black Screen */}
      <div className="w-full lg:w-1/2 bg-black flex flex-col order-1 lg:order-2 min-h-screen lg:min-h-0">
        <div className="flex justify-end items-center p-4">
          <nav className="flex gap-4 lg:gap-10 text-white text-sm lg:text-base font-medium mr-4 lg:mr-14">
            <a href="/business" className="hover:underline">Business</a>
            <a href="/docs" target="_blank" rel="noopener noreferrer" className="hover:underline flex text-[#D8E9A8] items-center gap-1">
              Docs
              <span>
                <Image src="/new-tab-icon.svg" alt="New Tab" width={15} height={15} />
              </span>
            </a>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </nav>
        </div>
        <div className="flex-1 flex items-center justify-center px-4 lg:px-0 mb-10 lg:mb-20">
          <Image src="/right-section-image.svg" alt="Centered Image" width={550} height={550} className="w-[400px] lg:w-[550px] h-auto" />
        </div>
        <div className="flex justify-between items-center p-4 mb-12 lg:mb-0">
          <div>
            <Image src="/logo-black.svg" alt="Logo" width={200} height={200} className="w-[140px] lg:w-[200px] h-auto" />
          </div>
          <div className="flex gap-4 lg:gap-6 mr-4 lg:mr-14">
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/X.svg" alt="X" width={25} height={25} className="w-[20px] lg:w-[25px] h-auto" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <Image src="/Vector.svg" alt="Discord" width={25} height={25} className="w-[20px] lg:w-[25px] h-auto mt-1" />
            </a>
            <a href="https://in.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/LinkedIn.svg" alt="LinkedIn" width={25} height={25} className="w-[20px] lg:w-[25px] h-auto" />
            </a>
          </div>
        </div>
      </div>
      {/* White Section */}
      <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
        <div className={`h-[600px] ${isTopSectionVisible ? "bg-white" : ""} mt-4 lg:mt-10 mx-4 lg:mx-10 rounded-3xl relative transition-all duration-300`}>
          <a href="/logo-left-link" className="absolute top-4 left-4" target="_blank" rel="noopener noreferrer">
            <Image src="/white-logo.svg" alt="Left Logo" width={120} height={120} className="w-[100px] lg:w-[180px] h-auto" />
          </a>
          <a href="/logo-right-link" className="absolute top-7 right-4" target="_blank" rel="noopener noreferrer">
            <Image className="mt-0 mr-4 w-[90px] lg:w-[140px] h-auto" src="/download-app.svg" alt="Right Logo" width={140} height={140} />
          </a>
          {isTopSectionVisible && (
            <div className="flex items-center justify-center h-full py-20 lg:py-0">
              <Image src="/text1.svg" alt="Centered Image" width={400} height={400} className="w-[280px] lg:w-[400px] h-auto" />
            </div>
          )}
        </div>
        <div className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
          isTopSectionVisible ? "opacity-0" : "opacity-100"
        }`}>
          {os === "windows" || os === "mac" ? (
            <Image
              src="/win-mac.svg"
              alt={`${os} Centered Image`}
              width={240}
              height={240}
              className="w-[180px] lg:w-[240px] h-auto"
            />
          ) : (
            <Image
              src="/win-mac.svg"
              alt="Default Centered Image"
              width={240}
              height={240}
              className="w-[180px] lg:w-[240px] h-auto"
            />
          )}
        </div>
        <div className={`absolute top-[60%] left-1/2 transform -translate-x-1/2 transition-all duration-150 ${
          isTopSectionVisible ? "opacity-0" : "opacity-100"
        }`}>
          <h2 className="text-white text-center text-2xl font-bold lg:text-xl mb-4">Download our Mobile App</h2>
          <div className="flex justify-center items-center space-x-4">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/app-store.svg"
                alt="App Store"
                width={120}
                height={40}
                className="w-[100px] lg:w-[120px] h-auto"
              />
            </a>
            <span className="text-white font-bold">or</span>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/play-store.svg"
                alt="Google Play"
                width={115}
                height={25}
                className="w-[95px] lg:w-[115px] h-auto"
              />
            </a>
          </div>
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
