import Link from "next/link";
import Image from "next/image";

const History = () => {
    return (
        <section className="w-full h-screen bg-background">
            <div className="flex justify-between px-5">
                <div className='transform -translate-y-4'>
                    <p className='font-playfair text-black text-xl transform translate-y-10 italic'>
                        Origins to Global Phenomenon
                    </p>
                </div>

                <Link
                    href="/cinema"
                    className="mt-5 self-start px-6 pt-2 pb-3 rounded-4xl border-[1px]
                        bg-transparent text-black border-black hover:text-zinc-800 hover:border-zinc-800
                        text-sm md:text-3xl font-bold transition duration-100 font-playfair"
                >
                    next
                </Link>

            </div>
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
