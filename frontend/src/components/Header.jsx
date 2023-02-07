import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <a href="">
                <span className="font-bold text-lg">Logo</span>
            </a>
            <div>
                <a href="" className="inline-block px-4 mr-4 hover:underline">Men</a>
                <a href="" className="inline-block px-4 mr-4 hover:underline">Women</a>
                <a href="" className="inline-block px-4 mr-4 hover:underline">Kid</a>
                <a href="" className="inline-block px-4 mr-4 hover:underline">About Us</a>
                <a href="" className="inline-block px-4 mr-4 hover:underline">Store</a>
            </div>
            <Link to={'/login'} className="border-2 border-black hover:bg-black text-black hover:text-white font-medium py-2 px-8 rounded-lg">
                Sign In
            </Link>
        </header>
    );
}