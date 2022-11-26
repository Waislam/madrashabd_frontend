import React, { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import KhabarDistribution from "../../components/Boarding/KhabarDistribution";
import { apiBaseUrl } from "next-auth/client/_utils";
import api from "../api/api"

const KhabarDistributionPage = (props) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    return (
        <>
            <KhabarDistribution 
            classList={props.madrasha_classList}/>
        </>
    )
};

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req })
    // console.log("session: ", session)
    const madrasha_slug = session?.user?.madrasha_slug

    //get class list
    const classList = await api.get(`/settings/${madrasha_slug}/classes/`)
    const madrasha_classList = classList.data

    return {
        props: {
            madrasha_classList,
        }
    }
}

export default KhabarDistributionPage;


KhabarDistributionPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};