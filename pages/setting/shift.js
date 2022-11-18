import React, {useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import axios from "axios";
import api, {BASE_URL} from "../../pages/api/api"

// Shift component
import Shift from "../../components/Setting/Shift"
import Layout from "../../components/Layout/Layout";
import ShiftUpdateModal from "../../components/Setting/Modals/ShiftUpdateModal"

const ShiftPage = () => {

    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [showPutForm, setShowPutForm] = useState(false);
    const [shiftOldData, setShiftOldData] = useState(null);
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
    const handlePutRequest = async (e, shiftId) => {
        setLoader(true);
        e.preventDefault();
        const list = await axios.get(`${BASE_URL}/settings/shift/detail/${shiftId}/`);
        const shiftData = list.data;
        setShiftOldData(shiftData);
        setLoader(false);
        setShowPutForm(true)
    };

    return (
        <>
            <Shift
                departmentList={departmentList}
                classList={classList}
                handlePutRequest={handlePutRequest}
            />

            {loader ? <h1></h1> :
                <ShiftUpdateModal
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    departmentList={departmentList}
                    classList={classList}
                    shiftolddata={shiftOldData}
                >
                </ShiftUpdateModal>
            }
        </>
    )
}

export default ShiftPage;

ShiftPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}