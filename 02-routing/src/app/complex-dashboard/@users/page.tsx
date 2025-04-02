import { Card } from "@/components/Card"


function generateRandomNumber(num : number){
    return Math.floor(Math.random()  + num)
}



export default function UserAnalytics(){
    const random = generateRandomNumber(2)
    // if(random === 2){
    //     throw new Error("Custom error for users only.")
    // }
    return(
        <Card>User Analytics</Card>
    )
}