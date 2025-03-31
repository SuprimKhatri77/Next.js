"use client";

import { usePathname } from "next/navigation";

export default function NotFound(){
    const pathName = usePathname();
    const productId = pathName.split("/")[2];
    const reviewId = pathName.split("/")[4];
    return (
        <div className="h-screen w-full bg-black text-white flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">Review {reviewId} not found for product {productId} </h2>
            {/* <p className="text-2xl font-medium">Couldnt find requested resources</p> */}
        </div>
        
    ); 
}