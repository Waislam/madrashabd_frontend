import StudentsOnLeave from "../../components/DarulEkama/StudentsOnLeave";
import Layout from '../../layouts/Layout';

const StudentsOnLeavePage = () => {

    return (
        <div>
           <StudentsOnLeave/>
        </div>
    )
};


export default StudentsOnLeavePage;


StudentsOnLeavePage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};