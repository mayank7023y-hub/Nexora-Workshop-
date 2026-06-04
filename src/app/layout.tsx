import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nexora Workshop - E-commerce & Workshop Platform',
  description:
    'A modern e-commerce and workshop management platform built with Next.js, Tailwind CSS, and Prisma.',
  keywords: ['e-commerce', 'workshop', 'marketplace', 'nextjs'],
  authors: [{ name: 'Nexora Team' }],
  creator: 'Nexora',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexora-workshop.com',
    siteName: 'Nexora Workshop',
    title: 'Nexora Workshop',
    description: 'Modern e-commerce and workshop platform',
    images: [
      {
        url: 'https://nexora-workshop.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nexora Workshop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Workshop',
    description: 'Modern e-commerce and workshop platform',
    creator: '@nexora',
    images: ['https://nexora-workshop.com/twitter-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
