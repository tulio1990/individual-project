import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/lib/db";
import bcrypt from "bcryptjs";
import { UserSession } from "@/lib/types";
import { z } from "zod";

async function getUser(email: string): Promise<UserSession | null> {
  try {
    const userFound = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    return {
      id: userFound?.id as string,
      name: userFound?.name as string,
      email: userFound?.email as string,
      password: userFound?.password as string,
      image: userFound?.imageProfile as string,
    };
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const authOptions: NextAuthOptions  = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(8) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUser(email);
          if (!user || user.password === undefined) throw new Error('No user found');

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) throw new Error('Wrong password')
          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  }
};