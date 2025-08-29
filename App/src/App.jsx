function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center text-center p-4 sm:p-6 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="bg-black/90 text-white p-6 sm:p-10 rounded-2xl shadow-2xl space-y-5 max-w-lg sm:max-w-xl w-full">
        
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
          7Tracks Domain Reserved
        </h1>

        <p className="text-base sm:text-lg leading-relaxed">
          This domain{" "}
          <span className="font-semibold">7tracks.vercel.app</span> is officially
          registered and owned by{" "}
          <span className="font-semibold text-purple-500">Vedhas Naik</span>!
        </p>

        <p className="text-sm sm:text-base text-gray-400">
          If you’re a user, please visit our authenticated site:
        </p>

        <a
          href="https://7tracks.pages.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 sm:px-6 -3 hover:underline hover:text-purple-500 text-white rounded-xl font-medium shadow-md transition transform "
        >
          Go to 7Tracks →
        </a>

        <div className="pt-6 border-t border-gray-700 text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} 7 Tracks. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
