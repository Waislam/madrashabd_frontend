import React, {useEffect, useState} from "react";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/router";


import Building from '../../components/Setting/Building'
import AddBuildingModal from "../../components/Setting/Modals/AddBuildingModal"
import UpdateBuildingModal from "../../components/Setting/Modals/UpdateBuildingModal"
import Layout from "../../components/Layout/Layout";
import api from "../api/api";

const BuildingPage = (props) => {

    const router = useRouter();
    const {data: session, status} = useSession();

    // BuildingModal
    const [isLoading, setLoading] = useState(null);
    const [addBuildingModal, setBuildingModal] = useState(false);
    const [updateBuildingModal, setUpdateBuildingModal] = useState(false);
    const [buildingOldData, setBuildingOldData] = useState(null);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    // Add Building
    const handleBuildingModal = () => {
        setBuildingModal(true)
    };


    // update Building
    const handleUpdateBuildingModal = async (id) => {
        setLoading(true);
        const list = await api.get(`settings/building/detail/${id}/`);
        const data = list.data;
        setBuildingOldData(data);
        setLoading(false);
        setUpdateBuildingModal(true)
    };


    return (
        <>
            <Building
                building={props.building_list}
                handleBuildingModal={handleBuildingModal}
                handleUpdateBuildingModal={handleUpdateBuildingModal}
            />

            <AddBuildingModal
                session_data={props.session_data}
                show={addBuildingModal}
                onHide={() => setBuildingModal(false)}
            />


            {isLoading ? " " :
                <UpdateBuildingModal
                    show={updateBuildingModal}
                    onHide={() => setUpdateBuildingModal(false)}
                    building_old_data={buildingOldData}
                />
            }
        </>
    )
};

export async function getServerSideProps({req}) {

    const session_data = await getSession({req});
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