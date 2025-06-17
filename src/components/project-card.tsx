'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    image: string;
    github?: string;
    demo?: string;
    viewText: string;
    codeText: string;
    index: number;
}

export function ProjectCard({
    title,
    description,
    tech,
    image,
    github,
    demo,
    viewText,
    codeText,
    index
}: ProjectCardProps) {
    return (
        <motion.div
            className='h-full'
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Card className='flex h-full flex-col overflow-hidden border-none pt-0 shadow-lg transition-all duration-300 hover:shadow-xl'>
                <div className='group relative aspect-video overflow-hidden'>
                    <Image
                        fill
                        alt={title}
                        src={image}
                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                        {demo ? (
                            <Button asChild variant='default' size='sm' className='mr-2'>
                                <Link href={demo}>
                                    <ExternalLink className='mr-2 h-4 w-4' />
                                    {viewText}
                                </Link>
                            </Button>
                        ) : (
                            <Button disabled variant='default' size='sm' className='mr-2'>
                                <ExternalLink className='mr-2 h-4 w-4' />
                                {viewText}
                            </Button>
                        )}
                    </div>
                </div>
                <CardHeader className='pb-2'>
                    <CardTitle className='text-xl'>{title}</CardTitle>
                    <CardDescription className='line-clamp-2'>{description}</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-grow flex-col justify-between'>
                    <div className='mb-4 flex flex-wrap gap-2'>
                        {tech.map((item) => (
                            <Badge key={item} variant='outline' className='bg-muted/50'>
                                {item}
                            </Badge>
                        ))}
                    </div>
                    <div className='mt-auto flex space-x-2'>
                        {github ? (
                            <Button variant='outline' asChild className='flex-1'>
                                <Link href={github}>
                                    <Github className='mr-2 h-4 w-4' />
                                    {codeText}
                                </Link>
                            </Button>
                        ) : (
                            <Button variant='outline' disabled className='flex-1'>
                                <Github className='mr-2 h-4 w-4' />
                                {codeText}
                            </Button>
                        )}
                        {demo ? (
                            <Button variant='default' asChild className='flex-1'>
                                <Link href={demo}>
                                    <ExternalLink className='mr-2 h-4 w-4' />
                                    {viewText}
                                </Link>
                            </Button>
                        ) : (
                            <Button disabled variant='default' className='flex-1'>
                                <ExternalLink className='mr-2 h-4 w-4' />
                                {viewText}
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
