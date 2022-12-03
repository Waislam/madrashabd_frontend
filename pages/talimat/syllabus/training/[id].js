import TeacherTrainingDetail from '../../../../components/Talimat/Syllabus/Teachertraining/TeacherTrainingDetail'
import {BASE_URL} from '../../../../pages/api/api';
import Layout from "../../../../components/Layout/Layout";

const TeacherTrainingDetailPage = ({teacher_training_detail}) => {

    return (
        <div>
            <TeacherTrainingDetail
                teacher_training_detail={teacher_training_detail}
            />
        </div>
    )
};


export async function getServerSideProps({params}) {

    // Fetch brand data from external API
    let fetch_url = `${BASE_URL}/talimat/teacher-training/detail/${params.id}/`;
    const teacher_training_res = await fetch(fetch_url);
    const teacher_training_detail = await teacher_training_res.json();
    return {
        props: {
            "teacher_training_detail": teacher_training_detail
        }
    }
}

export default TeacherTrainingDetailPage;


TeacherTrainingDetailPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};