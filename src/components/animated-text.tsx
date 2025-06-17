'use client';

import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
    text: string;
    className?: string;
    once?: boolean;
}

export function AnimatedText({ text, className = '', once = true }: AnimatedTextProps) {
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring' as const,
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring' as const,
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            key={text}
            initial='hidden'
            viewport={{ once }}
            variants={container}
            whileInView='visible'
            className={`inline-block ${className}`}>
            {words.map((word, index) => (
                <motion.span key={index} className='mr-1 inline-block' variants={child}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}

interface AnimatedTitleProps {
    children: ReactNode;
    className?: string;
}

export function AnimatedTitle({ children, className = '' }: AnimatedTitleProps) {
    return (
        <motion.div
            className={className}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}>
            {children}
        </motion.div>
    );
}
