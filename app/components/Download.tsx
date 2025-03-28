'use client';
import React from 'react';
import { SparklesTextComponent } from './SparklesText';
import { RainbowButton } from '@/components/magicui/rainbow-button';
interface DownloadProps {
    onDownload: () => void;
}
const Download: React.FC<DownloadProps> = ({ onDownload }) => {
    return (
        <div className='flex flex-col items-center gap-4 '>
            <SparklesTextComponent text="Your document is ready" className="text-lg md:text-xl" />
            <RainbowButton type='button' className='hover:opacity-85 transition duration-300' style={{ background: "#22c55e" }} onClick={onDownload} >Download CSV</RainbowButton>
        </div >
    );
};

export default Download;