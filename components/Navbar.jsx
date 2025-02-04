"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Info, Link2, Mail, Rocket, Github } from "lucide-react"

const NavLink = ({ href, children, onClick, icon: Icon }) => (
    <Link href={href}>
        <li
            className="hover:text-yellow-400 transition-colors py-2 px-4 text-center flex items-center gap-2 justify-center md:justify-start"
            onClick={onClick}
        >
            {Icon && <Icon size={18} />}
            {children}
        </li>
    </Link>
)

const NavButton = ({ href, children, icon: Icon }) => (
    <Link href={href} className="w-full sm:w-auto">
        <button className="w-full sm:w-auto gradient-btn transition-all rounded-lg shadow-lg px-4 py-2 font-bold text-black text-sm sm:text-base hover:shadow-yellow-500/10 flex items-center justify-center gap-2">
            {Icon && <Icon size={18} />}
            {children}
        </button>
    </Link>
)

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <nav className=" text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="logo font-bold text-xl sm:text-2xl">
                            <Link href="/" className="flex items-center gap-2">
                                <Link2 className="text-yellow-400" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-200">
                                    Linkner
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-4">
                            <NavLink href="/" icon={Home}>Home</NavLink>
                            <NavLink href="/about" icon={Info}>About</NavLink>
                            <NavLink href="/shorten" icon={Link2}>Shorten</NavLink>
                            <NavLink href="/contact" icon={Mail}>Contact Us</NavLink>
                            <li className="flex space-x-4">
                                <NavButton href="/shorten" icon={Rocket}> Try Now</NavButton>
                                <NavButton href="/github" icon={Github}>GitHub</NavButton>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-200 focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-sm">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink href="/" onClick={closeMenu} icon={Home}>Home</NavLink>
                        <NavLink href="/about" onClick={closeMenu} icon={Info}>About</NavLink>
                        <NavLink href="/shorten" onClick={closeMenu} icon={Link2}>Shorten</NavLink>
                        <NavLink href="/contact" onClick={closeMenu} icon={Mail}>Contact Us</NavLink>
                        <li className="flex flex-col  space-y-2 py-2 px-4">
                            <NavButton href="/shorten" icon={Rocket}> Try Now</NavButton>
                            <NavButton href="/github" icon={Github}>GitHub</NavButton>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar