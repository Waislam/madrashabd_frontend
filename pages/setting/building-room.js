import React, {useEffect, useState} from "react";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/router";


import BuildingRoom from '../../components/Setting/Building/BuildingRoom'
import AddBuildingRoomModal from '../../components/Setting/Building/Modals/AddBuildingRoomModal'
import UpdateBuildingRoomModal from '../../components/Setting/Building/Modals/UpdateBuildingRoomModal'
import Layout from "../../components/Layout/Layout";
import api from "../api/api";

const BuildingRoomPage = (props) => {

    const router = useRouter();
    const {data: session, status} = useSession();

    // BuildingRoomModal
    const [isLoading, setLoading] = useState(null);
    const [buildingList, setBuildingList] = useState(null);
    const [addBuildingRoomModal, setAddBuildingRoomModal] = useState(false);

    const [updateRoomModal, setRoomModal] = useState(false);
    const [roomOldData, setRoomOldData] = useState(null);


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

    // update Building Room
    const handleUpdateRoomModal = async (id) => {
        getBuildingList();
        setLoading(true);
        const list = await api.get(`settings/room/detail/${id}/`);
        const data = list.data;
        setRoomOldData(data);
        setLoading(false);
        setRoomModal(true)
    };


    return (
        <>
            <BuildingRoom
                building_room_list={props.building_room_list}
                handleAddBuildingRoomModal={handleAddBuildingRoomModal}
                handleUpdateRoomModal={handleUpdateRoomModal}
            />

            <AddBuildingRoomModal
                buildingList={buildingList}
                session_data={props.session_data}
                show={addBuildingRoomModal}
                onHide={() => setAddBuildingRoomModal(false)}
            />

            {isLoading ? " " :
                <UpdateBuildingRoomModal
                    buildingList={buildingList}
                    show={updateRoomModal}
                    onHide={() => setRoomModal(false)}
                    room_old_data={roomOldData}
                />
            }
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