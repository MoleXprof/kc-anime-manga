import Link from 'next/link'

const Me = () => {
    return (
        <div className="w-full h-screen">
            hello it is me

            <Link
                href="/thanks"
                className="flex justify-center items-center mt-5 px-6 py-2 rounded-4xl border-[1px]
                    bg-transparent text-black border-black hover:text-zinc-800 hover:border-zinc-800
                    text-sm md:text-3xl font-bold transition duration-100 font-playfair"
            >
                next
            </Link>
        </div>
    )
}

export default Me;