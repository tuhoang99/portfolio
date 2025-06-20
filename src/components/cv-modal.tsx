'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Eye, X, ZoomIn, ZoomOut } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface CVModalProps {
    buttonText: string;
    cvUrl?: string;
}

export function CVModal({ buttonText, cvUrl }: CVModalProps) {
    const t = useTranslations('hero');

    const [isOpen, setIsOpen] = useState(false);
    const [zoom, setZoom] = useState(100);
    const [isLoading, setIsLoading] = useState(true);

    const handleZoomIn = () => {
        setZoom((prev) => Math.min(prev + 25, 200));
    };

    const handleZoomOut = () => {
        setZoom((prev) => Math.max(prev - 25, 50));
    };

    const handleExternalView = () => {
        window.open(cvUrl, '_blank');
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    size='lg'
                    className='from-primary to-primary/80 hover:from-primary/90 hover:to-primary bg-gradient-to-r transition-all duration-300'>
                    <Eye className='mr-2 h-4 w-4' />
                    {buttonText}
                </Button>
            </DialogTrigger>

            <AnimatePresence>
                {isOpen && (
                    <DialogContent
                        className='bg-background/95 h-screen w-screen !max-w-none overflow-hidden p-0 backdrop-blur-sm'
                        showCloseButton={false}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className='flex h-full flex-col'>
                            {/* Header */}
                            <DialogHeader className='bg-background/80 flex flex-row items-center justify-between border-b p-4 backdrop-blur-sm'>
                                <DialogTitle className='flex items-center space-x-2 text-xl font-bold'>
                                    <Eye className='text-primary h-5 w-5' />
                                    <span>{t('cvPreview')}</span>
                                </DialogTitle>

                                {/* Controls */}
                                <div className='flex items-center space-x-2'>
                                    {/* Zoom Controls */}
                                    <div className='bg-muted flex items-center space-x-1 rounded-lg p-1'>
                                        <Button variant='ghost' size='sm' onClick={handleZoomOut} disabled={zoom <= 50}>
                                            <ZoomOut className='h-4 w-4' />
                                        </Button>
                                        <span className='min-w-[50px] text-center text-sm font-medium'>{zoom}%</span>
                                        <Button variant='ghost' size='sm' onClick={handleZoomIn} disabled={zoom >= 200}>
                                            <ZoomIn className='h-4 w-4' />
                                        </Button>
                                    </div>

                                    {/* Action Buttons */}
                                    <Button variant='outline' size='sm' onClick={handleExternalView}>
                                        <ExternalLink className='mr-1 h-4 w-4' />
                                        <span className='hidden sm:inline'>{t('open')}</span>
                                    </Button>

                                    <Button variant='ghost' size='sm' onClick={() => setIsOpen(false)}>
                                        <X className='h-4 w-4' />
                                    </Button>
                                </div>
                            </DialogHeader>

                            {/* CV Content */}
                            <div className='bg-muted/30 relative flex-1 overflow-hidden'>
                                {isLoading && (
                                    <div className='bg-background/50 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm'>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className='flex flex-col items-center space-y-4'>
                                            <div className='border-primary h-12 w-12 animate-spin rounded-full border-4 border-t-transparent' />
                                            <p className='text-muted-foreground'>Loading...</p>
                                        </motion.div>
                                    </div>
                                )}

                                <div className='h-full w-full overflow-auto'>
                                    <div
                                        className='mx-auto transition-all duration-300 ease-in-out'
                                        style={{
                                            width: `${zoom}%`,
                                            minHeight: '100%'
                                        }}>
                                        <iframe
                                            src={cvUrl}
                                            title='CV Preview'
                                            onLoad={() => setIsLoading(false)}
                                            onError={() => setIsLoading(false)}
                                            className='h-full min-h-screen w-full bg-white shadow-2xl'
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </DialogContent>
                )}
            </AnimatePresence>
        </Dialog>
    );
}
