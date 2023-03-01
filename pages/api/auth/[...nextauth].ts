import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

import clientPromise from "@/lib/mongodb/client";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.MONGODB_AUTH_DB_NAME!,
  }),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER!,
      from: process.env.EMAIL_FROM!,
    }),
  ],
};

export default NextAuth(authOptions);
