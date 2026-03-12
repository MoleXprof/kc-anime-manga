import Link from 'next/link'

const Akira = () => {
    return (
        <section className="bg-[url('/images/akira-bg.png')] bg-no-repeat bg-cover bg-bottom w-full h-screen relative">
            <div className="w-full h-screen px-5">
                <p className='font-playfair text-black text-xl transform translate-y-10 italic'>
                    Cultural Impact of Anime
                </p>
                <h3 className="text-[300px] font-sofia uppercase text-black tracking-tighter transform -translate-y-13">
                    Akira
                </h3>
                <p className="text-3xl font-semibold uppercase text-black tracking-tighter leading-none self-start transform -translate-y-44">
                    50 new colours • Akira slide
                </p>
                <p className="max-w-3xl font-playfair transform -translate-y-20 italic pb-10 text-xl">
                    The anime revolutionized animation by discovering 50 new colors previously not been seen on screen.
                    It also popularized the iconic “Akira slide,” a motorcycle scene that has since been referenced and recreated in many films and television shows.
                </p>

                <div className="flex gap-1 transform -translate-y-24">
                    <div className="bg-[#253558] w-15 h-15 border-black border-[1px]" />
                    <div className="bg-[#406b91] w-15 h-15 border-black border-[1px]" />
                    <div className="bg-[#6c9fa6] w-15 h-15 border-black border-[1px]" />
                    <div className="bg-[#a4749b] w-15 h-15 border-black border-[1px]" />
                </div>

                <Link
                    href="/me"
                    className="flex justify-center items-center mt-5 px-6 py-2 rounded-4xl border-[1px]
                        bg-transparent text-black border-black hover:text-zinc-800 hover:border-zinc-800
                        text-sm md:text-3xl font-bold transition duration-100 font-playfair"
                >
                    next
                </Link>

            </div>

            <p className='absolute bottom-6 left-6 text-black font-playfair text-xl italic'>
                What is E<b>art</b>h without art? Just a rock... or Eh.
            </p>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 absolute bottom-5 left-1/2 transform -translate-x-1/2 text-black"
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