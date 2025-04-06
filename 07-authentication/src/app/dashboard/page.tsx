import {auth, currentUser} from "@clerk/nextjs/server"


export default async function Dashboard(){
   const authObj = await auth()
   const userObj = await currentUser()
    return(
        <h1 className="h-screen flex justify-center items-center">Dashboard</h1>
    )
}