import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiMyanimelist } from "react-icons/si";

const Footer = () => {
    return (
        <div className={`flex justify-between px-5`}>
            <div className="flex gap-2 items-center">
                <a
                    href="https://github.com/MoleXprof"
                    className="hyperlink text-sm md:text-base"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IoLogoGithub className="text-accent h-4 w-4 md:h-6 md:w-6 hover:text-accent-highlight"/>
                </a>
            
                <a
                    href="https://www.linkedin.com/in/kyle-chin-527959231/"
                    className="hyperlink text-sm md:text-base"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin className="text-accent h-4 w-4 md:h-6 md:w-6 hover:text-accent-highlight"/>
                </a>

                <a
                    href="https://myanimelist.net/profile/MoleXprof"
                    className="hyperlink text-sm md:text-base"
                    target="_blank"
                    rel="noreferrer"
                >
                    <SiMyanimelist className="bg-accent h-4 w-4 md:h-[22px] md:w-[22px] p-0.5 rounded-xs hover:bg-accent-highlight"/>
                </a>
            </div>

            <div className="text-right font-fascinate font-bold uppercase text-sm md:text-xl">
                {"Built by Kyle Chin"}
            </div>
        </div>
    )
}

export default Footer;