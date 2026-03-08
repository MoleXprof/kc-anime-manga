const Stats = () => {
    return (
        <div className="py-10 flex flex-row items-center justify-center divide-x divide-accent text-accent text-5xl">
            <div className="flex flex-col items-center text-center">
                <p className="mx-8">
                    237
                </p>
                <p className="text-xl uppercase font-light">
                    animes
                </p>
            </div>

            <div className="flex flex-col items-center text-center">
                <p className="mx-8">
                    52
                </p>
                <p className="text-xl uppercase font-light">
                    mangas
                </p>
            </div>

            <div className="flex flex-col items-center text-center">
                <p className="mx-8">
                    56
                </p>
                <p className="text-xl uppercase font-light">
                    films
                </p>
            </div>
        </div>
    )
};

export default Stats;