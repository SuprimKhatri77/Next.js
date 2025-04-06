
import { Submit } from "@/components/Submit";
import { FormState, createProduct } from "@/actions/Products";
import { getProduct } from "@/app/primsa-db";
import { Product } from "../page";
import { notFound } from "next/navigation";
import EditProductForm from "./product-edit-form";




export default async function EditProductPage({params,}: {params: Promise<{id:string}>}){


  const {id} = await params
  const product: Product | null = await getProduct(parseInt(id));

  if(!product){
    notFound()
  }

    
    return <EditProductForm product={product} />
}