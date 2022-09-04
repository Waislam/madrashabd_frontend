import Layout from "../../components/Layout/Layout";
import KhabarDistribution from "../../components/Boarding/KhabarDistribution";

const KhabarDistributionPage = () => {
    return (
        <>
            <KhabarDistribution/>
        </>
    )
};

export default KhabarDistributionPage;


KhabarDistributionPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};