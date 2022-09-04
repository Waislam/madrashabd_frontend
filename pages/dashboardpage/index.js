import Layout from "../../components/Layout/Layout";

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard page</h1>
        </div>
    )
}

export default DashboardPage

DashboardPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}