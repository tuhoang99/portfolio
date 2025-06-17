'use client';

import React from 'react';

export function LoadingSkeleton() {
    return (
        <div className='animate-pulse'>
            <div className='bg-muted mb-2 h-4 w-3/4 rounded'></div>
            <div className='bg-muted h-4 w-1/2 rounded'></div>
        </div>
    );
}
