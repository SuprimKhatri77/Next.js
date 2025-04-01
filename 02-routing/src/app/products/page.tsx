import { Metadata } from "next";

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
            <li>Product 1</li>
            <li>Product 3</li>
            <li>Product 2</li>
        </ul>
        </>
    )
}