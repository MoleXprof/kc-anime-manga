import Link from 'next/link'

const Culture = () => {
    return (
        <div className="w-full h-screen bg-background">
            <div className="w-full h-screen flex justify-between px-5">
                <div className='transform -translate-y-4'>
                    <p className='font-playfair text-black text-xl transform translate-y-10 italic'>
                        Cultural Impact of Anime
                    </p>
                </div>

                {/* random impacts:
                    - one piece is the most popular manga in the world, with over 500 million copies sold worldwide (more than superman?? fact check)
                    - astro boy?? the first big anime?? fact check
                    - jjba x gucci collab
                    - aot; IMBD top 100 tv shows of all time, the only anime on the list
                    - serial lain experiment and samurai champloo music
                    - spirited away won an oscar for best animated feature in 2003, the first anime to do so
                    - fortnite x anime collabs (attack on titan, naruto, dragon ball z, my hero academia)
                */}

                <Link
                    href="/me"
                    className="mt-5 self-start px-6 pt-2 pb-3 rounded-4xl border-[1px]
                        bg-transparent text-black border-black hover:text-zinc-800 hover:border-zinc-800
                        text-sm md:text-3xl font-bold transition duration-100 font-playfair"
                >
                    next
                </Link>
            </div>
        </div>
    )
}

export default Culture;
