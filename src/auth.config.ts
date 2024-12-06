import type { NextAuthConfig } from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Google from "next-auth/providers/google";
import client from "./lib/mongo";
 
// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [Google],
    callbacks: {
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth;
        },
    },
} satisfies NextAuthConfig