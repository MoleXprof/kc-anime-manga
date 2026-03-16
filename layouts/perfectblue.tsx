import localFont from 'next/font/local'

export const perfectblue = localFont({
    src: '../fonts/local/arbonnie.ttf'
});

const PerfectBlue = () => {
    return (
        <section className="bg-[url('/images/perfectblue-bg.avif')] bg-no-repeat bg-cover bg-bottom w-full h-screen relative">
            <div className="w-full h-screen px-5">
                <h3 className={`${perfectblue.className} text-[300px] uppercase text-white tracking-tighter text-right transform -translate-y-16`}>
                    Perfect Blue
                </h3>
                <p className="text-3xl font-extralight uppercase text-white tracking-tighter leading-none self-start text-right transform -translate-y-44">
                    Black Swan • Requiem of the Dream
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
