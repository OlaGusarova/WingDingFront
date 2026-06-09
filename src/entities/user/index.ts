export { userReducer, setUser, setLoading } from './model/userSlice'
export { useGetUserQuery, useUpdateUserMutation, useUpdateAvatarMutation } from './api/userApi'
export { selectUser } from './model/selector'
export type { User, UserState } from './types'