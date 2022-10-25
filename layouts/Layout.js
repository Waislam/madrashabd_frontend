import { ToastContainer } from 'react-toastify';
import Header from '../layouts/Header/Header';

export default function Layout({children}) {
    return (
        <>
            <Header/>
            {children}
            <ToastContainer/>
        </>
    )
}