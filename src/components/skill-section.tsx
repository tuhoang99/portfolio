import React, { Suspense } from 'react';

import { SectionHeading } from './section-heading';
import { SkillsAccordion } from './skills-accordion-enhanced';
import { LoadingSkeleton } from './ui/loading-skeleton';
import { useTranslations } from 'next-intl';

const skills = [
    { name: 'React', category: 'Frontend' },
    { name: 'React Native', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Framer Motion', category: 'Frontend' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'Sass', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    {
        name: 'Shadcn UI',
        category: 'Frontend'
    },
    { name: 'Ant Design', category: 'Frontend' },

    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'NestJS', category: 'Backend' },

    { name: 'MongoDB', category: 'Database' },
    { name: 'Mongoose', category: 'Database' },

    { name: 'Vercel', category: 'Cloud' },
    { name: 'Render', category: 'Cloud' },
    { name: 'Firebase', category: 'Cloud' },

    { name: 'Docker', category: 'DevOps' }
];

export function SkillSection() {
    const t = useTranslations('skills');

    return (
        <section id='skills' className='bg-muted/30 py-24'>
            <div className='container'>
                <SectionHeading title={t('title')} tagline={t('tagline')} />

                <Suspense fallback={<LoadingSkeleton />}>
                    <SkillsAccordion skills={skills} />
                </Suspense>
            </div>
        </section>
    );
}
