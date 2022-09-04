import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './LoginPage.module.css'
import loginBackground from "../../public/assets/login/loginBackground.png";
import icon from '../../public/assets/login/icon.png'

import { getCsrfToken } from "next-auth/react"

// const LoginPage = ({ getCsrfToken }) => {
//     return (
//         <>
//             <div id="loginSection">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-8 col-lg-8 col-xl-8 mb-4 mt-4">
//                             <div className={styles.loginImage}>
//                                 <Image src={loginBackground} alt="" style={{ borderRadius: 10 }} className="img-responsive" />
//                             </div>
//                         </div>
//                         <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4 mt-4">
//                             <div className={styles.loginFormWrap}>
//                                 <div className={styles.loginInfo}>
//                                     <div className={`${styles.loginLogo}`}>
//                                         <Image src={icon} alt="" className="img-responsive" width={100} height={100} />
//                                     </div>
//                                     <h4 className={`${styles.loginTitle} mt-3`}>Welcome to</h4>
//                                     <h4 className={`${styles.logoSubtitle}`}>Ikhwanbd Management Software</h4>
//                                 </div>
//                                 <div className={styles.loginForm}>
//                                     {/* <form action="#">
//                                         <input type="text" className="form-control mb-3 " placeholder="User Name"/>
//                                         <input type="text" className="form-control mb-3" placeholder="User Password"/>
//                                         <div className="d-grid gap-2 col mx-auto">
//                                             <button className={styles.loginButton} type="button">Login</button>
//                                         </div>
//                                     </form> */}

//                                     <form method="post" action="/api/auth/callback/credentials">
//                                         <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//                                         <label>
//                                             Username
//                                             <input name="username" type="text" />
//                                         </label>
//                                         <label>
//                                             Password
//                                             <input name="password" type="password" />
//                                         </label>
//                                         <button type="submit">Sign in</button>
//                                     </form>
//                                 </div>
//                                 <div className={styles.forgetPassword}>
//                                     <div className="text-center mb-2">
//                                         <Link href="/">Forget username</Link>
//                                     </div>
//                                     <div className="text-center">
//                                         <Link href="/">Forget Password</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// };

// export default LoginPage;

// export async function getServerSideProps(context) {
//     return {
//       props: {
//         csrfToken: await getCsrfToken(context),
//       },
//     }
//   }


// import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken }) {
  return (

    // <>
    //         <div id="loginSection">
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="col-md-8 col-lg-8 col-xl-8 mb-4 mt-4">
    //                         <div className={styles.loginImage}>
    //                             <Image src={loginBackground} alt="" style={{ borderRadius: 10 }} className="img-responsive" />
    //                         </div>
    //                     </div>
    //                     <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4 mt-4">
    //                         <div className={styles.loginFormWrap}>
    //                             <div className={styles.loginInfo}>
    //                                 <div className={`${styles.loginLogo}`}>
    //                                     <Image src={icon} alt="" className="img-responsive" width={100} height={100} />
    //                                 </div>
    //                                 <h4 className={`${styles.loginTitle} mt-3`}>Welcome to</h4>
    //                                 <h4 className={`${styles.logoSubtitle}`}>Ikhwanbd Management Software</h4>
    //                             </div>
    //                             <div className={styles.loginForm}>
    //                                 {/* <form action="#">
    //                                     <input type="text" className="form-control mb-3 " placeholder="User Name"/>
    //                                     <input type="text" className="form-control mb-3" placeholder="User Password"/>
    //                                     <div className="d-grid gap-2 col mx-auto">
    //                                         <button className={styles.loginButton} type="button">Login</button>
    //                                     </div>
    //                                 </form> */}

    //                                 <form method="post" action="/api/auth/callback/credentials">
    //                                     <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
    //                                     <label>
    //                                         Username
    //                                         <input name="username" type="text" />
    //                                     </label>
    //                                     <label>
    //                                         Password
    //                                         <input name="password" type="password" />
    //                                     </label>
    //                                     <button type="submit">Sign in</button>
    //                                 </form>
    //                             </div>
    //                             <div className={styles.forgetPassword}>
    //                                 <div className="text-center mb-2">
    //                                     <Link href="/">Forget username</Link>
    //                                 </div>
    //                                 <div className="text-center">
    //                                     <Link href="/">Forget Password</Link>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    

    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}