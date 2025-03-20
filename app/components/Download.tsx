'use client';
import React from 'react';
import { SparklesTextComponent } from './SparklesText';
import { PulsatingButton } from '@/components/magicui/pulsating-button';
import { RainbowButton } from '@/components/magicui/rainbow-button';

const Download: React.FC = () => {
    return (
        <div className='flex flex-col items-center gap-4 '>
            <SparklesTextComponent text="Your document is ready" className="text-lg md:text-xl" />
            <RainbowButton type='button' disabled className='hover:opacity-85 transition duration-300' style={{ background: "#22c55e" }}>Download CSV</RainbowButton>
        </div >
    );
};

export default Download;