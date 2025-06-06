import Link from "next/link"

export default function F1(){
    return(
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <h1>F1 page</h1>
        <Link href='/f1/f2' className="bg-black text-white rounded-md font-bold text-lg py-3 px-5 w-fit">go to f2</Link>
        </div>
    )
}