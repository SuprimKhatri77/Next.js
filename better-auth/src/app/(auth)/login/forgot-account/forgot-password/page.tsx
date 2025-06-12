"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { forgetPassword } from "@/lib/auth/auth-client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { setegid } from "process";
import { useState } from "react";

export default function ForgotPassword() {
    const params = useSearchParams()
    const emailFromQuery = params.get("email") || ""
    const [email, setEmail] = useState(emailFromQuery)
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const { error } = await forgetPassword({
            email,
            redirectTo: `${window.location.origin}/login/forgot-account/forgot-password/reset-password`,
        })

        if (error) {
            setMessage("Something went wrong. Please try again!")
        } else {
            setMessage("Check your email for the reset link.")
        }
        setEmail("")
    }
    return (
        <form onSubmit={handleSubmit}
            className="p-6 max-w-md mx-auto space-y-4 container"
        >
            <h1 className="text-xl font-bold">Forgot Password</h1>
            <Input type="email" required value={email} placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2"
            />
            <div className="grid grid-cols-2 gap-2">
                <Button type="submit">Send Reset Link</Button>
                <Button variant="outline" asChild>
                    <Link href="/login">Sign in</Link>
                </Button>
            </div>
            {message && (
                <p>{message}</p>
            )}

        </form>
    )
}