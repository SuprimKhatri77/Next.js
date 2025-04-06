"use client"
import { useFormStatus } from "react-dom";

export const Submit = () => {
    const { pending } = useFormStatus()

    return (
        <div className="flex gap-5 justify-center items-center cursor-pointer w-full p-2 bg-blue-500 rounded disabled:bg-gray-500">
            <button 
                type="submit"
                className="text-lg font-bold text-white"        
                disabled={pending}
            >
                {pending ? "Submitting..." : "Submit"}
            </button>
            
            {pending && (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
        </div>
    )
}