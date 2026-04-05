import Header from '@/components/custom/Header';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-8 min-h-96 px-6 container mx-auto">
        {children}
      </main>
    </>
  );
}
