import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default function Middleware(request: NextRequest){
    const response = NextResponse.next()
    const themePrefernce =  request.cookies.get("theme")
    if(!themePrefernce){
        response.cookies.set("theme","dark")
    }
    response.headers.set("custom-header","custom-value")

    return response

    // if(request.nextUrl.pathname === '/api/prpfile'){
    //     return NextResponse.redirect(new URL("/", request.nextUrl))
    // }
}

// export const config = {
//     matcher: "/api/profile"
// }