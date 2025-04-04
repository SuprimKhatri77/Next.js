export default function ProductsLayout({children}
    : {
        children: React.ReactNode
    }
){
    return(
        <div>
            <div className="bg-teal-300 mx-5 py-3 px-5">
                <h1 className="text-3xl font-bold">Header</h1>
            </div>
            {children}
            <div className="bg-white mx-5 text-black text-center py-3 px-5">
                <h1 className="text-3xl font-bold">Footer</h1>
            </div>
        </div>
    )
}