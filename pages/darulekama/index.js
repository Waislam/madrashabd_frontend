import DarulEkama from "../../components/DarulEkama/DarulEkam";
import Layout from '../../layouts/Layout';

const DarulEkamaPage = () => {

    return (
        <div>
            <DarulEkama/>
        </div>
    )
};


export default DarulEkamaPage;


DarulEkamaPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};