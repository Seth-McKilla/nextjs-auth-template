import NextAuth, { AuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";

import clientPromise from "@/lib/mongodb/client";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.MONGODB_AUTH_DB_NAME!,
  }),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER!,
      from: process.env.EMAIL_FROM!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/signin",
  },
};

export default NextAuth(authOptions);
