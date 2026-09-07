import Header from '../components/Header';
import CommentSection from '../components/CommentSection';

const MainPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#efecfa] text-slate-800">
      <Header />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-6">
        <CommentSection />
      </main>
    </div>
  );
};

export default MainPage;