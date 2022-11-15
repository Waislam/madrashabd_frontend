import React, {useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

import SeatBooking from "../../components/DarulEkama/SeatBooking";
import Layout from '../../layouts/Layout';

const SeatbookingPage = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    return (
        <div>
            <SeatBooking/>
        </div>
    )
};


export default SeatbookingPage;


SeatbookingPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};