"use client"

import { useState } from "react";

export default function Dashboard(){
    const [name,setName] = useState("slash77")
    return(
        <div className="h-screen flex flex-col gap-5 justify-center items-center">
            <h1>Dashboard</h1>
            <input className="border py-2 px-5" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello, {name}! </p>
        </div>
    )
}