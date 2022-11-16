import React, {useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

import SeatBooking from "../../components/DarulEkama/SeatBooking";
import Layout from '../../layouts/Layout';
import api from "../api/api"
import { getSession, useSession } from 'next-auth/react'
import { useState } from "react";

const SeatbookingPage = (props) => {

    const {data:session, status} = useSession()
    const madrasha_slug =  session?.user.madrasha_slug



    const [roomList, setRoomList] = useState('')
    const [buildingId, setBuildingId] = useState('')

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    //on building selection get room list
    const getRoomList = async(e) => {
        e.preventDefault()
        const building = e.target.value
        setBuildingId(building)
        // setBuildingValue(building)
        const roomList = await api.get(`/settings/${madrasha_slug}/room/${building}/`)
        const room_list = roomList.data
        setRoomList(room_list)
    }


    return (
        <div>
            <SeatBooking
                buildings={props.buidlings}
                getRoomList={getRoomList}
                room_list={roomList}
                building_id={buildingId}
            />
            
        </div>
    )
};

//get required for seatbooking
export const getServerSideProps = async ({ req }) => {
    
    const session = await getSession({ req });
    const madrasha_slug = session.user.madrasha_slug

    //get buildings
    const buildingList = await api.get(`/settings/${madrasha_slug}/building/`)
    const buidlings = buildingList.data



    return {
        props: {
            buidlings,
        }
    }
}



export default SeatbookingPage;


SeatbookingPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};