"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import path from "path";


export default function Navbar() {
    const pathName = usePathname()
    console.log(pathName);
    function activeLink(href: string){
        return pathName === href ? "text-lime-400 font-bold" : "text-white font-bold"
    }
  return (
    <header>
    <nav className="flex py-5 px-10 justify-between">
      <Link href='/' className="text-3xl font-bold">Practice</Link>
      <div className="flex gap-5 text-lg font-medium">
        <Link href='/products' className={activeLink("/products")}>Products</Link>
        <Link href='/blogs' className={activeLink("/blogs")}>Blog</Link>
        <Link href='/articles' className={activeLink("/articles")}>Articles</Link>
      </div>
    </nav>
  </header>
  )
}
