import React, {useContext} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import AuthContext from '../context/AuthContext'

export default function Home() {
	const { user, login } = useContext(AuthContext)
	console.log(user)

	const handleLogin = () => {
		// let username = 'kminchelle'
    	// let password = '0lelplR'

		let username = '01714014631'
    	let password = 'mh123456'

		login(username, password)
	}

	return (
		<>
			<p className='text-thin'>
				MH Masuk
			</p>

			<button onClick={handleLogin}>
				Login
			</button>
		</>
	)
}
