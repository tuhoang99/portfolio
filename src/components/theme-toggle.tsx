'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { motion } from 'framer-motion';
import { Monitor, Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon' className='rounded-full'>
                    <motion.div
                        key={resolvedTheme}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}>
                        {resolvedTheme === 'dark' ? <Moon className='h-4 w-4' /> : <Sun className='h-4 w-4' />}
                    </motion.div>
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-40'>
                <DropdownMenuItem onClick={() => setTheme('light')} className='cursor-pointer'>
                    <Sun className='mr-2 h-4 w-4' />
                    <span>Light</span>
                    {theme === 'light' && <span className='ml-auto'>✓</span>}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')} className='cursor-pointer'>
                    <Moon className='mr-2 h-4 w-4' />
                    <span>Dark</span>
                    {theme === 'dark' && <span className='ml-auto'>✓</span>}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')} className='cursor-pointer'>
                    <Monitor className='mr-2 h-4 w-4' />
                    <span>System</span>
                    {theme === 'system' && <span className='ml-auto'>✓</span>}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
