import Link from "next/link";
import Image from "next/image";

const History = () => {
    return (
        <section className="w-full h-screen px-5 py-10 flex flex-col items-center justify-center gap-10">
            <h2>
                History of Anime and Manga
            </h2>

            <Link
                href="/impact"
                className="flex justify-center items-center mt-5 px-6 py-2 rounded-4xl border-[1px]
                    bg-transparent text-accent border-accent hover:text-accent-highlight hover:border-accent-highlight
                    text-sm md:text-3xl font-bold transition duration-100 font-playfair"
            >
                next
            </Link>

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