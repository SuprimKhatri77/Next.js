"use client"

import { Submit } from "@/components/Submit";
import { useActionState } from "react";
import { FormState, createProduct } from "@/actions/Products";
import { Product } from "@/app/products-db/page";
import { editProduct } from "@/actions/Products";




export default  function EditProductForm({product}: {product: Product}){

  const initialState: FormState = {
    errors: {},
  }

  const editProductWithId = editProduct.bind(null, product.id)

  const [state, formAction, isPending] = useActionState(editProductWithId, initialState)

    
    return (
        <form action={formAction} className="p-4 space-y-4 max-w-96 flex flex-col gap-5">

          <div>
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded bg-white"
          name="title"
          defaultValue={product.title}
          
          />
      </label>
      {
        state.errors.title && (
          <p className="text-red-500 text-sm"> {state.errors.title} </p>
        )
      }
      </div>

      <div>

      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded bg-white"
          name="price"
          defaultValue={product.price}
          
          />
      </label>
      {
        state.errors.price && (
          <p className="text-red-500 text-sm"> {state.errors.price} </p>
        )
      }
      </div>

      <div>

      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2 text-black border bg-white rounded"
          name="description"
          defaultValue={product.description ?? ""}
          />
      </label>
      {
        state.errors.description && (
          <p className="text-red-500 text-sm"> {state.errors.description} </p>
        )
      }
      </div>
      {/* <Submit /> */}
      <div className="flex gap-5 justify-center items-center cursor-pointer w-full p-2 bg-blue-500 rounded disabled:bg-gray-500">
            <button 
                type="submit"
                className="text-lg font-bold text-white"        
                disabled={isPending}
            >
                {isPending ? "Submitting..." : "Submit"}
            </button>
            
            {isPending && (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
        </div>
    </form>
    )
}