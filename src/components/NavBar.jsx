import React from "react";

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">SKAFF INVEST R GROUP</div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">About</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">Services</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
                </ul>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-400">Login</a>
                    <a href="#" className="text-white hover:text-gray-400">Register</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;