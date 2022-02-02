import Link from "next/link"

export default function Header() {
  return (
    <header className="flex justify-between bg-black rounded-2xl">
      <h1 className="ml-2 my-2 text-green text-bold text-xl"> The Stick Adventure</h1>
      <nav className="mr-4 my-2">
        <Link href="/About">
          <a className="mr-4 text-green"> About</a>
        </Link>
        <Link href="/Start">
          <a className="text-green">Restart</a>
        </Link>
      </nav >
    </header >
  )
}