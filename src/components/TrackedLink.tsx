'use client';
import { track } from '@vercel/analytics';
import React from 'react';

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  eventName: string;
  className?: string;
  target?: string;
  rel?: string;
}

export default function TrackedLink({ 
  href, 
  children, 
  eventName, 
  className = '', 
  target = '_blank',
  rel = 'noopener noreferrer'
}: TrackedLinkProps) {
  const handleClick = () => {
    // Track the event before navigation
    track(eventName, { link: href });
    
    // Navigate to the link
    window.open(href, target, rel);
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
