'use client';

import React, { Suspense } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { images } from '@/assets';
import { scrollToSection } from '@/utils';

import { AnimatedText } from './animated-text';
import { CVModal } from './cv-modal';
import { Button } from './ui/button';
import { LoadingSkeleton } from './ui/loading-skeleton';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Gitlab, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function HeroSection() {
    const t = useTranslations('hero');

    return (
        <section className='relative flex min-h-[90vh] items-center'>
            <div className='container py-24 md:py-32'>
                <div className='flex flex-col items-center space-y-8 text-center'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='relative'>
                        <div className='from-primary to-primary/30 absolute -inset-1 rounded-full bg-gradient-to-r blur-md'></div>
                        <Image
                            src={images.heroImage}
                            alt='Profile'
                            width={180}
                            height={180}
                            className='border-background relative rounded-full border-4'
                            priority
                        />
                    </motion.div>

                    <div className='max-w-3xl space-y-4'>
                        <Suspense fallback={<LoadingSkeleton />}>
                            <AnimatedText
                                text={t('title')}
                                className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'
                            />
                        </Suspense>
                        <div className='from-primary to-primary/20 mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r'></div>
                        <Suspense fallback={<LoadingSkeleton />}>
                            <AnimatedText text={t('subtitle')} className='text-muted-foreground text-xl' />
                        </Suspense>
                        <Suspense fallback={<LoadingSkeleton />}>
                            <AnimatedText text={t('tagline')} className='text-primary text-lg italic' />
                        </Suspense>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='flex flex-wrap justify-center gap-4'>
                        <CVModal buttonText={t('cvPreview')} cvUrl='./pdf/cv.pdf' />
                        <Button
                            variant='outline'
                            size='lg'
                            className='border-primary text-primary hover:bg-primary transition-all duration-300 hover:text-white'
                            onClick={() => scrollToSection('contact')}>
                            <Mail className='mr-2 h-4 w-4' />
                            {t('contactMe')}
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className='flex space-x-4'>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='hover:bg-primary rounded-full transition-all duration-300 hover:text-white'
                            asChild>
                            <Link href='https://github.com/tuhoang99' target='_blank' rel='noopener noreferrer'>
                                <Github className='h-5 w-5' />
                            </Link>
                        </Button>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='hover:bg-primary rounded-full transition-all duration-300 hover:text-white'
                            asChild>
                            <Link href='https://gitlab.com/tuhoang99' target='_blank' rel='noopener noreferrer'>
                                <Gitlab className='h-5 w-5' />
                            </Link>
                        </Button>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='hover:bg-primary rounded-full transition-all duration-300 hover:text-white'
                            onClick={() => scrollToSection('contact')}>
                            <Mail className='h-5 w-5' />
                        </Button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: 'reverse',
                    repeatDelay: 0.5
                }}
                className='absolute bottom-10 left-1/2 -translate-x-1/2 transform cursor-pointer'
                onClick={() => scrollToSection('about')}>
                <ChevronDown className='text-primary/70 h-8 w-8' />
            </motion.div>
        </section>
    );
}
