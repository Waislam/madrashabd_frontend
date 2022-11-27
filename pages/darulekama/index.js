import React, {useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

import DarulEkama from "../../components/DarulEkama/DarulEkam";
import Layout from '../../layouts/Layout';
import {getSession} from "next-auth/react";
import api from "../api/api";


const DarulEkamaPage = (props) => {
    // console.log(props.distributedseat)
    const distributedSeatList = props.distributedseat;

    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    return (
        <div>
            <DarulEkama
                distributed_seatList={distributedSeatList}
            />
        </div>
    )
};

export const getServerSideProps = async ({req}) => {

    const session = await getSession({req});
    // console.log("session: ", session.user?.madrasha_slug)
    const madrasha_slug = session.user?.madrasha_slug;

    const distributedSeatList = await api.get(`/darul-ekama/${madrasha_slug}/seat-booking/`);
    const distributedseat = distributedSeatList.data;

    return {
        props: {
            distributedseat
        }
    }
};

export default DarulEkamaPage;


DarulEkamaPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};