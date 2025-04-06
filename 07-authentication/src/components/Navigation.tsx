import { SignInButton,SignOutButton,UserButton,SignedIn,SignedOut,SignUpButton} from "@clerk/nextjs"
import Link from "next/link"



export default function Navigation(){
    return(
        <nav className="bg-[var(--background)]  border-b border-[var(--foreground)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href='/' className="text-xl font-semibold text-[var(--foreground)]">
                Next.js App
              </Link>
            </div>
            <div className="flex items-center gap-4">

                <SignedOut>
                    <SignInButton mode="modal">
                      <button className="bg-white text-black py-2 px-5 rounded-md cursor-pointer">Sign in</button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="bg-lime-500 text-black py-2 px-5 rounded-md ">Sign up</button>
                    </SignUpButton>
                </SignedOut>

                <SignedIn>
                    <Link href='/user-profile'>Profile</Link>
                    <SignOutButton />
                </SignedIn>
              {/* <UserButton /> */}

            </div>
          </div>
        </div>
      </nav>
    )
}