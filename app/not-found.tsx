import Link from 'next/link'

const NotFound = () => {
    return (
        <section className="bg-[url('/images/lookback-bg.png')] bg-no-repeat bg-cover bg-bottom w-full h-screen">
            <div className="w-full h-screen flex items-center justify-center px-5 flex-col">
                <div className="text-[200px] uppercase text-white tracking-tight italic font-sofia">
                    404 - Not Found
                </div>

                <Link
                    href="/"
                    className="flex justify-center items-center mt-5 px-6 py-2 rounded-4xl border-[1px]
                        bg-transparent text-white border-white hover:text-gray-300 hover:border-gray-300
                        text-sm md:text-3xl font-bold transition duration-100 font-playfair transform -translate-y-16"
                >
                    return to archive
                </Link>
            </div>
            <p className='fixed bottom-6 right-6 text-white font-playfair z-50 font-bold text-2xl italic'>
                Oops... looks like the page you&apos;re looking for doesn&apos;t exist.
            </p>
        </section>
    );
};

export default NotFound;
