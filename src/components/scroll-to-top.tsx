'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className='fixed right-8 bottom-8 z-50'>
                    <Button
                        onClick={scrollToTop}
                        size='icon'
                        className='bg-primary hover:bg-primary/90 rounded-full shadow-lg transition-all duration-300'>
                        <ArrowUp className='h-5 w-5' />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
