const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#042c6d] via-[#3f5fe2] to-[#d470b8] px-6 py-5 shadow-lg shadow-[#4d59a8]/20">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-blue-100/80">community</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">NestFlow</h1>
        </div>

        <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
          <span className="text-lg">☀️</span>
          <span className="text-sm font-medium text-white/90">Light Mode</span>
          <button
            aria-label="Toggle theme"
            className="relative h-6 w-11 rounded-full bg-white/80 p-1 shadow-inner"
          >
            <div className="h-4 w-4 rounded-full bg-[#1a1b59] transition-transform duration-300 translate-x-0" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;