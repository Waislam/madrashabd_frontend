import {BASE_URL} from "../../api/api";
import StudentIncomeDetail from '../../../components/Account/StudentIncome/StudentIncomeDetail'

import Layout from "../../../components/Layout/Layout"

const AccountDetailPage = ({student_income}) => {

    return (
        <div>
            <StudentIncomeDetail
                student_income={student_income}
            />
        </div>
    )
};


export async function getServerSideProps({params}) {
    let student_income_fetch_url = `${BASE_URL}/transactions/student-income/${params.id}/`;
    const student_income_res = await fetch(student_income_fetch_url);
    const student_income = await student_income_res.json();

    return {
        props: {
            "student_income": student_income.data
        }
    }
}

export default AccountDetailPage;


AccountDetailPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};