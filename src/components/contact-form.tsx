'use client';

import type React from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ContactFormProps {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendText: string;
}

export function ContactForm({ nameLabel, emailLabel, messageLabel, sendText }: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mx-auto w-full max-w-md'>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <Input
                        type='text'
                        placeholder={nameLabel}
                        required
                        className='bg-background border-muted-foreground/20 focus:border-primary h-12'
                    />
                </div>
                <div>
                    <Input
                        type='email'
                        placeholder={emailLabel}
                        required
                        className='bg-background border-muted-foreground/20 focus:border-primary h-12'
                    />
                </div>
                <div>
                    <Textarea
                        placeholder={messageLabel}
                        required
                        className='bg-background border-muted-foreground/20 focus:border-primary min-h-[150px]'
                    />
                </div>
                <Button
                    type='submit'
                    disabled={isSubmitting || isSubmitted}
                    className='from-primary to-primary/80 hover:from-primary/90 hover:to-primary h-12 w-full bg-gradient-to-r transition-all duration-300'>
                    {isSubmitting ? (
                        <div className='flex items-center'>
                            <div className='mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent'></div>
                            <span>{sendText}...</span>
                        </div>
                    ) : isSubmitted ? (
                        <div className='flex items-center'>
                            <svg className='mr-2 h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                            </svg>
                            <span>Sent!</span>
                        </div>
                    ) : (
                        <div className='flex items-center'>
                            <Send className='mr-2 h-4 w-4' />
                            <span>{sendText}</span>
                        </div>
                    )}
                </Button>
            </form>
        </motion.div>
    );
}
