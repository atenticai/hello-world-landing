import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-none text-center">
        Hello World
      </h1>
      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl text-center">
        Welcome to your simple, elegant, and responsive landing page.
      </p>
    </main>
  );
};

export default HomePage;
