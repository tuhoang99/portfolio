'use client';

import React from 'react';

import Link from 'next/link';

import { LanguageToggle, MobileNav, ThemeToggle } from '@/components';
import { scrollToSection } from '@/utils';

import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface NavLinkProps {
    href: string;
    text: string;
}

function NavLink({ href, text }: NavLinkProps) {
    return (
        <Link
            href={`#${href}`}
            className='hover:text-primary group relative transition-colors'
            onClick={(e) => {
                e.preventDefault();
                scrollToSection(href);
            }}>
            {text}
            <span className='bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
        </Link>
    );
}

export function Header() {
    const t = useTranslations('navigation');

    return (
        <nav className='bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur'>
            <div className='container flex h-16 items-center'>
                <div className='mr-4 flex'>
                    <Link href='/' className='mr-6 flex items-center space-x-2'>
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}>
                            <Code className='h-6 w-6' />
                        </motion.div>
                        <span className='text-lg font-bold'>{`Portfolio`} </span>
                    </Link>
                </div>
                <div className='flex flex-1 items-center justify-end space-x-2'>
                    <nav className='hidden items-center space-x-6 text-sm font-medium md:flex'>
                        <NavLink href='about' text={t('about')} />
                        <NavLink href='skills' text={t('skills')} />
                        <NavLink href='projects' text={t('projects')} />
                        <NavLink href='experience' text={t('experience')} />
                        <NavLink href='contact' text={t('contact')} />
                    </nav>
                    <div className='hidden items-center space-x-2 md:flex'>
                        <ThemeToggle />
                        <LanguageToggle />
                    </div>
                    <MobileNav />
                </div>
            </div>
        </nav>
    );
}
