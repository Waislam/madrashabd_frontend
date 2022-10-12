import {createContext, useState, useEffect} from 'react'
import Cookies from 'js-cookie'

import api from '../pages/api/api'


const AuthContext = createContext({
    user: null,
    login: () => {
    },
    logout: () => {
    },
    authReady: false
})

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // init netlify identity connection
        // fetch('https://dummyjson.com/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({

        //         username: 'kminchelle',
        //         password: '0lelplR',
        //         // expiresInMins: 60, // optional
        //     })
        // })
        //     .then(res => res.json())
        //     .then((data) => {
        //         // console.log(data)
        //         setUser(data)
        //     });

        async function loadUserFromCookies() {
            const token = Cookies.get('token')
            console.log("loadUserFromCookies(): token", token)
            // const user_info = Cookies.get('userInfo')

            if (token) {
                // api.defaults.headers.Authorization = `Token ${token}`
                // const { data: user } = await api.get('users/me')
                // if (user) setUser(user);
            }
            setLoading(false)
        }

        loadUserFromCookies().then(() => {

        })

    }, [])


    const login = async (username, password) => {
        const {data} = await api.post('accounts/api-token-auth/', {
            username,
            password
        })

        if (data) {
            Cookies.set('token', data.token, {expires: 60})
            // Cookies.set('userInfo', data, {expires: 60})
            // api.defaults.headers.Authorization = `Token ${data.token}`
            // const { data: user } = await api.get('users/me')
            setUser(data)

        }
    }

    const context = {user, login}

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

// export const ProtectRoute = ({ children }) => {
//     const { isAuthenticated, isLoading } = useAuth();

//     if (isLoading || (!isAuthenticated && window.location.pathname !== '/login')) {
//         return <LoadingScreen />;
//     }
//     return children;
// };