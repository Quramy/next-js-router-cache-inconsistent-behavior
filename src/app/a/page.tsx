import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function PageA() {
  const rendererdAt = Date.now()
  console.log('Page A', new Date(rendererdAt).toISOString())
  return (
    <>
      <h1>Page A</h1>
      <dl>
        <dt>Rendered at</dt>
        <dd>{new Date(rendererdAt).toISOString()}</dd>
      </dl>
      <nav>
        <ul>
          <li>
            <Link href="/b">Go to page /b</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
