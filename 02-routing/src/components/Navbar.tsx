import Link from "next/link"

export default function Navbar(){
    return(
        <header className=" font-[Arial] shadow-lg mb-10">
            <nav className="flex justify-between py-3 px-8">
                <Link href='/' className="text-3xl font-bold">Slash</Link>
                <div className="flex gap-3 text-lg font-medium cursor-pointer">
                    <Link href='/blog'>Blog</Link>
                    <Link href='/docs'>Docs</Link>
                    <Link href='/products'>Products</Link>
                    <Link href='/products/reviews'>Reviews</Link>
                </div>
            </nav>
        </header>
    )
}