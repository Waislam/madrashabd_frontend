import {BASE_URL} from "../../api/api";
import AccountExpense from '../../../components/Account/Account/AccountExpense'
import Layout from "../../../components/Layout/Layout"

const ExpenseDetailPage = ({expense_income}) => {
    return (
        <div>
            <AccountExpense expense_income={expense_income}/>
        </div>
    )
};

export async function getServerSideProps({params}) {
    let expense_income_fetch_url = `${BASE_URL}/transactions/expense/${params.id}/`;
    const expense_income_res = await fetch(expense_income_fetch_url);
    const expense_income = await expense_income_res.json();

    return {
        props: {
            "expense_income": expense_income.data
        }
    }
}

export default ExpenseDetailPage;


ExpenseDetailPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};