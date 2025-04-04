
export default async function Product (){
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("intentional delay")
        },2000)
    })
    return(
        <h1>Product</h1>
    )
}