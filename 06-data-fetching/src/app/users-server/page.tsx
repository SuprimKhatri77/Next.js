type Users = {
    id: number
    name: string
    username: string
    email: string
    phone: string
}

export default async function UsersServer(){
    await new Promise((resolve)=> setTimeout(resolve, 2000))
    const response = await fetch('https://jsonplaceholder.typicode.com/users/123')
    const users: Users[] = await response.json()

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
