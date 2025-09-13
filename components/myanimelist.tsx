import Link from "next/link";
import { SiMyanimelist } from "react-icons/si";

const MyAnimeList = () => {
    return (
        <div className="flex justify-between items-center py-10 px-5 autoAppear text-accent">
            <div>
                <h3 className="text-sm md:text-lg font-semibold hidden md:block">
                    {"Want to see what I've been watching?"}
                </h3>
                <h3 className="text-sm md:text-lg font-semibold md:hidden">
                        {"See what I've been watching"}
                    </h3>
                <p className="text-xs md:text-sm">
                    {"Check out my profile on MyAnimeList."}
                </p>
            </div>

            <div className="flex gap-1 md:gap-4">
                <Link
                    className="download-btn flex gap-1 justify-center items-center border py-1.5 md:py-2.5 font-bold px-3 md:px-5 rounded-md hover:text-accent-highlight cursor-pointer"
                    href={"https://myanimelist.net/profile/MoleXprof"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiMyanimelist className="h-[18px] md:h-7 w-4 md:w-7" />
                </Link>
            </div>
        </div>
    );
};

export default MyAnimeList;