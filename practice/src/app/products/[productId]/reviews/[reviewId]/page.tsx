import { notFound } from "next/navigation"

export default async function({params,}
    : {
        params: Promise<{ reviewId: string, productId: string }>
    }
){
    const { productId, reviewId } = (await params)

    if(parseInt(reviewId) > 100){
        notFound();
    }
    
    return(
        <h1 className="h-screen flex justify-center items-center text-2xl font-extrabold">
            Review {reviewId} for product {productId}
        </h1>
    )
}