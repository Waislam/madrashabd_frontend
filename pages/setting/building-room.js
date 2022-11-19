import React, {useEffect, useState} from "react";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/router";


import BuildingRoom from '../../components/Setting/Building/BuildingRoom'
import Layout from "../../components/Layout/Layout";
import api from "../api/api";

const BuildingRoomPage = (props) => {

    const router = useRouter();
    const {data: session, status} = useSession();

    // BuildingRoomModal
    const [isLoading, setLoading] = useState(null);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    return (
        <>
            <BuildingRoom
                building_room_list={props.building_room_list}
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