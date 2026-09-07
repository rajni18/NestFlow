import Header from '../components/Header';
import { Sidebar } from '../components/Sidebar'; // Aapka Sidebar component
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Outlet } from 'react-router';

const MainPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-200 ${
        theme === 'light' ? 'bg-[#efecfa] text-slate-800' : 'bg-[#140c30] text-white'
      }`}
    >
      <Header />

      <main className="mx-auto max-w-6xl px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4">
          
          <aside className="md:col-span-1 sticky top-20">
            <Sidebar />
          </aside>

          <section className="md:col-span-3">
            <Outlet />
          </section>

        </div>
      </main>
    </div>
  );
};

export default MainPage;