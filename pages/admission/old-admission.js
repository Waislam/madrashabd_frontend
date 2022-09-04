import Layout from '../../layouts/Layout';
import OldAdmission from "../../components/Admission/OldAdmission";

const OldAdmissionPage = () => {

    return (
        <div>
            <OldAdmission/>
        </div>
    )
};


export default OldAdmissionPage;


OldAdmissionPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};