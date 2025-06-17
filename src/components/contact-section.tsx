'use client';

import React, { Suspense } from 'react';

import { ContactForm } from './contact-form';
import { SectionHeading } from './section-heading';
import { Button } from './ui/button';
import { LoadingSkeleton } from './ui/loading-skeleton';
import { motion } from 'framer-motion';
import { Github, Gitlab, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
    const t = useTranslations('contact');

    const a = useTranslations('about');

    return (
        <section id='contact' className='py-24'>
            <div className='container'>
                <SectionHeading title={t('title')} tagline={t('description')} />

                <div className='mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center'>
                        <div className='space-y-6'>
                            <div className='group flex items-center space-x-4'>
                                <div className='bg-primary/10 group-hover:bg-primary/20 rounded-full p-3 transition-colors duration-300'>
                                    <Mail className='text-primary h-6 w-6' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Email</h3>
                                    <p className='text-muted-foreground'>{a('email')}</p>
                                </div>
                            </div>

                            <div className='group flex items-center space-x-4'>
                                <div className='bg-primary/10 group-hover:bg-primary/20 rounded-full p-3 transition-colors duration-300'>
                                    <Phone className='text-primary h-6 w-6' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Phone</h3>
                                    <p className='text-muted-foreground'>{a('phone')}</p>
                                </div>
                            </div>

                            <div className='group flex items-center space-x-4'>
                                <div className='bg-primary/10 group-hover:bg-primary/20 rounded-full p-3 transition-colors duration-300'>
                                    <MapPin className='text-primary h-6 w-6' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Location</h3>
                                    <p className='text-muted-foreground'>{a('location')}</p>
                                </div>
                            </div>

                            <div className='pt-4'>
                                <h3 className='mb-3 font-medium'>Social Media</h3>
                                <div className='flex space-x-3'>
                                    <Button
                                        variant='outline'
                                        size='icon'
                                        className='hover:bg-primary rounded-full transition-all duration-300 hover:text-white'
                                        asChild>
                                        <a
                                            href='https://github.com/tuhoang99'
                                            target='_blank'
                                            rel='noopener noreferrer'>
                                            <Github className='h-5 w-5' />
                                        </a>
                                    </Button>
                                    <Button
                                        variant='outline'
                                        size='icon'
                                        className='hover:bg-primary rounded-full transition-all duration-300 hover:text-white'
                                        asChild>
                                        <a
                                            href='https://gitlab.com/tuhoang99'
                                            target='_blank'
                                            rel='noopener noreferrer'>
                                            <Gitlab className='h-5 w-5' />
                                        </a>
                                    </Button>
                                    <Button
                                        variant='outline'
                                        size='icon'
                                        className='hover:bg-primary rounded-full transition-all duration-300 hover:text-white'>
                                        <Mail className='h-5 w-5' />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <Suspense fallback={<LoadingSkeleton />}>
                        <ContactForm
                            nameLabel={t('nameLabel')}
                            emailLabel={t('emailLabel')}
                            messageLabel={t('messageLabel')}
                            sendText={t('sendMessage')}
                        />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
