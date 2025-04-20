import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace with DB call
        if (
          credentials.email === "www.akashgupta45@gmail.com" &&
          credentials.password === "1234"
        ) {
          return { id: 1, name: "Admin", email: "www.akashgupta45@gmail.com", role: "admin" }
        }
        return null
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
  },
  pages: {
    signIn: "/login",
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
