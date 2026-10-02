import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { seo, siteConfig } from '@/constants/data';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: siteConfig.name, url: 'https://dmi-roofing.com' }],
  creator: siteConfig.name,
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.brand,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.brand} — ${siteConfig.specialty}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="bg-[#f8f9ff] text-[#131c26] font-sans antialiased selection:bg-[#ffb95f] selection:text-[#0b1f33]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
