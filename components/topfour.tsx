import Image from "next/image";
import ToolTip from "./tooltip";

const posters = [
    { src: "/images/flcl-poster.jpeg", alt: "FLCL poster", tooltip: "FLCL (2000)" },
    { src: "/images/flcl-poster.jpeg", alt: "FLCL poster", tooltip: "FLCL (2000)" },
    { src: "/images/flcl-poster.jpeg", alt: "FLCL poster", tooltip: "FLCL (2000)" },
    { src: "/images/flcl-poster.jpeg", alt: "FLCL poster", tooltip: "FLCL (2000)" },
];

const TopFour = () => {
    return (
        <div className="px-5 py-5 flex flex-col items-center justify-center gap-2 w-fit">
            <h3 className="text-bold text-4xl md:text-6xl text-accent w-full text-center font-sofia font-bold">
             Favourite Animes
            </h3>

            <div className="flex gap-4">
                {posters.map((p, i) => (
                    <div className="relative group" key={i}>
                        <Image
                            src={p.src}
                            alt={p.alt}
                            width={200}
                            height={500}
                            className="rounded-md border border-accent hover:ring-2 hover:ring-accent-highlight hover:border-accent-highlight duration-150 cursor-pointer"
                        />

                        <ToolTip text={p.tooltip} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopFour;