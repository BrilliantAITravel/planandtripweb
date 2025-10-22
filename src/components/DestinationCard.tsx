import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Star } from 'lucide-react';

interface DestinationCardProps {
  name: string;
  location?: string;
  image?: string;
  rating?: number;
  onClick?: () => void;
}

export function DestinationCard({ name, location, image, rating, onClick }: DestinationCardProps) {
  return (
    <Card className='cursor-pointer hover:shadow-lg transition-shadow' onClick={onClick}>
      {image && (
        <img src={image} alt={name} className='w-full h-48 object-cover rounded-t-lg' />
      )}
      <CardContent className='p-4'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        {location && <p className='text-gray-600 text-sm'>{location}</p>}
      </CardContent>
      {rating && (
        <CardFooter className='flex items-center'>
          <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
          <span className='ml-1'>{rating}</span>
        </CardFooter>
      )}
    </Card>
  );
}
