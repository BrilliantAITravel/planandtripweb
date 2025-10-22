import React from 'react';
import { Button } from './ui/button';

interface PrimaryCTAProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export function PrimaryCTA({ onClick, children }: PrimaryCTAProps) {
  return (
    <Button onClick={onClick} size='lg' className='text-lg px-8 py-6'>
      {children}
    </Button>
  );
}
