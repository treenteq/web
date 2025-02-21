import Background from '@/components/Background';
import Image from 'next/image';
import Link from 'next/link';
import { BsDiscord, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import NavBar from '@/components/NavBar';

export default function Home() {
    const contacts = [
        {
            icon: <BsTwitterX className="text-white w-6 h-6" />,
            url: 'https://x.com/treenteq',
        },
        {
            icon: <BsLinkedin className="text-white w-6 h-6" />,
            url: 'https://www.linkedin.com/company/treenteq/posts/?feedView=all',
        },
        {
            icon: <BsDiscord className="text-white w-6 h-6" />,
            url: 'https://discord.com/invite/PUUpUcakmC',
        },
    ];

    return (
        <div className="min-h-screen overflow-y-auto relative inset-0 bg-gradient-to-bl from-[#373737] to-black no-scrollbar">
            <div className="fixed inset-0 w-full h-full">
                <Background />
            </div>

            <div className="absolute top-0 w-full flex flex-col justify-center items-center">
                <NavBar />

                {/* main content */}
                <main className="w-5/6 lg:w-full 2xl:w-5/6 3xl:w-3/5 mx-auto px-6 sm:px-24 flex flex-col lg:flex-row items-start justify-between gap-10 mt-20 sm:mt-12 lg:mt-10 mb-5 hide-scrollbar">
                    {/* Left Section */}
                    <div className="space-y-6 w-full text-center lg:text-left lg:mt-12">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[5rem] 3xl:text-[4.5rem] font-bold text-white leading-tight">
                            Unlock The <br /> Value Of <br />
                            <span className="text-[#00C853]">Your</span> Data
                        </h1>
                        <p className="text-zinc-400 text-lg sm:text-xl 2xl:text-2xl 3xl:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Transform your raw data into valuable insights.
                            Share, analyze, and monetize your data securely on
                            our platform.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Link href="https://www.treenteq.com/LitePaper_treenteq.pdf">
                                <Button className="text-white border border-white px-4 py-2 rounded-lg font-semibold transition-all hover:bg-white hover:text-black">
                                    Learn More
                                </Button>
                            </Link>
                            <Link href="https://app.treenteq.com/">
                                <Button className="bg-green-700 hover:bg-black text-white px-4 py-2 rounded-lg font-semibold transition-all">
                                    Treen It
                                </Button>
                            </Link>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex justify-center lg:justify-start gap-5 mt-4">
                            {contacts.map((contact, index) => (
                                <Link
                                    href={contact.url}
                                    key={index}
                                    className="text-white text-2xl hover:text-[#00C853] transition-all"
                                >
                                    {contact.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="hidden md:flex justify-center items-center w-full lg:w-1/2">
                        <CardContainer className="inter-var">
                            <CardBody className="bg-black/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[28rem] 2xl:w-[32rem] 3xl:w-[30rem] h-auto rounded-xl p-6 border flex justify-center items-center">
                                <CardItem
                                    translateZ="100"
                                    className="w-full h-auto"
                                >
                                    <Image
                                        src="/hero.png"
                                        width={400}
                                        height={500}
                                        alt="hero"
                                        className="w-full h-auto object-cover rounded-xl group-hover/card:shadow-xl"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </main>
            </div>
        </div>
    );
}
