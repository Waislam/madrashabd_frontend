import {useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import axios from "axios";
import api, {BASE_URL} from "../../pages/api/api"

// Setting Component
import Groups from "../../components/Setting/Groups"
import Layout from "../../components/Layout/Layout";
//Modals immport
import GroupUdpateModal from "../../components/Setting/Modals/GroupUpdateModal"


const GroupsPage = () => {

    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    const [showPutForm, setShowPutForm] = useState(false);
    const [groupOldData, setGroupOldData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [departmentList, setDepartmentList] = useState(null);
    const [classList, setClassList] = useState(null);

    //get class and department list
    const getDepartmentList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/${session?.user?.madrasha_slug}/department/`);
        const departments = list.data;
        setDepartmentList(departments)
    };
    const getClassList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/${session?.user?.madrasha_slug}/classes/`);
        const classes = list.data;
        setClassList(classes)

    };

    useEffect(() => {
        getDepartmentList();
        getClassList()
    }, []);

    //handle put request
    const handlePutRequest = async (e, groupId) => {
        setLoader(true);
        e.preventDefault();
        const list = await axios.get(`${BASE_URL}/settings/group/detail/${groupId}/`);
        const groupData = list.data;
        setGroupOldData(groupData);
        setLoader(false);
        setShowPutForm(true)
    };

    return (
        <>
            <Groups
                handlePutRequest={handlePutRequest}
                departmentList={departmentList}
                classList={classList}
            />
            {loader ? <h1></h1> :
                <GroupUdpateModal
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    departmentList={departmentList}
                    classList={classList}
                    groupolddata={groupOldData}
                >
                </GroupUdpateModal>
            }
        </>
    )
};

export default GroupsPage;

GroupsPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}