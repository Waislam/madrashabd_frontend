import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getCsrfToken } from "next-auth/react"
import axios from "axios"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
// export default async function auth(req, res) {
//   const providers = [
//     CredentialsProvider({
//         // The name to display on the sign in form (e.g. 'Sign in with...')
//         name: 'Credentials',
//         // The credentials is used to generate a suitable form on the sign in page.
//         // You can specify whatever fields you are expecting to be submitted.
//         // e.g. domain, username, password, 2FA token, etc.
//         // You can pass any HTML attribute to the <input> tag through the object.
//         credentials: {
//           username: { label: "Username", type: "text", placeholder: "jsmith" },
//           password: {  label: "Password", type: "password" }
//         },
//         async authorize(credentials, req) {
//           // You need to provide your own logic here that takes the credentials
//           // submitted and returns either a object representing a user or value
//           // that is false/null if the credentials are invalid.
//           // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//           // You can also use the `req` object to obtain additional parameters
//           // (i.e., the request IP address)
//           // const res = await fetch("/your/endpoint", {
//           //   method: 'POST',
//           //   body: JSON.stringify(credentials),
//           //   headers: { "Content-Type": "application/json" }
//           // })
//           // const user = await res.json()

//           // // If no error and we have user data, return it
//           // if (res.ok && user) {
//           //   return user
//           // }

//           const user = { "username": "fdsfds", "password": "fdsfdsf" }
//           // Return null if user data could not be retrieved
//           console.log("credentials", credentials)
//           return user
//         }
//       }),
//   ]

//   const isDefaultSigninPage =
//     req.method === "GET" && req.query.nextauth.includes("signin")

//   // Hide Sign-In with Ethereum from default sign page
//   if (isDefaultSigninPage) {
//     providers.pop()
//   }

//   return await NextAuth(req, res, {
//     // https://next-auth.js.org/configuration/providers/oauth
//     providers,
//     session: {
//       strategy: "jwt",
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//   })
// }



export default async function auth(req, res) {
    const providers = [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log("credentials", credentials)
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                  const res = await fetch("http://127.0.0.1:8000/accounts/api-token-auth/", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                  })

                  console.log("response", res)
                  const user = await res.json()
                  console.log('user', user)

                // If no error and we have user data, return it
                  if (res.ok && user) {
                    return user
                  }
                // Return null if user data could not be retrieved
                // return {
                //     id: 1,
                //     name: "J Smith",
                //     email: "jsmith@example.com",
                // }
                return null
            }
        })
    ]

    // const isDefaultSigninPage = req.method === "GET" && req.query.nextauth.includes("signin")

    // // Will hide the `GoogleProvider` when you visit `/api/auth/signin`
    // if (isDefaultSigninPage) providers.pop()

    return await NextAuth(req, res, {
        providers,
        pages: {
            signIn: '/login',
        }
    })
}



// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// import CredentialsProvider from "next-auth/providers/credentials"

// export default NextAuth({
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 username: {
//                     label: "Username",
//                     type: "text",
//                     placeholder: "jsmith",
//                 },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize() {
//                 return {
//                     id: 1,
//                     name: "J Smith",
//                     email: "jsmith@example.com",
//                     image: "https://i.pravatar.cc/150?u=jsmith@example.com",
//                 }
//             },
//         })

//     ],
// })