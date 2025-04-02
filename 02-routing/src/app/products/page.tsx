import { Metadata } from "next";
import Link from "next/link";

type Props = {
    params: Promise<{ productId: string }>;
};

export const generateMetaData = async({
    params,
}: Props) : Promise<Metadata> => {
        const id = (await params).productId;
        const title = await new Promise ((resolve)=> {
            setTimeout(()=>{
                resolve(`iPhone ${id}`)
            },100)
        })
        return {
            title: `Product ${title}`,
        };
    };


export default function ProductList() {
    return (
        <>
        <h1>Products List</h1>
        <ul>
            <Link href='products/1'>Product 1</Link>
            <Link href='products/2'>Product 2</Link>
            <Link href='products/3' replace>Product 3</Link>
        </ul>
        </>
    )
}