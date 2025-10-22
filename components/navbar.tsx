import Link from 'next/link'

const NavBar = () => {
    return (
        <header className='fixed left-0 right-0 py-2 z-50 border-b-[1px] mx-5 border-gray-100'>
            <nav className='flex justify-between items-center'>
                <div className='uppercase font-semibold text-gray-100 transition duration-500 cursor-default'>
                    Kyle Chin
                </div>

                <Link
                    href="/contact"
                    className='uppercase font-semibold text-gray-100 hover:underline hover:opacity-50 transition duration-500'
                >
                    contact
                </Link>

            </nav>
        </header>
    );
};

export default NavBar;