import Link from "next/link"
import { Card } from "@/components/Card"

export default function ArchivedNotifications(){
    return(
        <>
        <Card>
        <h1>Archived Notifications page bud!</h1>
        <div>
            <Link href="/complex-dashboard" className="ml-5 underline hover:no-underline">Default</Link>
        </div>
        </Card>

        </>
    )
}