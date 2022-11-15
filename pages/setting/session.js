import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";

// third party
import {useSession} from "next-auth/react"
import {useForm} from "react-hook-form"

// api
import axios from "axios";
import api, {BASE_URL} from "../../pages/api/api"

// model
import Modal from "react-bootstrap/Modal";

// Setting Component
import Session from "../../components/Setting/Session"
import Layout from "../../components/Layout/Layout";

//import Modals
import SessionUpdateModal from "../../components/Setting/Modals/SessionUpdateModal"


const SessionPage = () => {

    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    const [showPutForm, setShowPutForm] = useState(false);
    const [sessionSettingOldData, setSessionSettingOldData] = useState();
    const [loader, setLoader] = useState(false);


    //handle put request
    const handlePutRequest = async (e, sessionsettingId) => {
        setLoader(true);
        e.preventDefault();
        const list = await axios.get(`${BASE_URL}/settings/session/detail/${sessionsettingId}/`);
        const sessionSettingData = list.data;
        setSessionSettingOldData(sessionSettingData);
        setLoader(false);
        setShowPutForm(true)
    };


    return (
        <>
            <Session
                handlePutRequest={handlePutRequest}
            />

            {loader ? <h1></h1> :
                <SessionUpdateModal
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    sessionsettingolddata={sessionSettingOldData}
                >
                </SessionUpdateModal>
            }
        </>
    )
};


export default SessionPage;

SessionPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}