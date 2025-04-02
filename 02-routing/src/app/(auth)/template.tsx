"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name:"Register", href:"/register" },
    { name:"Login", href:"/login" },
    { name:"Forgot Password", href:"/forgot-password" },
]


export default function AuthList({
    children,
} : {
    children: React.ReactNode
}) {
    const [input, setInput] = useState("")
    const pathName = usePathname()
    return(
        <div className="flex flex-col gap-5 text-2xl font-bold items-center">
            <div>
          <input className="border" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
            {
                navLinks.map((link)=> {
                    const isActive = 
                    pathName === link.href ||
                    (pathName.startsWith(link.href) && link.href !== "/")
                    return (
                        <Link className={isActive? "text-red-500" : "text-green-400"} href={link.href} key={link.name}> {link.name} </Link>
                    )
                })
            }

            {children}
        </div>
    )
}