import { topNavItems } from '@/app/utils/NavItems';
import Link from 'next/link';


const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-cyan-400 to-blue-500 w-90% flex justify-between items-center h-20 pr-5">
            <div className="text-red-900 font-bold text-xl">Logo</div>
            <ul className="flex space-x-4">
                {topNavItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.path} className="text-white hover:text-gray-200">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
