import {BASE_URL} from '../../../../pages/api/api';
import Layout from "../../../../components/Layout/Layout";
import ExamAnnouncementDetails from '../../../../components/Talimat/Examination/ExamAnnouncementDetails'

const ExamAnnouncementDetailPage = ({exam_announcement}) => {
    console.log("exam_announcement :", exam_announcement);

    return (
        <div>
            <ExamAnnouncementDetails
                exam_announcement={exam_announcement}
            />
        </div>
    )
};


export async function getServerSideProps({params}) {

    // Fetch brand data from external API
    let fetch_url = `${BASE_URL}/talimat/exam-announcement/detail/${params.id}/`;
    const exam_announcement_res = await fetch(fetch_url);
    const exam_announcement = await exam_announcement_res.json();
    return {
        props: {
            "exam_announcement": exam_announcement
        }
    }
}

export default ExamAnnouncementDetailPage;


ExamAnnouncementDetailPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};
