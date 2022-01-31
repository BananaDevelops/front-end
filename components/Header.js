import Link from "next/link"

export default function Header() {
  return (
    <header className="flex justify-between">
      <h1 className="ml-4"> The Stick Adventure</h1>
      <nav className="mr-4">
        <Link href="/About">
          <a className="mr-4"> About</a>
        </Link>
        <Link href="/Start">
          <a>Restart</a>
        </Link>
      </nav >
    </header >
  )
}