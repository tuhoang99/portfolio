'use client';

import React, { Suspense } from 'react';

import {
    AboutSection,
    AnimatedGradientBackground,
    ExperienceSection,
    HeroSection,
    ProjectSection,
    ScrollToTop,
    SkillSection
} from '@/components';
import ContactSection from '@/components/contact-section';

export function Portfolio() {
    return (
        <div className='bg-background min-h-screen'>
            <Suspense fallback={<div className='bg-background fixed inset-0' />}>
                <AnimatedGradientBackground />
            </Suspense>
            <ScrollToTop />
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ExperienceSection />
            <ContactSection />
        </div>
    );
}
