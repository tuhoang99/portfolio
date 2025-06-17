'use client';

import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Code, Database, Globe, Server } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface SkillsAccordionProps {
    skills: { name: string; category: string }[];
}

export function SkillsAccordion({ skills }: SkillsAccordionProps) {
    const t = useTranslations('skills');

    const [openSections, setOpenSections] = useState<string[]>(['frontend']);

    const skillCategories = [
        {
            id: 'frontend',
            label: t('frontend'),
            icon: <Code className='h-5 w-5' />,
            skills: skills.filter((skill) => skill.category === 'Frontend'),
            gradient: 'from-blue-500/20 via-cyan-500/15 to-indigo-500/20',
            borderGradient: 'from-blue-500 to-cyan-500',
            iconColor: 'text-blue-600 dark:text-blue-400',
            description: t('frontendDesc'),
            proficiencyLevel: 4
        },
        {
            id: 'backend',
            label: t('backend'),
            icon: <Server className='h-5 w-5' />,
            skills: skills.filter((skill) => skill.category === 'Backend'),
            gradient: 'from-green-500/20 via-emerald-500/15 to-teal-500/20',
            borderGradient: 'from-green-500 to-emerald-500',
            iconColor: 'text-green-600 dark:text-green-400',
            description: t('backendDesc'),
            proficiencyLevel: 3
        },
        {
            id: 'database',
            label: t('database'),
            icon: <Database className='h-5 w-5' />,
            skills: skills.filter((skill) => skill.category === 'Database'),
            gradient: 'from-purple-500/20 via-violet-500/15 to-fuchsia-500/20',
            borderGradient: 'from-purple-500 to-violet-500',
            iconColor: 'text-purple-600 dark:text-purple-400',
            description: t('databaseDesc'),
            proficiencyLevel: 3
        },
        {
            id: 'cloud',
            label: t('cloudDevops'),
            icon: <Globe className='h-5 w-5' />,
            skills: skills.filter((skill) => skill.category === 'Cloud' || skill.category === 'DevOps'),
            gradient: 'from-orange-500/20 via-red-500/15 to-pink-500/20',
            borderGradient: 'from-orange-500 to-red-500',
            iconColor: 'text-orange-600 dark:text-orange-400',
            description: t('cloudDevopsDesc'),
            proficiencyLevel: 2
        }
    ];

    const toggleSection = (sectionId: string) => {
        setOpenSections((prev) =>
            prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
        );
    };

    return (
        <div className='mx-auto max-w-4xl'>
            <div className='space-y-4'>
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}>
                        <Collapsible
                            open={openSections.includes(category.id)}
                            onOpenChange={() => toggleSection(category.id)}>
                            <Card
                                className={`relative overflow-hidden bg-gradient-to-r ${category.gradient} group border-none shadow-lg transition-all duration-300 hover:shadow-xl`}>
                                {/* Header */}
                                <CollapsibleTrigger asChild>
                                    <CardHeader className='cursor-pointer transition-colors duration-300 hover:bg-white/10 dark:hover:bg-white/5'>
                                        {/* Gradient Border */}
                                        <div
                                            className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${category.borderGradient} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                                        />

                                        <CardTitle className='flex items-center justify-between'>
                                            <div className='flex items-center space-x-4'>
                                                <div
                                                    className={`${category.iconColor} rounded-lg bg-white/10 p-2 dark:bg-white/5`}>
                                                    {category.icon}
                                                </div>
                                                <div className='flex flex-col items-start'>
                                                    <span className='text-xl font-bold'>{category.label}</span>
                                                    <span className='text-muted-foreground text-sm font-normal'>
                                                        {category.description}
                                                    </span>
                                                </div>
                                                <Badge
                                                    variant='secondary'
                                                    className='text-foreground ml-auto border-white/20 bg-white/20 dark:bg-white/10'>
                                                    {category.skills.length} {t('skills')}
                                                </Badge>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: openSections.includes(category.id) ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}>
                                                <ChevronDown className='text-muted-foreground h-5 w-5' />
                                            </motion.div>
                                        </CardTitle>
                                    </CardHeader>
                                </CollapsibleTrigger>

                                {/* Content */}
                                <AnimatePresence>
                                    {openSections.includes(category.id) && (
                                        <CollapsibleContent>
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                                                <CardContent className='pt-0 pb-6'>
                                                    <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
                                                        {category.skills.map((skill, skillIndex) => (
                                                            <motion.div
                                                                key={skill.name}
                                                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                                transition={{
                                                                    duration: 0.3,
                                                                    delay: skillIndex * 0.05,
                                                                    type: 'spring',
                                                                    stiffness: 100
                                                                }}
                                                                whileHover={{
                                                                    scale: 1.05,
                                                                    transition: { duration: 0.2 }
                                                                }}>
                                                                <Badge
                                                                    variant='secondary'
                                                                    className='w-full cursor-default justify-center border border-white/20 bg-white/30 px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:border-white/30 hover:bg-white/40 dark:bg-white/10 dark:hover:bg-white/20'>
                                                                    {skill.name}
                                                                </Badge>
                                                            </motion.div>
                                                        ))}
                                                    </div>

                                                    {/* Category Stats */}
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3, delay: 0.2 }}
                                                        className='mt-6 border-t border-white/20 pt-4'>
                                                        <div className='text-muted-foreground flex items-center justify-between text-sm'>
                                                            <span>
                                                                {t('totalSkills')}: {category.skills.length}
                                                            </span>
                                                            <span className='flex items-center space-x-1'>
                                                                <span>{t('proficiencyLevel')}:</span>
                                                                <div className='flex space-x-1'>
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <div
                                                                            key={i}
                                                                            className={`h-2 w-2 rounded-full ${i < category.proficiencyLevel ? 'bg-primary' : 'bg-muted'}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </motion.div>
                                                </CardContent>
                                            </motion.div>
                                        </CollapsibleContent>
                                    )}
                                </AnimatePresence>
                            </Card>
                        </Collapsible>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
