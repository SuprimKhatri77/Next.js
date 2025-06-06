import Link from "next/link"

export default function F2(){
    return(
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <h1>F2 page</h1>
        <Link href='/f3' className="bg-orange-800 text-white rounded-md font-bold text-lg py-3 px-5 w-fit">go to f3</Link>
        </div>
    )
}