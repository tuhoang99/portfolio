'use client';

import React, { Suspense } from 'react';

import { images } from '@/assets';

import { ProjectCard } from './project-card';
import { SectionHeading } from './section-heading';
import { LoadingSkeleton } from './ui/loading-skeleton';
import { useTranslations } from 'next-intl';

export function ProjectSection() {
    const t = useTranslations('projects');

    const projects = [
        {
            title: t('otlTitle'),
            description: t('otlDesc'),
            tech: ['React Native', 'TypeScript', 'Firebase', 'Code Push'],
            image: images.oneThienLongThumbnail,
            github: undefined,
            demo: undefined
        },
        {
            title: t('ecatalogueTitle'),
            description: t('ecatalogueDesc'),
            tech: ['React', 'React Native', 'TypeScript', 'OneSignal', 'Hot Update'],
            image: images.ecatalogueThumbnail,
            github: undefined,
            demo: 'https://catalogue.thienlong.vn/'
        },
        {
            title: t('mmtbTitle'),
            description: t('mmtbDesc'),
            tech: ['React Native', 'TypeScript'],
            image: images.namthienlongThumbnail,
            github: undefined,
            demo: undefined
        }
    ];

    return (
        <section id='projects' className='py-24'>
            <div className='container'>
                <SectionHeading title={t('title')} tagline={t('tagline')} />

                <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {projects.map((project, index) => (
                        <Suspense key={index} fallback={<LoadingSkeleton />}>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                tech={project.tech}
                                image={project.image}
                                github={project.github}
                                demo={project.demo}
                                viewText={t('viewProject')}
                                codeText='GitHub'
                                index={index}
                            />
                        </Suspense>
                    ))}
                </div>
            </div>
        </section>
    );
}
