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
    // console.log("session: ",session )
    const madrasha_slug = session?.user?.madrasha_slug;
    const madrasha_id = session?.user?.madrasha_id;

    const nigranList = props.nigranList;
    const [nigranaddModalShow, setNigranAddModalShow] = useState(false);
    const [buildingList, setBuildingList] = useState(null);
    const [buildingId, setBuildingId] = useState('');
    const [roomList, setRoomList] = useState('');
    const [madrashaClassList, setMadrashaClassList] = useState(null);


    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    //get building list
    const getBuildingList = async () => {
        const list = await api.get(`/settings/${madrasha_slug}/building/`);
        const buildingListData = list.data;
        setBuildingList(buildingListData)
    };

    //on building selection get room list
    const getRoomList = async (e) => {
        e?.preventDefault();
        const building = e?.target?.value;
        setBuildingId(building);
        // setBuildingValue(building)
        const roomList = await api.get(`/settings/${madrasha_slug}/room/${building}/`);
        const room_list = roomList.data;
        setRoomList(room_list)
    };

    // get madrasha class list
    const getClassList = async () => {
        const classList = await api.get(`/settings/${madrasha_slug}/classes/`);
        const classlistData = classList.data;
        setMadrashaClassList(classlistData)
    };

    //handlePostmodal 
    const handlePostmodal = (e) => {
        e.preventDefault();
        getBuildingList();
        getRoomList();
        getClassList();
        setNigranAddModalShow(true)
    };

    return (
        <div>
            <Nigranidetail
                nigran_list={nigranList}
                handlePostRequest={handlePostmodal}
                nigranaddModalShow={nigranaddModalShow}
                setNigranAddModalShow={setNigranAddModalShow}
                building_list={buildingList}
                building_id={buildingId}
                getRoomList={getRoomList}
                room_list={roomList}
                madrasha_class_list={madrashaClassList}
                madrasha_id={madrasha_id}
                madrasha_slug={madrasha_slug}
            />
        </div>
    )
};

//handle nigran get request
export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    // console.log('session: ', session.user.madrasha_slug)
    const madrasha_slug = session.user.madrasha_slug;

    //get nigran list
    const list = await api.get(`/darul-ekama/${madrasha_slug}/darul-ekama-nigrani/`);
    const nigranList = list.data;

    return {
        props: {
            nigranList
        }
    }
};


export default NigranidetailPage;


NigranidetailPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};