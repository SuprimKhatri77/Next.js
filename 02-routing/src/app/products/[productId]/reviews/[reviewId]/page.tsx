import { notFound } from "next/navigation";

function randomNumber(count: number){
    return Math.floor(Math.random() + count)
}



export default async function ProductReview({
    params,
}: {
    params: Promise<{ productId: string; reviewId: string }>;
}

) {
    const random = randomNumber(1)
    console.log(random);
    
    if(random === 1){
        throw new Error("Error loading review");
        
    }
    const {productId, reviewId} = (await params)
    if(parseInt(reviewId) > 100){
        notFound();
    }
    return (
        <h1>Review {reviewId} for product {productId}  </h1>
    )
}