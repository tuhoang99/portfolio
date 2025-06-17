'use client';

import { AnimatedTitle } from './animated-text';

interface SectionHeadingProps {
    title: string;
    tagline?: string;
    className?: string;
}

export function SectionHeading({ title, tagline, className = '' }: SectionHeadingProps) {
    return (
        <div className={`mb-16 text-center ${className}`}>
            <AnimatedTitle>
                <h2 className='relative mb-4 inline-block text-3xl font-bold md:text-4xl'>
                    {title}
                    <span className='from-primary/80 to-primary/20 absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r'></span>
                </h2>
            </AnimatedTitle>
            {tagline && <p className='text-muted-foreground mt-2 text-lg'>{tagline}</p>}
        </div>
    );
}
