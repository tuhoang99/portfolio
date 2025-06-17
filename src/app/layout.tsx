import type React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer, Header } from '@/components';
import { ThemeProvider } from '@/providers';
import '@/styles/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    icons: 'icon.png',
    title: 'Portfolio | Hoàng Anh Tú',
    description: 'Welcome to my portfolio website showcasing my projects and skills.',
    authors: [{ name: 'Hoàng Anh Tú' }],
    creator: 'Hoàng Anh Tú',
    keywords: [
        'portfolio',
        'hoanganhtu',
        'Hoàng Anh Tú',
        'web designer',
        'web developer',
        'mobile developer',
        'software engineer',
        'backend developer',
        'software developer',
        'frontend developer',
        'full stack developer',
        'projects',
        'developer',
        'skills',
        'react',
        'nextjs',
        'reactjs',
        'react native',
        'javascript',
        'typescript'
    ],
    openGraph: {
        type: 'website',
        locale: 'vi-VN',
        url: 'https://hoanganhtu.dev',
        title: 'Portfolio | Hoàng Anh Tú',
        description: 'Welcome to my portfolio website showcasing my projects and skills.',
        siteName: 'Portfolio | Hoàng Anh Tú'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portfolio | Hoàng Anh Tú',
        description: 'Welcome to my portfolio website showcasing my projects and skills.',
        creator: '@hoanganhtu'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    }
};

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const localeMessages = await getMessages();

    return (
        <html suppressHydrationWarning lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider locale={locale} messages={localeMessages}>
                    <ThemeProvider>
                        <Header />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
