export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-navy">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-slate-200 dark:border-slate-700 border-t-emerald rounded-full animate-spin" />
        <p className="text-sm text-slate-400 dark:text-slate-500 font-medium tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  )
}
