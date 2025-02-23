'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'App', path: 'https://app.treenteq.com/' },
        {
            name: 'Docs',
            path: 'https://www.treenteq.com/LitePaper_treenteq.pdf',
            external: true,
        },
        { name: 'Our team', path: '/teams' },
        {
            name: 'Contact Us',
            path: 'https://docs.google.com/forms/d/e/1FAIpQLSfFGfRqMHaBRLy22fDHJvJQgagAP7sjoyVM0HETDOcz79VcVA/viewform',
            external: true,
        },
    ];
    return (
        <div className="w-full flex flex-col items-center justify-center">
            {/* Desktop Header */}
            <nav className="lg:flex flex-row justify-between items-center w-5/6 py-5 hidden">
                {/* Logo */}
                <Link href={'/'}>
                    <div className="flex justify-center items-center mt-1 lg:mt-3">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={135}
                            height={45}
                        />
                    </div>
                </Link>

                {/* Navigation Items */}
                <div className="flex flex-row gap-6 items-center">
                    {navItems.map((nav, index) =>
                        nav.external ? (
                            <a
                                href={nav.path}
                                key={index}
                                target="_blank"
                                className={`font-semibold lg:font-lg ${
                                    pathname === nav.path
                                        ? 'text-[#00A340] font-extrabold'
                                        : 'text-white hover:text-[#00A340]'
                                }`}
                            >
                                {nav.name}
                            </a>
                        ) : (
                            <Link href={nav.path} key={index}>
                                <p
                                    className={`font-semibold lg:font-lg ${
                                        pathname === nav.path
                                            ? 'text-[#00A340] font-extrabold'
                                            : 'text-white hover:text-[#00A340]'
                                    }`}
                                >
                                    {nav.name}
                                </p>
                            </Link>
                        ),
                    )}
                </div>

                {/* CTA Button */}
                <Link href={'/waitlist'}>
                    <Button className="bg-green-700 hover:bg-black/40">
                        Join The Waitlist
                    </Button>
                </Link>
            </nav>

            {/* Mobile Header */}
            <nav className="flex justify-between items-center w-full px-5 py-4 lg:hidden">
                {/* Mobile Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Menu className="text-white" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-slate-900/80">
                        {navItems.map((nav, index) =>
                            nav.external ? (
                                <a
                                    href={nav.path}
                                    key={index}
                                    target="_blank"
                                    className={`font-semibold ${
                                        pathname === nav.path
                                            ? 'text-[#00A340]'
                                            : 'text-white'
                                    }`}
                                >
                                    <DropdownMenuItem>
                                        {nav.name}
                                    </DropdownMenuItem>
                                </a>
                            ) : (
                                <Link href={nav.path} key={index}>
                                    <DropdownMenuItem
                                        className={`font-semibold ${
                                            pathname === nav.path
                                                ? 'text-[#00A340]'
                                                : 'text-white'
                                        }`}
                                    >
                                        {nav.name}
                                    </DropdownMenuItem>
                                </Link>
                            ),
                        )}

                        {/* CTA Button */}
                        <DropdownMenuItem>
                            <Link href={'/waitlist'}>
                                <Button className="bg-green-700 hover:bg-black/40 w-full">
                                    Join The Waitlist
                                </Button>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Logo */}
                <Link href={'/'} className="flex justify-center items-center">
                    <Image src="/logo.svg" alt="logo" width={110} height={35} />
                </Link>
            </nav>
        </div>
    );
}
