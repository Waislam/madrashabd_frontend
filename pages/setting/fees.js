import React, {useEffect, useState} from "react";
import axios from "axios";
import api, {BASE_URL} from "../../pages/api/api"

import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

// Shift component
import Fees from "../../components/Setting/Fees"
import Layout from "../../components/Layout/Layout";

// models
import FeesUpdateModal from "../../components/Setting/Modals/FeesUpdateModal"

const FeesPage = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    const [showPutForm, setShowPutForm] = useState(false);
    const [feesOldData, setFeesOldData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [departmentList, setDepartmentList] = useState(null);
    const [classList, setClassList] = useState(null);

    //get class and department list
    const getDepartmentList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/${session.user?.madrasha_slug}/department/`);
        const departments = list.data;
        setDepartmentList(departments)
    };
    const getClassList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/classes/`);
        const classes = list.data;
        setClassList(classes)

    };

    useEffect(() => {
        getDepartmentList();
        getClassList()
    }, []);

    //handle put request
    const handlePutRequest = async (e, feesId) => {
        setLoader(true);
        e.preventDefault();
        const list = await axios.get(`${BASE_URL}/settings/fees/detail/${feesId}/`);
        const feesData = list.data;
        setFeesOldData(feesData);
        setLoader(false);
        setShowPutForm(true)
    };

    return (
        <>
            <Fees
                handlePutRequest={handlePutRequest}
                departmentList={departmentList}
                classList={classList}
            />

            {loader ? <h1></h1> :
                <FeesUpdateModal
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    departmentList={departmentList}
                    classList={classList}
                    feesOldData={feesOldData}
                >
                </FeesUpdateModal>
            }
        </>
    )
};

export default FeesPage;

FeesPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}