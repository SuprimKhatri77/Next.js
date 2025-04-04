export const dynamicParams = false;


export async function generateStaticParams(){
    return [{id: "1"},{id: "2"},{id: "3"}]
}


export default async function({params}
    :{
        params: Promise<{ productId: string}>
    }
) {
    const {productId} = await params
    return(
        <>
        <h1>
            Product {productId} details rendered at {new Date().toLocaleTimeString()}
        </h1>
        </>
    )
}