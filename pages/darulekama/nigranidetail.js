import React, { useState, useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Nigranidetail from "../../components/DarulEkama/Nigranidetail";
import Layout from '../../layouts/Layout';
// import { apiBaseUrl } from "next-auth/client/_utils";
import api from "../api/api"

const NigranidetailPage = (props) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    const nigranList = props.nigranList
    const [nigranaddModalShow, setNigranAddModalShow] = useState(false)

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    //handlePostmodal 
    const handlePostmodal = () => {
        setNigranAddModalShow(true)
    }


    return (
        <div>
            <Nigranidetail
                nigran_list={nigranList}
                handlePostRequest={handlePostmodal}
                nigranaddModalShow={nigranaddModalShow}
                setNigranAddModalShow={setNigranAddModalShow}
            />
        </div>
    )
};

//handle nigran get request
export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req })
    // console.log('session: ', session.user.madrasha_slug)
    const madrasha_slug = session.user.madrasha_slug

    //get nigran list
    const list = await api.get(`/darul-ekama/${madrasha_slug}/darul-ekama-nigrani/`)
    const nigranList = list.data

    return {
        props: {
            nigranList
        }
    }
}


export default NigranidetailPage;


NigranidetailPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};