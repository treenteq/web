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
                <main className="w-5/6 mx-auto grid grid-cols-1 mt-36 lg:grid-cols-2 gap-12 place-items-center sm:mt-20 lg:mt-20 mb-4">
                    <div className="space-y-8 text-center sm:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Unlock The Value Of{' '}
                            <span className="text-[#00C853]">Your</span> Data
                        </h1>
                        <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto sm:mx-0">
                            Transform your raw data into valuable insights.
                            Share, analyze, and monetize your data securely on
                            our platform.
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                            <a
                                href={
                                    'https://www.treenteq.com/LitePaper_treenteq.pdf'
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="text-white border rounded-lg border-white p-2 font-semibold">
                                    Learn More
                                </Button>
                            </a>
                            <Link href={'https://app.treenteq.com/'}>
                                <Button className="bg-green-700 hover:bg-black/60 text-white p-2 font-semibold">
                                    Treen It
                                </Button>
                            </Link>
                        </div>
                        <div className="flex flex-row justify-center sm:justify-start gap-5">
                            {contacts.map((contact, index) => (
                                <Link href={contact.url} key={index}>
                                    {contact.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Hide Image on Small Screens */}
                    <div className="hidden sm:flex justify-center">
                        <CardContainer className="inter-var">
                            <CardBody className="bg-black/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex justify-center items-center">
                                <CardItem
                                    translateZ="100"
                                    className="w-5/6 h-5/6"
                                >
                                    <Image
                                        src={'/hero.png'}
                                        width={400}
                                        height={600}
                                        alt="hero"
                                        className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
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
