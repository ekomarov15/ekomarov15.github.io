export default function Layout({ children }) {
  return (
    <html lang="ru">
      <body className="bg-gray-100 text-[14px]">
        <header className="bg-white border-b p-2">
          <a href="/" className="font-bold">РЕШУ РУССКИЙ</a>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
