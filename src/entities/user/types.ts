export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
}

export interface UserState {
  currentUser: User | null;
  isLoading: boolean;
}