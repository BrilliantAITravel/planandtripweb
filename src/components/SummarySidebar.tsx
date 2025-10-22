import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface SummarySidebarProps {
  total: number;
  items: Array<{ name: string; price: number }>;
}

export function SummarySidebar({ total, items }: SummarySidebarProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          {items.map((item, index) => (
            <div key={index} className='flex justify-between'>
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <div className='border-t pt-2 mt-2'>
            <div className='flex justify-between font-bold'>
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
