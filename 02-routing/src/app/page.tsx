import Link from "next/link"


export default function Home() {
    return (
        <>
        <div className="flex flex-col justify-center items-center">

        <h1>Welcome, to home!</h1>
        <Link href="/blog">Blog</Link>
        <Link href="/articles/breaking-news-127?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-127?lang=fr">Read in French</Link>
        </div>
        </>
    )
}