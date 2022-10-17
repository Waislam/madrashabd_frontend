import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import api, {BASE_URL} from '../api'

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
                    // return user
                    console.log("user in next auth", user)
                    return {
                        'id': 45,
                        "madrasha_slug": user.user_madrasha_slug,
                        "token": "token data",
                        "role": "admin",
                        'madrasha_name': "amder madrasha"
                    }
                }
                return null
            }
        })
    ]

    // const someCookie = req.cookies["token"]
    // let mainUserCookie = req.cookies["mainUserCookie"]


    return await NextAuth(req, res, {
        callbacks: {
            jwt(params) {
                // update token
                if (params.user?.role) {
                    params.token.role = params.user.role;
                    params.token.id = params.user.id;
                    params.token.madrasha_slug = params.user.madrasha_slug;
                    params.token.madrasha_name = params.user.madrasha_name;
                }
                console.log("params", params)
                // return final_token
                return params.token;
            },
            session: async ({session, token}) => {
                if (session?.user) {
                    session.user.id = token.id;
                    session.user.role = token.role;
                    session.user.madrasha_slug = token.madrasha_slug;
                    session.user.madrasha_name = token.madrasha_name;
                }
                console.log('sesion: ', session)
                return session;
            },
        },
        providers,
        pages: {
            signIn: '/login',
        }
    })
}
