
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  category: 'Wedding' | 'Reception' | 'Corporate' | 'Party';
}

export interface Amenity {
  name: string;
  description: string;
  icon: string;
}

export enum MessageRole {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}
