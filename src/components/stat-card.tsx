'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
    value: number;
    label: string;
    suffix?: string;
    delay?: number;
}

export function StatCard({ value, label, suffix = '', delay = 0 }: StatCardProps) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            const duration = 2000; // ms
            const frameDuration = 1000 / 60; // 60fps
            const totalFrames = Math.round(duration / frameDuration);
            const easeOutQuad = (t: number) => t * (2 - t);

            let frame = 0;
            const counter = setInterval(() => {
                frame++;
                const progress = easeOutQuad(frame / totalFrames);
                setCount(Math.floor(value * progress));

                if (frame === totalFrames) {
                    clearInterval(counter);
                    setCount(value);
                }
            }, frameDuration);

            return () => clearInterval(counter);
        }
    }, [inView, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            className='flex flex-col items-center p-4'>
            <span className='text-primary mb-2 text-4xl font-bold md:text-5xl'>
                {count}
                {suffix}
            </span>
            <span className='text-muted-foreground text-center text-sm'>{label}</span>
        </motion.div>
    );
}
