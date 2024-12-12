import { appApi } from "../../app/appApi";

export const authApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (query) => ({
        url: '/users/login',
        body: query,
        method: 'POST'
      })

    }),

    userSignUp: builder.mutation({

      query: (query) => ({
        url: '/users/signup',
        body: query,
        method: 'POST'
      })

    }),



    userLogOut: builder.mutation({
      query: (q) => ({
        url: '/users/logout',
        method: 'POST'
      }),
      invalidatesTags: ['User']
    })

  })
});


export const { useUserLoginMutation, useUserSignUpMutation, useUserLogOutMutation } = authApi;