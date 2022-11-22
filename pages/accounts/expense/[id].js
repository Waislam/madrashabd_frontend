import Layout from "../../../components/Layout/Layout";

const ExpenseDetailPage = () => {
    return (
        <div>
            <h3>Hello</h3>
        </div>
    )
};

export default ExpenseDetailPage;


ExpenseDetailPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};