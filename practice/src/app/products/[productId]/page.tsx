export default async function ProductsList({
    params,
} : {
    params: Promise<{ productId: string }>;
}
){
    const productId = (await params).productId
    return(
        <div className="h-screen flex flex-col mt-12 items-center gap-2">
        <h1 className="text-3xl font-bold">You are currently viewing product <i> {productId} </i></h1>
            
        <div className="flex flex-col gap-5">
            <p className="text-teal-300 text-xl font-medium">Product <b> {productId}</b> content </p>
            <p className="ml-5 font-semibold italic text-lime-500">I am product {productId} content and I am great</p>
            
        </div>
        </div>
    )
}