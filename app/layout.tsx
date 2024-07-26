import "./globals.css";

export const metadata = {
  title: "Ayub NextJs",
  description: "Created using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white">{children}</body>
    </html>
  );
}
