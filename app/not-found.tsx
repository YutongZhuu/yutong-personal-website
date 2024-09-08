import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen relative'>
      <div className='my-auto top-0 bottom-0'>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  )
}