import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function PageB() {
  const rendererdAt = Date.now()
  console.log('Page B', new Date(rendererdAt).toISOString())
  return (
    <>
      <h1>Page B</h1>
      <dl>
        <dt>Rendered at</dt>
        <dd>{new Date(rendererdAt).toISOString()}</dd>
      </dl>
      <nav>
        <ul>
          <li>
            <Link href="/a">Go to page /a</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
