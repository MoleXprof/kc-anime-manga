import Link from 'next/link'

const Thanks = () => {
    return (
        <div>
            Thanks

            <Link
                href="/"
                className="flex justify-center items-center mt-5 px-6 py-2 rounded-4xl border-[1px]
                    bg-transparent text-black border-black hover:text-zinc-800 hover:border-zinc-800
                    text-sm md:text-3xl font-bold transition duration-100 font-playfair"
            >
                start
            </Link>
        </div>
    )
}

export default Thanks;
