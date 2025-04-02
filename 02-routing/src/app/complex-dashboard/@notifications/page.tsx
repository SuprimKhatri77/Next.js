import { Card } from "@/components/Card"
import Link from "next/link"

export default function Notifications(){
    return (
        <>
        <Card>
            Notifications
        <div>
            <Link href="/complex-dashboard/archived" className="ml-5 underline hover:no-underline">Archived</Link>
        </div>
            </Card>
        </>
    )
}