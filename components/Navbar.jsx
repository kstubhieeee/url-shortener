"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const NavLink = ({ href, children, onClick }) => (
    <Link href={href}>
        <li className="hover:text-purple-200 transition-colors py-2 px-4 text-center" onClick={onClick}>
            {children}
        </li>
    </Link>
)

const NavButton = ({ href, children }) => (
    <Link href={href} className="w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg shadow-lg px-4 py-2 font-bold text-sm sm:text-base">
            {children}
        </button>
    </Link>
)

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <nav className="bg-purple-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="logo font-bold text-xl sm:text-2xl">
                            <Link href="/">Linkner</Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-4">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <NavLink href="/shorten">Shorten</NavLink>
                            <NavLink href="/contact">Contact Us</NavLink>
                            <li className="flex space-x-2">
                                <NavButton href="/shorten">Try Now</NavButton>
                                <NavButton href="/github">GitHub</NavButton>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-200 focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink href="/" onClick={closeMenu}>
                            Home
                        </NavLink>
                        <NavLink href="/about" onClick={closeMenu}>
                            About
                        </NavLink>
                        <NavLink href="/shorten" onClick={closeMenu}>
                            Shorten
                        </NavLink>
                        <NavLink href="/contact" onClick={closeMenu}>
                            Contact Us
                        </NavLink>
                        <li className="flex flex-col space-y-2 py-2 px-4">
                            <NavButton href="/shorten">Try Now</NavButton>
                            <NavButton href="/github">GitHub</NavButton>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar

