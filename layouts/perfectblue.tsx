import localFont from 'next/font/local'

export const perfectblue = localFont({
    src: '../fonts/local/arbonnie.ttf'
});

const PerfectBlue = () => {
    return (
        <section className="relative bg-blue-950 w-full h-screen text-white">
            <div
                className="absolute inset-0 bg-[url('/images/perfectblue-bg.avif')] bg-no-repeat bg-cover bg-bottom opacity-10 pointer-events-none"
                aria-hidden="true"
            />

            <div className="relative z-10 w-full h-screen px-5 flex flex-col items-end text-right text-white">
                <h3 className={`${perfectblue.className} text-[300px] uppercase tracking-tighter transform -translate-y-16 -translate-x-1`}>
                    Perfect Blue
                </h3>
                <p className="text-3xl font-extralight uppercase tracking-tight transform -translate-y-44">
                    Satoshi Kon • 1997
                </p>

                <p className="max-w-3xl font-playfair transform -translate-y-20 italic pb-10 text-xl">
                    The anime movie, Perfect Blue, is often cited as a major influence on Darren Aronofsky&apos;s films,
                     Black Swan and Requiem of the Dream, as all explore the dark side of fame and identity.
                </p>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white"
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

export default PerfectBlue;
