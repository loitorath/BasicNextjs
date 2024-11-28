import NavLinks from "./fonts/ui/nav-links";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavLinks/>
        <div className="bg-pink-400 p-4 text-white rounded-b-md border shadow-md">Title of Main Layout</div>
        {children}
      </body>
    </html>
  );
}
