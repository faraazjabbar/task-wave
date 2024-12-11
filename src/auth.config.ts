import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google";
 
// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [Google],
    secret: process.env.AUTH_SECRET,
    callbacks: {
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth;
        },
        jwt({ token, user }) {
            if (user) { // User is available during sign-in
              token.id = user.id
            }
            return token
          },
          session({ session, token }) {
            session.user.id = token.id as string
            return session
          },
    },
} satisfies NextAuthConfig