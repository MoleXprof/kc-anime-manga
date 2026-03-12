import Image from "next/image";

const History = () => {
    return (
        <section className="w-full h-screen">
            <h2>
                History of Anime and Manga
            </h2>
            <Image
                src="/images/japan.png"
                alt="Japan Silouette"
                width={500}
                height={500}
            />
        </section>
    )
};

export default History;