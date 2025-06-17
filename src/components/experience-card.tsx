'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { motion } from 'framer-motion';

interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    description: string;
    index: number;
}

export function ExperienceCard({ title, company, period, description, index }: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}>
            <Card className='relative overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl'>
                <div className='from-primary to-primary/20 absolute top-0 left-0 h-full w-1 bg-gradient-to-b'></div>
                <CardHeader className='pb-2'>
                    <div className='flex flex-wrap items-start justify-between gap-2'>
                        <div>
                            <CardTitle className='text-xl'>{title}</CardTitle>
                            <CardDescription className='text-primary text-lg font-medium'>{company}</CardDescription>
                        </div>
                        <Badge variant='outline' className='bg-muted/50 text-foreground'>
                            {period}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className='text-muted-foreground'>{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
}
