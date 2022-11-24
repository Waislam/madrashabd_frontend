import {BASE_URL} from "../../api/api";
import OtherIncomeDetail from '../../../components/Account/OtherIncome/OtherIncomeDetail'
import Layout from "../../../components/Layout/Layout"

const OtherIncomeDetailPage = ({other_income}) => {
    console.log("other_income :", other_income);
    return (
        <div>
            <OtherIncomeDetail other_income={other_income} />
        </div>
    )
};


export async function getServerSideProps({params}) {
    let other_income_fetch_url = `${BASE_URL}/transactions/other-income/${params.id}/`;
    const other_income_res = await fetch(other_income_fetch_url);
    const other_income = await other_income_res.json();

    console.log("Others :", other_income);

    return {
        props: {
            "other_income": other_income.data
        }
    }
}

export default OtherIncomeDetailPage;


OtherIncomeDetailPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};