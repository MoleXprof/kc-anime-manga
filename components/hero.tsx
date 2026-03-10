import Link from 'next/link'

const Hero = () => {
    return (
        <section className="bg-[url('/images/fuji.jpeg')] bg-no-repeat bg-cover bg-bottom w-full h-screen">
            <div className="w-full h-screen flex items-start justify-between px-5">
                <div className='flex flex-col'>
                    <div className='flex gap-2 leading-none items-baseline -mb-24'>
                        <div className="text-[300px] font-sofia uppercase text-accent tracking-tighter italic transform -translate-y-4">
                            Anime
                        </div>
                        <div className="text-4xl font-sofia uppercase text-accent italic transform -translate-y-4">
                            &
                        </div>
                    </div>
                    <div className='flex flex-row items-baseline-last'>
                        <div className="text-[300px] font-sofia uppercase text-accent tracking-tighter leading-none italic self-start transform -translate-x-3 -translate-y-4">
                            Manga
                        </div>
                        <span className="ml-3 block w-5 h-5 bg-red-500 rounded-full transform -translate-y-19" aria-hidden="true" />
                    </div>
                    <div className="text-3xl font-semibold uppercase text-accent tracking-tighter leading-none self-start transform -translate-x-1 -translate-y-18">
                        アニメとマンガ
                    </div>
                </div>

                <Link
                    href="/home"
                    className="flex justify-center items-center mt-5 px-6 py-2 rounded-4xl border-[1px]
                        bg-transparent text-accent border-accent hover:text-accent-highlight hover:border-accent-highlight
                        text-sm md:text-3xl font-bold transition duration-100 font-playfair"
                >
                    view archive
                </Link>
            </div>
            <p className='fixed bottom-6 right-6 text-accent font-playfair z-50 font-bold text-2xl italic'>
                An archive of anime and manga that shaped my taste.
            </p>
        </section>
    );
};

export default Hero;