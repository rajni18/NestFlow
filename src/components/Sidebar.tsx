export const Sidebar = () => {
  return (
    <div className="min-h-screen p-4 bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm space-y-2">
      <div className="text-xs font-semibold text-gray-400 px-3 uppercase tracking-wider mb-2">
        Menu
      </div>
      
      <button className="w-full text-left px-3 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium text-sm flex items-center space-x-2">
        <span>🏠</span>
        <span>Feed</span>
      </button>

      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100/50 text-gray-700 font-medium text-sm flex items-center space-x-2 transition-all">
        <span>👤</span>
        <span>Profile</span>
      </button>

      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100/50 text-gray-700 font-medium text-sm flex items-center space-x-2 transition-all">
        <span>⚙️</span>
        <span>Settings</span>
      </button>
    </div>
  );
};