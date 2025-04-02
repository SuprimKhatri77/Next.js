"use client"

import { useRouter, redirect } from "next/navigation";


export default function  OrderProduct(){
    const router =  useRouter()
    const handleClick = () => {
        console.log("Placing your order");
        // router.push('/')
        redirect('/')
    }
    return(
        <div className="h-screen flex flex-col  items-center">
            <h1>Order product</h1>
            <button onClick={handleClick} className="cursor-pointer">Place order</button>
        </div>
    )
}