
export const PostForm = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 transition-all">
      <form>
        {/* Header / Title */}
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
            R
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Create a Post</h3>
            <span className="text-xs text-gray-400">Sharing as <span className="font-medium text-gray-600 dark:text-gray-300">Rajni</span></span>
          </div>
        </div>

        {/* Textarea Input */}
        <div className="relative">
          <textarea
            rows={3}
            placeholder="What's on your mind?..."
            className="w-full p-3 text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Validation Error Placeholder */}
        <p className="text-xs text-red-500 mt-1 font-medium">Post content cannot be empty!</p>

        {/* Footer Actions */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-400">
            Press Post to publish
          </span>

          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold rounded-lg shadow-sm transition-all duration-150 ease-in-out disabled:opacity-50"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};