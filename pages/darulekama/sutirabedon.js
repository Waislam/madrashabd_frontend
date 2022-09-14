import SutirAbedon from "../../components/DarulEkama/SutirAbedon";
import Layout from '../../layouts/Layout';

const SutirAbedonPage = () => {

    return (
        <div>
           <SutirAbedon/>
        </div>
    )
};


export default SutirAbedonPage;


SutirAbedonPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};