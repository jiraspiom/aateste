import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'your best email',
        },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        // const user = await axios.post(`https://localhost:7280/api/user/login`, {
        //   email: credentials?.email,
        //   password: credentials?.password,
        // })
        // if (user) {
        //   console.log('teste: ', user.data)
        //   return { ...user.data, jwt: user.data.token }
        // } else {
        //   return null
        // }
        const user = {
          id: '1',
          name: 'J Smith',
          email: 'email@email.com',
          password: '123',
        }

        if (
          user &&
          user?.email === credentials?.email &&
          user?.password === credentials?.password
        ) {
          return user
        }
        return null
      },
    }),
  ],
  // pages: {
  //   //signIn: '/auth/signin',
  //   // signOut: '/auth/signout',
  //   // error: '/auth/error',
  //   // verifyRequest: '/auth/verify-request',
  //   // newUser: '/auth/new-user'
  // },
}
