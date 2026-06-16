import type { RootState } from '@/app/store/store';
import { createSelector } from '@reduxjs/toolkit';

const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectTempId = (state: RootState) => state.user.tempId;

export const selectUser = createSelector([selectCurrentUser], (user) =>
  user
    ? {
        ...user,
        mainAvatar: user?.avatars?.filter((avatar) => avatar.isDefault)[0],
      }
    : user
);

export const selectUserInterests = createSelector(
  [selectCurrentUser],
  (user) => user?.interests || []
);

export const selectUserId = createSelector(
  (state: RootState) => state.user.currentUser?.id,
  (state: RootState) => state.user.tempId,
  (realId, tempId) => realId ?? tempId
);
