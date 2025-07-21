
const Hero = () => {
    return (
        <section className="bg-[url('/images/flcl.jpg')] bg-no-repeat bg-cover bg-bottom">
            <div className="w-full h-screen flex items-end bg-gradient-to-t from-black/40 to-gray-300/30 px-5">
                <div className='flex flex-col'>
                    <div className='flex gap-1 leading-none items-baseline -mb-20'>
                        <div className="text-[300px] font-sofia uppercase text-gray-100 tracking-tight pl-4">
                            Anime
                        </div>
                        <div className="text-4xl font-fascinate uppercase text-accent">
                            &
                        </div>
                    </div>
                    <div className="text-[300px] font-sofia uppercase text-gray-100 tracking-tight leading-none -mb-8">
                        Manga
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;