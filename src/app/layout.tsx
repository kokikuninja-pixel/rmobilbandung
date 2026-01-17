import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActionButton } from '@/components/floating-action-button';

export const metadata: Metadata = {
  title: 'RMJP Rental | The Urban Traveler Experience',
  description: 'Rental motor matic terpercaya di Jakarta Pusat.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <FloatingActionButton />
      </body>
    </html>
  );
}
