import type { RootState } from '@/app/store/store'
import { createSelector } from '@reduxjs/toolkit'

const selectCurrentUser = (state: RootState) => state.user.currentUser

export const selectUser = createSelector(
  [selectCurrentUser],
  user => user
);