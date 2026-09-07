
import { PostForm } from '../components/PostForm';
import { PostList } from '../components/PostList';

export const FeedPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/60 py-8 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header Title */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            Social Feed
          </h1>
          <p className="text-xs text-gray-500">
            Share posts and manage your feed in real-time
          </p>
        </div>

        {/* 1. Post Creation */}
        <PostForm />

        {/* 2. Feed Stream / Post List */}
        <PostList />
      </div>
    </div>
  );
};