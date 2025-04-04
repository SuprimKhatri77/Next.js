export default async function Reviews (){
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("intentional delay")
        },2000)
    })
    return(
        <h1>Reviews</h1>
    )
}