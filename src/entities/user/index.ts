export { userReducer, setUser, setLoading, setTempId } from './model/userSlice';
export {
  useGetUserQuery,
  useUpdateUserMutation,
  useUploadAvatarMutation,
  useUpdateAvatarMutation,
  useDeleteAvatarMutation,
  useUpdateInterestsMutation,
} from './api/userApi';
export {
  selectUser,
  selectUserInterests,
  selectUserId,
} from './model/selector';
export type { User, UserState } from './types';
