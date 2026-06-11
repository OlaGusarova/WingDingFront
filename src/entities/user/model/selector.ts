import type { RootState } from '@/app/store/store';
import { createSelector } from '@reduxjs/toolkit';

const selectCurrentUser = (state: RootState) => state.user.currentUser;

export const selectUser = createSelector([selectCurrentUser], (user) => ({
  ...user,
  mainAvatar: user?.avatars?.filter((avatar) => avatar.isDefault)[0],
}));

export const selectUserInterests = createSelector(
  [selectCurrentUser],
  (user) => user?.interests || []
);
