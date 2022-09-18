import Nigranidetail from "../../components/DarulEkama/Nigranidetail";
import Layout from '../../layouts/Layout';

const NigranidetailPage = () => {

    return (
        <div>
            <Nigranidetail/>
        </div>
    )
};


export default NigranidetailPage;


NigranidetailPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};