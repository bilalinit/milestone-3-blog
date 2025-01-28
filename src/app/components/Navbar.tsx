import Link from "next/link"
import Image from "next/image"
import logo from "../assets/Screenshot 2025-01-29 005647.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="TechBlog Logo" width={80} height={80} className="mr-2" />
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          TechBlog
        </span>
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="relative overflow-hidden group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-400">Home</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link href="/" className="relative overflow-hidden group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-400">Blogs</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link href="/about" className="relative overflow-hidden group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-400">About</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
