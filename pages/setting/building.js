import React, { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";


import Building from '../../components/Setting/Building'
import Layout from "../../components/Layout/Layout";
import api from "../api/api";

const BuildingPage = (props) => {

    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    return (
        <>
            <Building
                building={props.building_list}
            />
        </>
    )
};

export async function getServerSideProps({ req }) {

    const session_data = await getSession({ req });
    const res = await api.get(`/settings/${session_data.user?.madrasha_slug}/building/`);
    const building_list = res.data;

    return {
        props: {
            building_list,
            session_data
        }
    }
}

export default BuildingPage;

BuildingPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
};