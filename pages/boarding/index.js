import React, { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import api, { BASE_URL } from "../api/api";

import Boarding from "../../components/Boarding/Boarding";
import UpdateBazarListModal from "../../components/Boarding/Modals/UpdateBazarListModal";
import Layout from "../../components/Layout/Layout";


const BoardingPage = (props) => {
    const router = useRouter();
    const { data: session, status } = useSession();
    // console.log("session data: ", session)
    const madrasha_slug = session?.user?.madrasha_slug
    const madrasha_id = session?.user?.madrasha_id



    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [addBazarListModal, setBazarListModal] = useState(false);
    const [loader, setLoader] = useState(false)
    const [bazarid, setBazarId] = useState('')
    const [editModalShow, setEditModalShow] = useState(false)
    const [bazarOldData, setBazarOldData] = useState(null)

    // Post Request
    const handleAddBazarListModal = () => {
        setBazarListModal(true)
    };

    //put request
    const handlePutRequest = async (e, obj_id) => {
        e.preventDefault()
        setBazarId(obj_id)
        //get bazar deails
        setLoader(true)
        const bazarDetails = await api.get(`/boarding/bazarlist/detail/${obj_id}/`)
        const bazarsingledata = bazarDetails.data.data
        setBazarOldData(bazarsingledata)
        setLoader(false)
        setEditModalShow(true)
    }


    return (
        <>
            <Boarding
                handleAddBazarListModal={handleAddBazarListModal}
                bazarlist={props.bazarlistdata}
                madrasha_slug={madrasha_slug}
                madrasha_id={madrasha_id}
                handlePutRequest={handlePutRequest}
            />
            {loader ? <h1></h1> :
                <UpdateBazarListModal
                    show={editModalShow}
                    onHide={() => setEditModalShow(false)}
                    bazar_old_data={bazarOldData}
                    bazarid={bazarid}
                    madrasha_id={madrasha_id}
                >
                </UpdateBazarListModal>
            }

        </>

    )
};

export const getServerSideProps = async ({ req }) => {

    const session = await getSession({ req })
    const madrasha_slug = session?.user?.madrasha_slug

    const bazarlist = await api.get(`/boarding/bazarlist/${madrasha_slug}/`)
    const bazarlistdata = bazarlist.data

    return {
        props: {
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