export interface Avatar {
  avatarId: string;
  avatarUri: string;
  isActive: boolean;
  isDefault: boolean;
}

export interface User {
  id: string;
  displayName: string;
  bio: string;
  birthDate: string;
  avatars?: Avatar[];
  interests: string[];
  role?: 'user' | 'admin';
}

export interface UserState {
  currentUser: User | null;
  isLoading: boolean;
}
