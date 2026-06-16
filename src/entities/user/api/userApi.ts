import { api } from '@/shared/api';
import { setUser } from '../model/userSlice';
import { User, Avatar } from '../types';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (id) => ({
        url: '/profiles',
        method: 'GET',
        params: {
          UserId: id,
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          //dispatch(setUser(data));
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
      providesTags: ['User'],
    }),
    updateUser: builder.mutation<
      User,
      Required<Pick<User, 'id'>> &
        Partial<
          Pick<User, 'id' | 'displayName' | 'bio' | 'birthDate' | 'interests'>
        >
    >({
      query: (data) => {
        const formData = new FormData();
        formData.append('Id', data.id);
        if (data.displayName !== undefined)
          formData.append('DisplayName', data.displayName);
        if (data.bio !== undefined) formData.append('Bio', data.bio);
        if (data.birthDate !== undefined)
          formData.append('BirthDate', data.birthDate);
        if (data.interests !== undefined && data.interests.length) {
          data.interests.forEach((interest) =>
            formData.append('Interests', interest)
          );
        }
        return {
          url: '/profiles',
          method: 'PUT',
          body: formData,
        };
      },
      invalidatesTags: ['User'],
    }),
    uploadAvatar: builder.mutation<void, FormData>({
      query: (body) => ({
        url: '/avatars',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    updateAvatar: builder.mutation<
      Avatar,
      Partial<User> & Omit<Avatar, 'avatarUri'>
    >({
      query: ({ id, ...rest }) => ({
        url: '/avatars',
        method: 'PUT',
        body: {
          userId: id,
          ...rest,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['User'],
    }),
    deleteAvatar: builder.mutation<
      void,
      Pick<User, 'id'> & Pick<Avatar, 'avatarId'>
    >({
      query: ({ id, ...rest }) => ({
        url: '/avatars',
        method: 'DELETE',
        body: {
          userId: id,
          ...rest,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['User'],
    }),
    updateInterests: builder.mutation<void, Pick<User, 'id' | 'interests'>>({
      query: ({ id, ...rest }) => ({
        url: '/profiles/interests',
        method: 'PUT',
        body: {
          userId: id,
          ...rest,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useUploadAvatarMutation,
  useUpdateAvatarMutation,
  useDeleteAvatarMutation,
  useUpdateInterestsMutation,
} = userApi;
