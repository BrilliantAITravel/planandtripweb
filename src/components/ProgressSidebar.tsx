import React from 'react';
import { Check } from 'lucide-react';

interface ProgressSidebarProps {
  currentStep: number;
  steps: string[];
}

export function ProgressSidebar({ currentStep, steps }: ProgressSidebarProps) {
  return (
    <div className='bg-white rounded-lg shadow p-6'>
      <h3 className='text-lg font-semibold mb-4'>Your Progress</h3>
      <div className='space-y-4'>
        {steps.map((step, index) => (
          <div key={index} className='flex items-center space-x-3'>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index < currentStep ? 'bg-green-500' : 
              index === currentStep ? 'bg-blue-500' : 'bg-gray-300'
            } text-white`}>
              {index < currentStep ? <Check className='h-4 w-4' /> : index + 1}
            </div>
            <span className={index <= currentStep ? 'font-semibold' : 'text-gray-500'}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
