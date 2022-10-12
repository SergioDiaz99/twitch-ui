import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const githubId: string | any = process.env.GITHUB_ID

const githubSecret: string | any = process.env.GITHUB_SECRET
const googleId: string | any = process.env.GOOGLE_CLIENT_ID
const googleSecret: string | any = process.env.GOOGLE_CLIENT_SECRET

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
    GoogleProvider({
        clientId: googleId,
        clientSecret: googleSecret,
    }),
    // ...add more providers here
  ],
  secret: "process.env.NEXT_PUBLIC_SECRET",
}
export default NextAuth(authOptions)