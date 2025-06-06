import Link from "next/link";
import { snippets } from "../../lib/snippets";
export default function Home() {
  return (
    <div className="flex gap-5 items-center justify-center min-h-screen">
      {snippets.map((snippet) => (
        <Link href={`snippets/${snippet.id}`} key={snippet.id} className="bg-black rounded-lg py-5 px-4 text-white cursor-pointer hover:scale-115 transition-all duration-300 ease-in-out hover:-translate-2.5 hover:shadow-xl">
          <h1 className="font-bold capitalize">{snippet.title}</h1>
          <p className="pl-4">{snippet.code}</p>
        </Link>
      ))}
    </div>
  );
}
