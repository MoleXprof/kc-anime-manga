import Link from 'next/link'

const Me = () => {
    return (
        <div className="w-full h-screen">
            <div className="w-full h-screen flex justify-between px-5">
                <div className='transform -translate-y-4'>
                    <p className='font-playfair text-black text-xl transform translate-y-10 italic'>
                        Anime: From Panels to Purpose
                    </p>
                </div>

                <Link
                    href="/thanks"
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

export default Me;
