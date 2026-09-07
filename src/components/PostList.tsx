export const PostList = () => {
  return (
    <div className="space-y-4">
      {/* Sample Post 1 */}
      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs">
              R
            </div>
            <div>
              <span className="font-semibold text-sm text-gray-800 block leading-none">
                Rajni
              </span>
              <span className="text-[11px] text-gray-400">10:30 AM</span>
            </div>
          </div>
          <p className="text-sm text-gray-700 pl-10">
            Just built my first social feed app using React and Tailwind CSS! 🚀
          </p>
        </div>

        <button
          type="button"
          className="text-xs text-red-500 font-medium hover:bg-red-50 px-2.5 py-1 rounded-md transition-all"
        >
          Delete
        </button>
      </div>

      {/* Sample Post 2 */}
      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold flex items-center justify-center text-xs">
              A
            </div>
            <div>
              <span className="font-semibold text-sm text-gray-800 block leading-none">
                Alex
              </span>
              <span className="text-[11px] text-gray-400">11:15 AM</span>
            </div>
          </div>
          <p className="text-sm text-gray-700 pl-10">
            Tailwind component design looks super clean and modern.
          </p>
        </div>

        <button
          type="button"
          className="text-xs text-red-500 font-medium hover:bg-red-50 px-2.5 py-1 rounded-md transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};