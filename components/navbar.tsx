import Link from "next/link";

const NavBar = () => {
    return (
        <header className='left-0 right-0 border-b-[1px] mx-5 border-accent'>
            <nav className='flex justify-between items-center italic'>
                <Link href="/" className='uppercase font-sofia tracking-tight text-3xl font-semibold text-accent transition duration-500 cursor-pointer'>
                    Kyle Chin
                </Link>
            </nav>
        </header>
    );
};

export default NavBar;