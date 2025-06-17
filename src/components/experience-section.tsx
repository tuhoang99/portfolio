'use client';

import React, { Suspense } from 'react';

import { ExperienceCard } from './experience-card';
import { SectionHeading } from './section-heading';
import { LoadingSkeleton } from './ui/loading-skeleton';
import { useTranslations } from 'next-intl';

export function ExperienceSection() {
    const t = useTranslations('experience');

    const experience = [
        {
            title: t('fresherDev'),
            company: t('techSolutions'),
            period: `05/2023 - ${t('present')}`,
            description: t('fresherDesc')
        },
        {
            title: t('internDev'),
            company: t('gcalls'),
            period: '09/2022 - 11/2022',
            description: t('internDesc')
        }
    ];

    return (
        <section id='experience' className='bg-muted/30 py-24'>
            <div className='container'>
                <SectionHeading title={t('title')} tagline={t('tagline')} />

                <div className='mx-auto max-w-4xl space-y-8'>
                    {experience.map((exp, index) => (
                        <Suspense key={index} fallback={<LoadingSkeleton />}>
                            <ExperienceCard
                                title={exp.title}
                                company={exp.company}
                                period={exp.period}
                                description={exp.description}
                                index={index}
                            />
                        </Suspense>
                    ))}
                </div>
            </div>
        </section>
    );
}
