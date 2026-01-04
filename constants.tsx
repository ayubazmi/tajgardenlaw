
import React from 'react';
import { Service, Amenity, GalleryItem } from './types';

export const COLORS = {
  primary: '#d4af37', // Gold
  secondary: '#111111', // Deep Black
  accent: '#f9e29d', // Light Gold
};

export const SERVICES: Service[] = [
  {
    id: 'weddings',
    title: 'Grand Weddings',
    description: 'Transform your special day into a royal celebration in our sprawling lush green lawns.',
    icon: '💍',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional settings for seminars, product launches, and company annual days.',
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'parties',
    title: 'Private Parties',
    description: 'Perfect ambiance for birthday parties, anniversaries, and family get-togethers.',
    icon: '🎉',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200'
  }
];

export const AMENITIES: Amenity[] = [
  { name: 'Spacious Lawn', description: 'Over 50,000 sq. ft. of manicured grass.', icon: '🌳' },
  { name: 'Luxury Banquet', description: 'Fully air-conditioned indoor hall for 500+ guests.', icon: '🏛️' },
  { name: 'Ample Parking', description: 'Dedicated parking space for up to 200 vehicles.', icon: '🚗' },
  { name: 'Catering Area', description: 'Hygienic and dedicated kitchen/buffet spaces.', icon: '🍽️' },
  { name: 'Changing Rooms', description: 'VIP air-conditioned suites for the bride and groom.', icon: '🛏️' },
  { name: 'Power Backup', description: 'Heavy-duty generators for uninterrupted celebrations.', icon: '⚡' }
];

export const GALLERY: GalleryItem[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', category: 'Wedding' },
  { id: 2, url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800', category: 'Reception' },
  { id: 3, url: 'https://images.unsplash.com/photo-1470753937643-efad931202a9?auto=format&fit=crop&q=80&w=800', category: 'Corporate' },
  { id: 4, url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', category: 'Party' },
  { id: 5, url: 'https://images.unsplash.com/photo-1546190255-451a91afc548?auto=format&fit=crop&q=80&w=800', category: 'Wedding' },
  { id: 6, url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800', category: 'Party' },
];
