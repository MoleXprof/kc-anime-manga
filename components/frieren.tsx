import localFont from 'next/font/local'

export const frierenFont = localFont({
    src: '../fonts/Rekalgera-Regular.otf'
});

const Frieren = () => {
    return (
        <section className="bg-[url('/images/frieren-bg.jpeg')] bg-no-repeat bg-cover bg-bottom w-full h-screen relative cursor-default">
            <div className="absolute inset-0 bg-green-600/30 mix-blend-multiply z-0" />
            <div className="w-full h-screen px-5 relative z-10">
                <div className='mx-auto w-max flex flex-col items-center'>
                    <p className='font-playfair text-white text-xl transform translate-y-10 italic'>
                        My Most Influential Anime
                    </p>
                    <h3 className={`${frierenFont.className} inline-block text-[300px] uppercase text-frieren transform -translate-y-16`}>
                        Frieren
                    </h3>
                    <div className='w-full flex items-center justify-center transform -translate-y-48 gap-3'>
                        <hr className="w-full h-0.5 bg-frieren ml-1" />
                        <p className={`${frierenFont.className} text-3xl text-frieren whitespace-nowrap`}>
                            Beyond Journey&apos;s End
                        </p>
                        <hr className="w-full h-0.5 bg-frieren mr-1" />
                    </div>
                </div>
                <div className='text-white max-w-xl'>
                    blah blah
                    {/* Frieren is a fantasy anime that follows the story of an elven mage named Frieren, who was part of a hero party that defeated the Demon King.
                    The series explores themes of time, memory, and the fleeting nature of life as Frieren embarks on a journey to understand the world and her own existence
                    after the hero party disbands. With its unique storytelling and emotional depth, Frieren has left a lasting impact on me and is one of my
                    most influential anime. */}
                </div>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 absolute bottom-5 left-1/2 transform -translate-x-1/2 text-frieren"
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

export default Frieren;