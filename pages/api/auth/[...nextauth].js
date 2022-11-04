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
                    return {
                        'user_id': user.user_id,
                        "madrasha_id": user.user_madrasha_id,
                        "madrasha_slug": user.user_madrasha_slug,
                        "token": user.token,
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
                    params.token.user_id = params.user.user_id;
                    params.token.token = params.user.token;
                    params.token.madrasha_slug = params.user.madrasha_slug;
                    params.token.madrasha_name = params.user.madrasha_name;
                    params.token.madrasha_id = params.user.madrasha_id;
                }
                // return final_token
                return params.token;
            },
            session: async ({session, token}) => {
                if (session?.user) {
                    session.user.user_id = token.user_id;
                    session.user.role = token.role;
                    session.user.token = token.token;
                    session.user.madrasha_slug = token.madrasha_slug;
                    session.user.madrasha_name = token.madrasha_name;
                    session.user.madrasha_id = token.madrasha_id;
                }
                console.log('session: ', session)
                return session;
            },
        },
        providers,
        pages: {
            signIn: '/login',
        }
    })
}
