"use client"
import { usePathname } from "next/navigation"


export default  function NotFoundPage(){
    const pathName = usePathname()
    const productId = pathName.split("/")[2]
    const reviewId = pathName.split("/")[4]
    return( 
        <div className="flex h-screen flex-col gap-5 justify-center items-center">
            <h1 className="text-3xl font-extrabold">Page not found</h1>
            <p className="text-lg font-bold ">Couldn't find the requested page</p>
            <p className="text-red font-bold text-xl">Review {reviewId} for product {productId} not found </p>
        </div>
    )
}