'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { scrollToSection } from '@/utils';

import { LanguageToggle } from './language-toggle';
import { ThemeToggle } from './theme-toggle';
import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface SheetLinkProps {
    href: string;
    text: string;
}

function SheetLink({ href, text }: SheetLinkProps) {
    return (
        <Link
            href={`#${href}`}
            className='hover:text-primary text-lg font-medium transition-colors'
            onClick={(e) => {
                e.preventDefault();
                scrollToSection(href);
            }}>
            {text}
        </Link>
    );
}

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const t = useTranslations('navigation');

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='md:hidden'>
                    <Menu className='h-5 w-5' />
                    <span className='sr-only'>{`Toggle menu`}</span>
                </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] px-4 sm:w-[400px]'>
                <SheetTitle />
                <div className='mt-8 flex flex-col space-y-4'>
                    <SheetLink href='about' text={t('about')} />
                    <SheetLink href='skills' text={t('skills')} />
                    <SheetLink href='projects' text={t('projects')} />
                    <SheetLink href='experience' text={t('experience')} />
                    <SheetLink href='contact' text={t('contact')} />

                    <div className='flex items-center space-x-4 border-t pt-4'>
                        <ThemeToggle />
                        <LanguageToggle />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
