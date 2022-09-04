import Layout from '../../layouts/Layout';
import Admission from "../../components/Admission/Admission";

const AdmissionPage = () => {

    return (
        <div>
            <Admission/>
        </div>
    )
};


export default AdmissionPage;


AdmissionPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};