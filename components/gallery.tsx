import Image from 'next/image';

const Gallery = () => {
    return (
        <div className="w-full relative flex justify-center items-center py-8">
            <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
                <h3 className="absolute text-accent flex justify-center items-center text-bold text-8xl z-20">
                    マンガ
                </h3>
                <h3 className="text-accent-highlight flex justify-center items-center text-bold text-8xl pl-1 z-10 translate-x-1 translate-y-1">
                    マンガ
                </h3>
            </div>
            <h3 className="absolute text-accent font-light flex justify-center items-center text-bold text-4xl pl-1 z-10 translate-x-1 translate-y-18">
                (Manga)
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-0">
                <div className="grid gap-4">
                    <div>
                        <Image
                            src="/images/sun-ken-rock.png"
                            alt=""
                            className="h-auto max-w-full"
                            height={400}
                            width={250}
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/darkness-devil.png"
                            alt=""
                            className="h-auto max-w-full"
                            height={200}
                            width={250}
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/magus-of-the-library.png"
                            alt=""
                            className="h-auto max-w-full"
                            height={200}
                            width={250}
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                            src="/images/kagurabachi.png"
                            alt=""
                            className="h-auto max-w-full"
                            height={250}
                            width={250}
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/chihiro-fish-eye.png"
                            alt=""
                            className="h-auto max-w-full"
                            height={400}
                            width={250}
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/kagurabachi.png"
                            alt=""
                            className="h-auto max-w-full"
                            height={250}
                            width={250}
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                            src="/images/kagurabachi.png"
                            alt=""
                            className="h-auto max-w-full"
                            height={250}
                            width={250}
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/kagurabachi.png"
                            alt=""
                            className="h-auto max-w-full"
                            height={250}
                            width={250}
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/attack-team.png"
                            alt=""
                            className="h-auto max-w-full"
                            height={250}
                            width={250}
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                            src="/images/kagurabachi.png"
                            alt=""
                            className="h-auto max-w-full"
                            height={250}
                            width={250}
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/buntarou.png"
                            alt=""
                            className="h-auto max-w-full"
                            height={250}
                            width={250}
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/kagurabachi.png"
                            alt=""
                            className="h-auto max-w-full"
                            height={250}
                            width={250}
                        />
                    </div>
                </div>
            </div>

            {/* <div className='flex flex-wrap'>
                <Image
                    src="/images/kagurabachi.png"
                    alt="FLCL"
                    width={500}
                    height={250}
                    className="shadow-lg"
                />

                <Image
                    src="/images/kagurabachi.png"
                    alt="Kagurabachi"
                    width={500}
                    height={250}
                    className="shadow-lg"
                />

                <Image
                    src="/images/chihiro-fish-eye.png"
                    alt="Kagurabachi"
                    width={250}
                    height={250}
                    className="shadow-lg"
                />

                <Image
                    src="/images/magus-of-the-library.png"
                    alt="Magus of the Library"
                    width={400}
                    height={200}
                    className="shadow-lg"
                />
            </div> */}
        </div>
    );
};

export default Gallery;