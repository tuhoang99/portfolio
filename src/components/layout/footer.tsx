'use client';

import React from 'react';

import Link from 'next/link';

import { Code } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
    const h = useTranslations('hero');
    const f = useTranslations('footer');

    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-muted/30 border-t py-12'>
            <div className='container text-center'>
                <div className='flex flex-col items-center space-y-4'>
                    <Link href='#' className='flex items-center space-x-2'>
                        <Code className='h-6 w-6' />
                        <span className='text-lg font-bold'>Portfolio</span>
                    </Link>

                    <p className='text-muted-foreground'>
                        &copy; {currentYear} {h('title')}. {f('text')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
