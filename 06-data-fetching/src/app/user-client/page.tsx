"use client"
import { setegid } from "process";
import { useState, useEffect, use } from "react"

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error("Failed to fetch users");
                const data = await response.json();
                setUsers(data)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError("  An unknown error occured");
                }
            } finally {
                setLoading(false)
            }

        }
        fetchUsers()
    }, [])
    if(loading) return <div>Loading....</div>


    if(error) return <div> {error} </div>


    return (
        <ul className="space-y-2 p-4">
            {users.map((user) => (
                <li className="p-4 bg-white shadow-md rounded-lg text-gray-700" key={user.id}>
                    <div className="font-bold"> {user.name} </div>
                    <div className="text-sm">
                        <div>Username: {user.username} </div>
                        <div>Email: {user.email} </div>
                        <div>Phone: {user.phone} </div>
                    </div>
                </li>
            ))}
        </ul>

    )

}