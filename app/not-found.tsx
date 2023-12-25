import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container absolute inset-0 m-auto flex h-fit w-fit flex-col items-center space-y-6">
      <span className="text-2xl font-bold sm:text-4xl">Something went wrong</span>
      <span className="text-base font-medium sm:text-xl">We can’t find the page you are looking for.</span>
      <Link href="/">Back to home</Link>
    </div>
  )
}
