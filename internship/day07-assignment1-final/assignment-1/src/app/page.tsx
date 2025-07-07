import QuoteForm from "../components/QuoteForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-4 transition-colors duration-300
      bg-gradient-to-tr from-blue-100 via-purple-200 to-pink-100 
      dark:from-slate-900 dark:via-slate-800 dark:to-black
    ">
      
      <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-2xl transition-all">
        <h1 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-2">
          Motivational <span className="text-purple-600 dark:text-yellow-300">Quotes (Assignment 1)</span>
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
          Search motivational quotes by topic or get random inspiration.
        </p>
        
        <QuoteForm/>
      </div>
    </main>
  );
}
