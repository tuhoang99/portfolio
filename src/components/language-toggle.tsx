'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { motion } from 'framer-motion';

export function LanguageToggle() {
    const router = useRouter();

    const [language, setLanguage] = useState<'en' | 'vi'>('vi');

    useEffect(() => {
        const cookieLang = document.cookie.split('; ').find((row) => row.startsWith('NEXT_LOCALE='));
        if (cookieLang) {
            const currentLocale = cookieLang.split('=')[1] as 'en' | 'vi';
            setLanguage(currentLocale);
        } else {
            const browserLang = navigator.language.split('-')[0] as 'en' | 'vi';
            setLanguage(browserLang);
            document.cookie = `NEXT_LOCALE=${browserLang}`;
            router.refresh();
        }
    }, [router]);

    const changeLanguage = () => {
        const newLanguage = language === 'en' ? 'vi' : 'en';
        setLanguage(newLanguage);
        document.cookie = `NEXT_LOCALE=${newLanguage}`;
        router.refresh();
    };

    return (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Button
                variant='outline'
                size='sm'
                onClick={changeLanguage}
                className='hover:bg-primary rounded-full px-4 font-medium transition-all duration-300 hover:text-white'>
                {language === 'en' ? 'VI' : 'EN'}
            </Button>
        </motion.div>
    );
}
