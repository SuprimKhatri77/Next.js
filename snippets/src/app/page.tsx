import Link from "next/link";
import { PenIcon } from "lucide-react";
import { snippetTable, SnippetType } from "../../lib/db/schema";
import { db } from "../../lib/db";
export default async function Home() {
  const snippets: SnippetType[] = await db.select().from(snippetTable)
  return (
    <div className="flex gap-5 items-center justify-center min-h-screen flex-wrap">
      {snippets.map((snippet) => (
        <Link href={`snippets/${snippet.snippetId}`} key={snippet.snippetId} className="bg-black rounded-lg py-5 px-4 text-white cursor-pointer hover:scale-115 transition-all duration-300 ease-in-out hover:-translate-2.5 hover:shadow-xl">
          <h1 className="font-bold capitalize">{snippet.title}</h1>
          <p className="pl-4">{snippet.code}</p>
        </Link>
      ))}

      <div className="fixed top-10 right-10">
        <Link href="/create-new-snippet" className="bg-pink-400 py-4 px-5 text-lg font-medium rounded-lg text-white flex items-center gap-4 cursor-pointer hover:bg-pink-600 hover:text-black transition-all duration-300 ease-in">
          <span className="flex items-center pt-1">

            Create snippet
          </span>
          <span>
            <PenIcon size={24} />
          </span>
        </Link>
      </div>
    </div>
  );
}
