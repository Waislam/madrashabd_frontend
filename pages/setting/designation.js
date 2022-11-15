import axios from "axios";
import api, {BASE_URL} from "../../pages/api/api"
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

// Setting Component
import Designation from "../../components/Setting/Designation"
import Layout from "../../components/Layout/Layout";
//Modals import
import DesignationUpdateModal from "../../components/Setting/Modals/DesignationUpdateModal"


const DesignationPage = () => {

    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    const [showPutForm, setShowPutForm] = useState(false);
    const [designationOldData, setDesignationOldData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [departmentList, setDepartmentList] = useState(null);

    // Department List collection
    const getDepartmentList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/${session.user?.madrasha_slug}/department/`);
        const departments = list.data;
        setDepartmentList(departments)
    };

    useEffect(() => {
        getDepartmentList()
    }, []);


    //handle put request
    const handlePutRequest = async (e, designationId) => {
        setLoader(true);
        e.preventDefault();
        const list = await axios.get(`${BASE_URL}/settings/designation/detail/${designationId}/`);
        const designationData = list.data;
        setDesignationOldData(designationData);
        setLoader(false);
        setShowPutForm(true)
    };

    return (
        <>
            <Designation
                handlePutRequest={handlePutRequest}
                departmentList={departmentList}
            />

            {loader ? <h1></h1> :
                <DesignationUpdateModal
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    designationolddata={designationOldData}
                    departmentList={departmentList}
                >
                </DesignationUpdateModal>
            }
        </>
    )
};

export default DesignationPage;

DesignationPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
};