import SyllabusCreationDetails from '../../../../components/Talimat/Syllabus/SyllabusCreationDetails'
import {BASE_URL} from '../../../../pages/api/api';
import Layout from "../../../../components/Layout/Layout";

const SyllabusCreationDetailPage = ({syllabus_detail}) => {

    return (
        <div>
            <SyllabusCreationDetails
                syllabus_detail={syllabus_detail}
            />
        </div>
    )
};


export async function getServerSideProps({params}) {

    // Fetch brand data from external API
    let fetch_url = `${BASE_URL}/talimat/syllabus/detail/${params.id}/`;
    const syllabus_res = await fetch(fetch_url);
    const syllabus_detail = await syllabus_res.json();
    return {
        props: {
            "syllabus_detail": syllabus_detail
        }
    }
}

export default SyllabusCreationDetailPage;


SyllabusCreationDetailPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};