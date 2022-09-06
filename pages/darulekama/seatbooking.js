import SeatBooking from "../../components/DarulEkama/SeatBooking";
import Layout from '../../layouts/Layout';

const SeatbookingPage = () => {

    return (
        <div>
           <SeatBooking/>
        </div>
    )
};


export default SeatbookingPage;


SeatbookingPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};