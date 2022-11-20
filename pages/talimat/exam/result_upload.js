import React, { useState } from "react";
import styles from "../../../components/Talimat/Examination/Examination.module.css";
import Layout from "../../../components/Layout/Layout";

import { useForm } from "react-hook-form";
import api, { BASE_URL } from "../../api/api";
import { getSession, useSession } from "next-auth/react";


const ResultUpload = (props) => {

    const {data: session} = useSession()
    // console.log("session value: ", session?.user?.madrasha_slug)

    const madrasha_slug = session?.user?.madrasha_slug

    const [loading, setLoading] = useState(false)
    const [subjectList, setSubjectList] = useState(null) 

    const { register, handleSubmit } = useForm();

    // console.log("session data", props.subjectListData)

    //get subject list depending on class selection
    const getSubjectList = async (e) =>{
        const class_id = e.target.value
        const subject_list = await api.get(`/settings/${madrasha_slug}/${class_id}/books/`)
        setSubjectList(subject_list.data)
    }


    const onSubmit = (values) => {
        // setLoading(true)
        values.madrasha = 1
        values.student = 1

        let formdata = new FormData();
        formdata.append("file", values.file_upload[0], values.file_upload[0].name);
        formdata.append("exam_term", values.exam_term);
        formdata.append("madrasha", values.madrasha);
        formdata.append("student", values.student);
        formdata.append("year", values.year);
        formdata.append("student_class", values.student_class);
        formdata.append("subject", values.subject);

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${BASE_URL}/talimat/file-upload/`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                // setLoading(false)
                console.log(result)
            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    return (
        <>
            {
                loading
                    ?
                    <h1>Loading....</h1>
                    :
                    <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <div className="add-results">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col-md-7 mb-3">
                                        <div className="input-group">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                name='year'
                                                {...register("year")}
                                            >
                                                <option>Select Session</option>
                                                {props.sessionData && props.sessionData.map((data) => (
                                                    <option value={data.id} key={data.id}>{data.actual_year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-7 mb-3">
                                        <div className="input-group">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                name='student_class'
                                                {...register("student_class")}
                                                onChange={getSubjectList}
                                            >
                                                <option>Select Class</option>
                                                {props.madrashaData && props.madrashaData.map((data) => (
                                                    <option value={data.id} key={data.id}>{data.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-7 mb-3">
                                        <div className="input-group">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                name='exam_term'
                                                {...register("exam_term")}
                                            >
                                                <option>Select Exam Term</option>
                                                {props.examterListData && props.examterListData.map((data)=>(
                                                    <option value={data.id} key={data.id}>{data.term_name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-7 mb-3">
                                        <div className="input-group">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                name='subject'
                                                {...register("subject")}
                                            >
                                                <option>Select Subject</option>
                                                {subjectList && subjectList.map((data)=>(
                                                    <option value={data.id} key={data.id}>{data.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-7 mb-3">
                                        <input
                                            name='file_upload'
                                            {...register("file_upload")}
                                            type="file"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <button className={styles.defaultBtn}>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

            }

        </>
    )
}

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req })
    // console.log("session: ", session?.user?.madrasha_slug)
    const madrasha_slug = session?.user?.madrasha_slug

    //get year/session list 
    const sessionList = await api.get(`/settings/${madrasha_slug}/session/`)
    const sessionData = sessionList.data

    //get madrasha class list
    const madrashaClassList = await api.get(`settings/${madrasha_slug}/classes/`)
    const madrashaData = madrashaClassList.data

    //get exam term list 
    const examterList = await api.get(`talimat/${madrasha_slug}/exam-term/`)
    const examterListData = examterList.data

    //get subjectList
    const subjectList = await api.get(`settings/${madrasha_slug}/books/`)
    const subjectListData = subjectList.data

    return {
        props: {
            sessionData,
            madrashaData,
            examterListData,
            subjectListData
        }
    }
}


export default ResultUpload


ResultUpload.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};