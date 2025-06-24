"use client"

import { sendVerificationEmail } from "@/lib/auth/auth-client"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function VerifyEmail() {
    const params = useSearchParams()
    const emailFromQuery = params.get("email") as string
    const [email, setEmail] = useState(emailFromQuery)

    const handleSubmit = async () => {
        await sendVerificationEmail({
            email,
            callbackURL: "/dashboard"
        })
    }

    return (
        <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
            <h1 className="text-2xl font-medium">Click on the button to send a verification link to your email.</h1>
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 py-2 px-5 rounded-lg">Send verification link</button>
        </div>
    )
}