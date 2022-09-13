import Boarding from "../../components/Boarding/Boarding";
import Layout from "../../components/Layout/Layout";

const BoardingPage = () => {
    return (
        <>
            <Boarding/>
        </>
    )
};

export default BoardingPage;


BoardingPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};