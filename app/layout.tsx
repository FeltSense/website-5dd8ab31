import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sarah Chen Photography',
  description: 'Award-winning architectural photographer capturing the essence of design through striking black and white imagery',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
