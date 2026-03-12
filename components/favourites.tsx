import Image from "next/image";
import ToolTip from "./tooltip";

export type Poster = { src: string; alt: string; tooltip: string };
export type Props = { posters: Poster[]; title: string; subtitle?: string };

const Favourites = ({ posters, title, subtitle }: Props) => {
    return (
        <div className="px-5 py-5 flex flex-col items-center justify-center gap-2 w-fit">
            <h3 className="text-4xl md:text-6xl text-accent w-full text-center font-sofia font-bold uppercase tracking-tight">
                {title}
            </h3>
            {subtitle && (
                <p className="text-sm text-accent opacity-80 mb-2">{subtitle}</p>
            )}

            <div className="flex gap-4">
                {posters.map((p, i) => (
                    <div className="relative group" key={i}>
                        <Image
                            src={p.src}
                            alt={p.alt ?? "poster"}
                            width={200}
                            height={500}
                            className="rounded-md border border-accent hover:ring-2 hover:ring-accent-highlight hover:border-accent-highlight duration-150 cursor-pointer"
                        />

                        <ToolTip text={p.tooltip ?? ""} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favourites;