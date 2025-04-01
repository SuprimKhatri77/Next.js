export default function Navbar(){
    return(
        <header className=" font-[Arial] shadow-lg mb-10">
            <nav className="flex justify-between py-3 px-8">
                <h1 className="text-3xl font-bold">Slash</h1>
                <ul className="flex gap-3 text-lg font-medium cursor-pointer">
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Help</li>
                    <li>About us</li>
                </ul>
            </nav>
        </header>
    )
}