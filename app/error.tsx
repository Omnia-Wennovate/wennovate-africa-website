'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-navy px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-crimson/10 flex items-center justify-center">
          <span className="text-3xl">⚠️</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
          Something went wrong
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 bg-slate-900 dark:bg-gradient-to-r dark:from-emerald dark:to-sapphire text-white dark:text-navy rounded-2xl font-semibold text-sm hover:bg-slate-800 transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
