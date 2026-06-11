export { userReducer, setUser, setLoading } from './model/userSlice';
export {
  useGetUserQuery,
  useUpdateUserMutation,
  useUploadAvatarMutation,
  useUpdateAvatarMutation,
  useDeleteAvatarMutation,
  useUpdateInterestsMutation,
} from './api/userApi';
export { selectUser, selectUserInterests } from './model/selector';
export type { User, UserState } from './types';
