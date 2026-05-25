import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-navy px-6">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald to-sapphire mb-4">
          404
        </p>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
          Page Not Found
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex px-8 py-3 bg-slate-900 dark:bg-gradient-to-r dark:from-emerald dark:to-sapphire text-white dark:text-navy rounded-2xl font-semibold text-sm hover:bg-slate-800 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
