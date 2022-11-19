import React, {useEffect, useState} from "react";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/router";


import BuildingRoom from '../../components/Setting/Building/BuildingRoom'
import AddBuildingRoomModal from '../../components/Setting/Building/Modals/AddBuildingRoomModal'
import Layout from "../../components/Layout/Layout";
import api from "../api/api";

const BuildingRoomPage = (props) => {

    const router = useRouter();
    const {data: session, status} = useSession();

    // BuildingRoomModal
    const [isLoading, setLoading] = useState(null);
    const [addBuildingRoomModal, setAddBuildingRoomModal] = useState(false);
    const [updateBuildingRoomModal, setBuildingRoomModal] = useState(false);
    const [buildingRoomOldData, setBuildingRoomOldData] = useState(null);
    const [buildingList, setBuildingList] = useState(null);


    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    //get building list
    const getBuildingList = async () => {
        const list = await api.get(`/settings/${props.session_data.user?.madrasha_slug}/building/`);
        const buildingListData = list.data;
        setBuildingList(buildingListData)
    };

    const handleAddBuildingRoomModal = () => {
        getBuildingList();
        setAddBuildingRoomModal(true);

    };


    return (
        <>
            <BuildingRoom
                building_room_list={props.building_room_list}
                handleAddBuildingRoomModal={handleAddBuildingRoomModal}
            />

            <AddBuildingRoomModal
                buildingList={buildingList}
                session_data={props.session_data}
                show={addBuildingRoomModal}
                onHide={() => setAddBuildingRoomModal(false)}
            />
        </>
    )
};

export async function getServerSideProps({req}) {

    const session_data = await getSession({req});
    const res = await api.get(`/settings/${session_data.user?.madrasha_slug}/room/`);
    const building_room_list = res.data;

    return {
        props: {
            building_room_list,
            session_data
        }
    }
}

export default BuildingRoomPage;

BuildingRoomPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
};