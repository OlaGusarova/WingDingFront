export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  price: number;
  isFree: boolean;
  category: 'concert' | 'exhibition' | 'sport' | 'education';
}

export interface User {
  id: string;
  displayName: string;
  bio: string;
  birthDate: string;
  avatars?: string[];
  interests: string[];
  role?: 'user' | 'admin';
}
