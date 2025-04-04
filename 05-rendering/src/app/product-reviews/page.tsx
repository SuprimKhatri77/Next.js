import Product from "@/components/Products"
import Reviews from "@/components/Reviews"
import { Suspense } from "react"

export default function ProductReviews(){
    return(
        <>
        <h1>Product Reviews</h1>
        <Suspense fallback={<p>Loading products......</p>}>
        <Product />
        </Suspense>
        <Suspense fallback={<p>Loading reviews.....</p>}>
        <Reviews />
        </Suspense>
        </>
    )
}