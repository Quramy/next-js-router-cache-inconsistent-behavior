import Link from 'next/link'

export default function Page() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/page-a">Page A</Link>
        </li>
        <li>
          <Link href="/page-b">Page B</Link>
        </li>
      </ul>
    </nav>
  )
}
