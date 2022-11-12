import React, {useState} from "react";
import styles from "../../../components/Talimat/Examination/Examination.module.css";
import Layout from "../../../components/Layout/Layout";

import {useForm} from "react-hook-form";
import api, {BASE_URL} from "../../api/api";


const ResultUpload = () => {
    const [loading, setLoading] = useState(false)
    const {register, handleSubmit} = useForm();

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
                    <div className="add-results mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-7 mb-3">
                                    <div className="input-group">
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            name='year'
                                            {...register("year")}
                                        >
                                            <option selected>Select Session</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
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
                                        >
                                            <option selected>Select Class</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
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
                                            <option selected>Select Exam Term</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
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
                                            <option selected>Select Subject</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
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
                            </div>
                            <div>
                                <button className={styles.defaultBtn}>Save</button>
                            </div>
                        </form>
                    </div>

            }

        </>
    )
}

export default ResultUpload


ResultUpload.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};