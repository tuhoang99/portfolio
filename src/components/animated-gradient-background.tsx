'use client';

import React, { useEffect, useMemo, useRef } from 'react';

import { useTheme } from 'next-themes';

export const AnimatedGradientBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { theme, systemTheme } = useTheme();

    const actualTheme = useMemo(() => {
        return theme === 'system' ? systemTheme : theme;
    }, [theme, systemTheme]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Gradient colors based on theme
        const colors =
            actualTheme === 'dark'
                ? [
                      { r: 99, g: 102, b: 241 }, // Indigo
                      { r: 168, g: 85, b: 247 }, // Purple
                      { r: 34, g: 197, b: 94 } // Green
                  ]
                : [
                      { r: 62, g: 84, b: 172 }, // Blue
                      { r: 120, g: 99, b: 255 }, // Purple
                      { r: 88, g: 189, b: 125 } // Green
                  ];

        // Background color based on theme
        const bgColor = actualTheme === 'dark' ? 'rgba(2, 8, 23, 0.02)' : 'rgba(255, 255, 255, 0.03)';

        let animationFrameId: number;

        // Circles
        const circles = Array.from({ length: 3 }, (_, i) => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.max(width, height) * (0.2 + Math.random() * 0.1),
            color: colors[i % colors.length],
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        }));

        const animate = () => {
            // Clear canvas with very low opacity to create trails
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, width, height);

            // Update and draw circles
            circles.forEach((circle) => {
                // Move circles
                circle.x += circle.vx;
                circle.y += circle.vy;

                // Bounce off edges
                if (circle.x < -circle.radius) circle.x = width + circle.radius;
                if (circle.x > width + circle.radius) circle.x = -circle.radius;
                if (circle.y < -circle.radius) circle.y = height + circle.radius;
                if (circle.y > height + circle.radius) circle.y = -circle.radius;

                // Draw gradient circle
                const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius);

                const opacity = actualTheme === 'dark' ? 0.15 : 0.2;
                gradient.addColorStop(0, `rgba(${circle.color.r}, ${circle.color.g}, ${circle.color.b}, ${opacity})`);
                gradient.addColorStop(1, `rgba(${circle.color.r}, ${circle.color.g}, ${circle.color.b}, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [actualTheme]);

    return <canvas ref={canvasRef} className='fixed top-0 left-0 -z-10 h-full w-full opacity-40 dark:opacity-60' />;
};
