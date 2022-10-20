import Layout from '../../layouts/Layout';
import OldAdmission from "../../components/Admission/OldAdmission";
import { getSession } from 'next-auth/react';
import { getDepartmentList } from '../api/settings_api';

const OldAdmissionPage = ({departmentList}) => {
    return (
        <div>
            <OldAdmission
                departmentList={departmentList}
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

    // Fetching data for department list
    const departmentList = await getDepartmentList(session?.user.madrasha_slug)
    .then(data => data);

    return {
      props: {departmentList}
    }
}
