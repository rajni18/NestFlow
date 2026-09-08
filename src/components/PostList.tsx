import { useSelector, useDispatch } from "react-redux";
import type { Post } from "../types/postType";
import type { RootState, AppDispatch } from "../store/store";

export const PostList = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
 // const dispatch = useDispatch<AppDispatch>();

  if (posts.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200 text-gray-400 text-sm">
        <p className="font-medium">No posts in your feed yet</p>
        <span className="text-xs text-gray-400">Create one above to get started</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post: Post) => (
        <article
          key={post.id}
          className="group p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
        >
          {/* Top Row: User Avatar, Name & Sleek Action Icons */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-semibold flex items-center justify-center text-sm shadow-sm uppercase">
                {post.username ? post.username.charAt(0) : "U"}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-gray-900 leading-tight">
                    {post.username}
                  </span>
                  <span className="inline-block w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-xs text-gray-400">{post.createdAt}</span>
                </div>
                <span className="text-[11px] text-blue-600 font-medium">User</span>
              </div>
            </div>

            {/* Subtle Minimalist Edit & Delete Actions */}
            <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-pointer"
                title="Edit Post"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all cursor-pointer"
                title="Delete Post"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-sm text-gray-800 leading-relaxed mt-3 pl-13 whitespace-pre-line">
            {post.content}
          </p>

          <div className="mt-4 pt-3 border-t border-gray-50 flex items-center gap-4 pl-13">
            {/* Like Button */}
            <button
              type="button"
              className="flex items-center gap-0.5 text-gray-500 hover:text-rose-600 transition-colors group/like cursor-pointer"
            >
              <div className="p-1.5 rounded-full group-hover/like:bg-rose-50 transition-colors">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover/like:text-rose-500 transition-transform group-hover/like:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-600 group-hover/like:text-rose-600">
                {post.likes || 0}
              </span>
            </button>

            {/* Comment Button */}
            <button
              type="button"
              className="flex items-center gap-0.5 text-gray-500 hover:text-blue-600 transition-colors group/comment cursor-pointer"
            >
              <div className="p-1.5 rounded-full group-hover/comment:bg-blue-50 transition-colors">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover/comment:text-blue-500 transition-transform group-hover/comment:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-600 group-hover/comment:text-blue-600">
                0
              </span>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};