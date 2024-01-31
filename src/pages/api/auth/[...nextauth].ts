import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { httpCliente } from '../../../http/routes/routes';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'login',

      credentials: {
        login: { label: 'login', type: 'text' },
        password: { label: 'password', type: 'text' },
      },

      async authorize(credentials) {
        if (!credentials?.login || !credentials.password) {
          return null;
        }
        try {
          return await httpCliente
            .post('/api/v1/auth', {
              login: credentials?.login,
              password: credentials?.password,
            })
            .then((res) => res.data)
            .catch((error) => error);
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async session({ session, token }) {
      return { ...session, ...token };
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },
  secret: 'U0VOSEFfTkVYVF9BVVRIX0ZST05UX0BfMjAyMw==',
};

export default NextAuth(authOptions);
