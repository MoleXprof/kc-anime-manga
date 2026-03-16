import Link from 'next/link'
import Image from 'next/image'

const Akira = () => {
    return (
        <section className="relative bg-dark-background w-full h-screen text-gray-200">
            <div
                className="absolute inset-0 bg-[url('/images/akira-bg.webp')] bg-no-repeat bg-cover bg-bottom opacity-2 pointer-events-none"
                aria-hidden="true"
            />

            <div className="relative z-10 w-full h-screen flex justify-between px-5">
                <div className='transform -translate-y-4'>
                    <p className='font-playfair text-xl transform translate-y-10 italic'>
                        Cinematic Impact of Anime
                    </p>
                    <div className="relative w-full h-auto">
                        <h3 className="text-[275px] font-sofia uppercase tracking-tighter transform -translate-y-13 z-0">
                            Akira
                        </h3>

                        <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
                            <Image
                                src="/images/akira-writing.png"
                                alt="Akira Writing"
                                width={375}
                                height={100}
                                className="block -translate-y-14 -translate-x-40"
                            />
                        </div>
                    </div>

                    <p className="text-3xl font-extralight uppercase tracking-tight transform -translate-y-43">
                        Katsuhiro Otomo • 1988
                    </p>
                    <p className="max-w-3xl font-playfair transform -translate-y-20 italic pb-10 text-xl">
                        The anime movie, Akira, revolutionized animation by discovering 50 new colours previously never seen before on screen.
                        It also popularized the iconic “Akira slide,” a motorcycle scene that has since been referenced and recreated in many films and television shows.
                    </p>

                    {/* a link for akira slide homage: https://www.youtube.com/watch?v=A9hCzjBc7Q4 */}
                    {/* Even influenced Kanye West Stronger music video */}
                    {/* ready player one, kaneda bike */}

                    <div className="flex gap-1 transform -translate-y-24">
                        <div className="bg-[#253558] w-15 h-15 border-gray-200 border-[1px]" />
                        <div className="bg-[#406b91] w-15 h-15 border-gray-200 border-[1px]" />
                        <div className="bg-[#6c9fa6] w-15 h-15 border-gray-200 border-[1px]" />
                        <div className="bg-[#a4749b] w-15 h-15 border-gray-200 border-[1px]" />
                    </div>
                </div>

                <Link
                    href="/culture"
                    className="mt-5 self-start px-6 pt-2 pb-3 rounded-4xl border-[1px]
                        bg-transparent text-gray-200 border-gray-200 hover:text-white hover:border-white
                        text-sm md:text-3xl font-bold transition duration-100 font-playfair"
                >
                    next
                </Link>
            </div>

            <p className='absolute bottom-6 left-6 text-gray-200 font-playfair text-xl italic'>
                What is E<b>art</b>h without art? Just a rock... or Eh.
            </p>

            <Image
                src="/images/canon.png"
                alt="Canon sticker"
                width={200}
                height={200}
                className="absolute right-1/3 top-1/5 -rotate-[30deg] z-10 pointer-events-none"
            />

            <Image
                src="/images/akira-bike.png"
                alt="Akira Bike"
                width={500}
                height={500}
                className="absolute right-0 bottom-1/12 z-10 pointer-events-none"
            />

            <Image
                src="/images/akira-panel.jpg"
                alt="Akira Panel"
                width={500}
                height={500}
                className="absolute right-1/8 bottom-1/4 z-1 pointer-events-none"
            />
            <div className="absolute right-1/8 bottom-1/4 z-0 pointer-events-none w-[500px] h-[486.81px] bg-dark-background-highlight -translate-4" />

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 absolute bottom-5 left-1/2 transform -translate-x-1/2 text-gray-200"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>
        </section>
    )
};

export default Akira;
