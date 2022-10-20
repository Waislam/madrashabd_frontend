import Layout from '../../layouts/Layout';
import OldAdmission from "../../components/Admission/OldAdmission";
import { getSession } from 'next-auth/react';
import { getClassList, getDepartmentList, getGroupList, getSessionList, getShiftList } from '../api/settings_api';

const OldAdmissionPage = ({departmentList, classes, groups, sessionList, shifts}) => {
    const studentData = {departmentList, classes, groups, sessionList, shifts};
    
    return (
        <div>
            <OldAdmission
                studentData={studentData}
            />
        </div>
    )
};


export default OldAdmissionPage;


OldAdmissionPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};

export async function getServerSideProps({req}) {
    const session = await getSession({req});
    const madrasha_slug =session?.user.madrasha_slug;

    // Fetching student dat from api
    const departmentList = await getDepartmentList(madrasha_slug).then(data => data);
    const classes = await getClassList(madrasha_slug).then(data => data);
    const groups = await getGroupList(madrasha_slug).then(data => data);
    const sessionList = await getSessionList(madrasha_slug).then(data => data);
    const shifts = await getShiftList(madrasha_slug).then(data => data);

    return {
        props: {
            departmentList,
            classes,
            groups,
            sessionList,
            shifts
        }
    }
}
