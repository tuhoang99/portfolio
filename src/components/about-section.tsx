'use client';

import React, { Suspense } from 'react';

import { SectionHeading } from './section-heading';
import { StatCard } from './stat-card';
import { Card, CardContent } from './ui/card';
import { LoadingSkeleton } from './ui/loading-skeleton';
import { Separator } from './ui/separator';
import { motion } from 'framer-motion';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function AboutSection() {
    const t = useTranslations('about');

    return (
        <section id='about' className='relative py-24'>
            <div className='container'>
                <SectionHeading title={t('title')} />

                <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='lg:col-span-2'>
                        <Card className='h-full border-none shadow-lg'>
                            <CardContent className='p-8'>
                                <p className='text-muted-foreground text-lg leading-relaxed'>{t('description')}</p>
                                <Separator className='my-6' />
                                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                                    <div className='space-y-4'>
                                        <div className='group flex items-center space-x-3'>
                                            <div className='bg-primary/10 group-hover:bg-primary/20 rounded-full p-2 transition-colors duration-300'>
                                                <MapPin className='text-primary h-5 w-5' />
                                            </div>
                                            <span>{t('location')}</span>
                                        </div>
                                        <div className='group flex items-center space-x-3'>
                                            <div className='bg-primary/10 group-hover:bg-primary/20 rounded-full p-2 transition-colors duration-300'>
                                                <Phone className='text-primary h-5 w-5' />
                                            </div>
                                            <span>{t('phone')}</span>
                                        </div>
                                    </div>
                                    <div className='space-y-4'>
                                        <div className='group flex items-center space-x-3'>
                                            <div className='bg-primary/10 group-hover:bg-primary/20 rounded-full p-2 transition-colors duration-300'>
                                                <Mail className='text-primary h-5 w-5' />
                                            </div>
                                            <span>{t('email')}</span>
                                        </div>
                                        <div className='group flex items-center space-x-3'>
                                            <div className='bg-primary/10 group-hover:bg-primary/20 rounded-full p-2 transition-colors duration-300'>
                                                <Globe className='text-primary h-5 w-5' />
                                            </div>
                                            <span>{t('website')}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}>
                        <Card className='from-primary/5 to-primary/10 h-full border-none bg-gradient-to-br shadow-lg'>
                            <CardContent className='p-6'>
                                <h3 className='mb-4 text-center text-xl font-semibold'>{t('statsTitle')}</h3>
                                <div className='grid grid-cols-2 gap-4'>
                                    <Suspense fallback={<LoadingSkeleton />}>
                                        <StatCard value={2} label={t('yearsExperience')} suffix='+' delay={0} />
                                    </Suspense>
                                    <Suspense fallback={<LoadingSkeleton />}>
                                        <StatCard value={5} label={t('projectsCompleted')} suffix='+' delay={1} />
                                    </Suspense>
                                    <Suspense fallback={<LoadingSkeleton />}>
                                        <StatCard value={3} label={t('companiesWorked')} delay={2} />
                                    </Suspense>
                                    <Suspense fallback={<LoadingSkeleton />}>
                                        <StatCard value={12} label={t('satisfiedClients')} suffix='+' delay={3} />
                                    </Suspense>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
