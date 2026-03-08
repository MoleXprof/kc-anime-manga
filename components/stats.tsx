const Stats = () => {
    return (
        <div className="py-10 flex flex-row items-center justify-center divide-x divide-accent text-accent text-5xl">
            <div className="flex flex-col items-center text-center">
                <p className="mx-8 font-sofia font-bold">
                    237
                </p>
                <p className="text-xl font-light font-playfair">
                    animes
                </p>
            </div>

            <div className="flex flex-col items-center text-center">
                <p className="mx-8 font-sofia font-bold">
                    52
                </p>
                <p className="text-xl font-light font-playfair">
                    mangas
                </p>
            </div>

            <div className="flex flex-col items-center text-center">
                <p className="mx-8 font-sofia font-bold">
                    56
                </p>
                <p className="text-xl font-light font-playfair">
                    films
                </p>
            </div>
        </div>
    )
};

export default Stats;