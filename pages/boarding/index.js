import React, { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import api, { BASE_URL } from "../api/api";

import Boarding from "../../components/Boarding/Boarding";
import AddBazarListModal from "../../components/Boarding/Modals/AddBazarListModal";
import Layout from "../../components/Layout/Layout";


const BoardingPage = (props) => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const madrasha_slug = session?.user?.madrasha_slug
    const madrasha_id = session?.user?.madrasha?.id

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [addBazarListModal, setBazarListModal] = useState(false);

    // Post Request
    const handleAddBazarListModal = () => {
        setBazarListModal(true)
    };


    return (
        <>
            <Boarding
                handleAddBazarListModal={handleAddBazarListModal}
                bazarlist={props.bazarlistdata}
            />

            <AddBazarListModal
                show={addBazarListModal}
                onHide={() => setBazarListModal(false)}
                madrasha_slug={madrasha_slug}
                madrasha_id={madrasha_id}
            />
        </>
    )
};

export const getServerSideProps = async ({ req }) => {

    const session = await getSession({ req })
    const madrasha_slug = session?.user?.madrasha_slug

    const bazarlist = await api.get(`/boarding/bazarlist/${madrasha_slug}/`)
    const bazarlistdata = bazarlist.data

    return{
        props:{
            bazarlistdata,
        }
    }
}


export default BoardingPage;


BoardingPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};