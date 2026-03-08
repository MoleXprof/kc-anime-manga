import Link from "next/link";

const NavBar = () => {
    return (
        <header className='left-0 right-0 py-2 border-b-[1px] mx-5 border-white'>
            <nav className='flex justify-between items-center'>
                <Link href="/" className='uppercase font-semibold text-white transition duration-500 cursor-pointer'>
                    Kyle Chin
                </Link>
            </nav>
        </header>
    );
};

export default NavBar;