import Link from 'next/link'

const End = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen bg-[url("/images/end-bg.jpg")] bg-no-repeat bg-cover bg-bottom'>
            <div className="w-full h-screen flex items-start justify-between px-5">
                <div className='flex flex-col gap-0'>
                    <div className='flex gap-2 leading-none items-baseline transform -translate-x-9 -translate-y-4'>
                        <h2 className='text-[300px] font-sofia uppercase text-accent tracking-tighter italic'>
                            Thank You
                        </h2>
                        <span className="block w-5 h-5 bg-red-500 rounded-full" aria-hidden="true" />
                    </div>

                    <div className="text-3xl font-semibold uppercase text-accent tracking-tighter transform -translate-x-1 -translate-y-16">
                        ありがとう
                    </div>
                </div>

                <Link
                    href="/"
                    className="mt-5 px-6 py-2 rounded-4xl border-[1px]
                        bg-transparent text-accent border-accent hover:text-accent-highlight hover:border-accent-highlight
                        text-sm md:text-3xl font-bold transition duration-100 font-playfair"
                >
                    return to start
                </Link>
            </div>

            <p className='fixed bottom-6 right-6 text-accent font-playfair z-50 font-bold text-2xl italic'>
                Built by Kyle Chin.
            </p>
        </div>
    );
};

export default End;
