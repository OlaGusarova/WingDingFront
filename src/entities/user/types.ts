export interface User {
  id: string
  displayName: string
  bio: string
  birthDate: string
  avatars?: string[]
  interests: string[]
  role?: 'user' | 'admin'
}

export interface UserState {
  currentUser: User | null;
  isLoading: boolean;
}