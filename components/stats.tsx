"use client"

import AnimatedNumbers from "react-animated-numbers"

const Stats = () => {
    return (
        <div className="py-10 flex flex-row items-center justify-center divide-x divide-accent text-accent text-5xl">
            <div className="flex flex-col items-center text-center">
                <div className="mx-8 font-sofia font-bold tracking-tighter">
                    <AnimatedNumbers animateToNumber={237} />
                </div>
                <p className="text-lg font-light font-playfair">
                    animes
                </p>
            </div>

            <div className="flex flex-col items-center text-center">
                <div className="mx-8 font-sofia font-bold tracking-tighter">
                    <AnimatedNumbers animateToNumber={3981} useThousandsSeparator />
                </div>
                <p className="text-lg font-light font-playfair">
                    episodes
                </p>
            </div>

            <div className="flex flex-col items-center text-center">
                <div className="mx-8 font-sofia font-bold tracking-tighter">
                    <AnimatedNumbers animateToNumber={52} />
                </div>
                <p className="text-lg font-light font-playfair">
                    mangas
                </p>
            </div>

            <div className="flex flex-col items-center text-center">
                <div className="mx-8 font-sofia font-bold tracking-tighter">
                    <AnimatedNumbers animateToNumber={5177} useThousandsSeparator />
                </div>
                <p className="text-lg font-light font-playfair">
                    chapters
                </p>
            </div>

            <div className="flex flex-col items-center text-center">
                <div className="mx-8 font-sofia font-bold tracking-tighter">
                    <AnimatedNumbers animateToNumber={56} />
                </div>
                <p className="text-lg font-light font-playfair">
                    films
                </p>
            </div>
        </div>
    )
};

export default Stats;