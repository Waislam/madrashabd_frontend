import React, {useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import axios from "axios";
import api, {BASE_URL} from "../../pages/api/api"

// Setting Component
import Department from "../../components/Setting/Department"
import Layout from "../../components/Layout/Layout";

//import Modals
import DepartmentUpdateModal from "../../components/Setting/Modals/DepartmentUpdateModal"


const DepartmentPage = () => {

    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    const [showPutForm, setShowPutForm] = useState(false);
    const [departmentUpdateAbleData, setDepartmentUpdateAbleData] = useState(null);
    const [loader, setLoader] = useState(false);


    //handle put request
    const handlePutRequest = async (e, departmentId) => {
        setLoader(true);
        e.preventDefault();
        const list = await axios.get(`${BASE_URL}/settings/department/detail/${departmentId}/`);
        const departmentData = list.data;
        setDepartmentUpdateAbleData(departmentData);
        setLoader(false);
        setShowPutForm(true)
    };

    return (
        <>
            <Department
                handleputrequest={handlePutRequest}
            />
            {loader ? <h1></h1> :
                <DepartmentUpdateModal
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    departmentUpdateAbleData={departmentUpdateAbleData}
                >
                </DepartmentUpdateModal>
            }
        </>
    )
}

export default DepartmentPage;

DepartmentPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}