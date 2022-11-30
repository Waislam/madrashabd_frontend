import TeacherTrainingDetail from '../../../../components/Talimat/Syllabus/Teachertraining/TeacherTrainingDetail'
import api, {BASE_URL} from '../../../../pages/api/api';

const TeacherTrainingDetailPage = ({teacher_training_detail}) => {
    console.log("teacher_training_detail :", teacher_training_detail);

    return (
        <div>
            <TeacherTrainingDetail teacher_training_detail={teacher_training_detail} />
        </div>
    )
};


export async function getServerSideProps({params}) {

    // Fetch brand data from external API
    let fetch_url = `${BASE_URL}/talimat/teacher-training/detail/${params.id}/`;
    const account_res = await fetch(fetch_url);
    const teacher_training_detail = await account_res.json();
    console.log("teacher_training_detail :", teacher_training_detail);
    return {
        props: {
            "teacher_training_detail": teacher_training_detail
        }
    }
}

export default TeacherTrainingDetailPage;
