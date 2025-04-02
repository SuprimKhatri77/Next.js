"use client"
import { Card } from "@/components/Card"
export default function ErrorBoundary({
    error,
} : {
    error: Error
}
){
    return(
        <Card> {error.message} </Card>
    )
}