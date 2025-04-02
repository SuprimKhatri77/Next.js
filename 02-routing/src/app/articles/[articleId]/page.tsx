import Link from "next/link"


export default async function NewsArticle({
    params,
    searchParams
}: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang?: "en" | "fr" | "es" }>
}
)
{
    const { articleId } = await params
    const { lang = "en" } = await searchParams 
    return (
        <div className="flex flex-col justify-center items-center">
            <h1>News article {articleId} </h1>
            <p>Reading in {lang}</p>
            <div className="flex gap-2 ">
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            </div>
        </div>
    )
}