import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import api, {BASE_URL} from '../api'
import Cookies from "js-cookie";


let mainUser
export default async function auth(req, res) {
    const providers = [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: "Username", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const res = await fetch(`${BASE_URL}accounts/api-token-auth/`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: {"Content-Type": "application/json"}
                })
                const user = await res.json()
                // If no error and we have user data, return it
                if (res.ok && user) {
                    mainUser = user
                    // setCookie(res, JSON.stringify(mainUser))
                    Cookies.set('mainUserCookie', mainUser, {expires: 60})
                    return user
                }

                return null
            }
        })
    ]

    const someCookie = req.cookies["token"]
    const mainUserCookie = req.cookies["mainUserCookie"]


    return await NextAuth(req, res, {
        callbacks: {
            session({session, token}) {
                session.someCookie = someCookie
                session.useInfo = mainUser
                // console.log(session)

                return session
            }
        },
        providers,
        pages: {
            signIn: '/login',
        }
    })
}
