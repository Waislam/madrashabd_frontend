import styles from "../Syllabus.module.css";
import axios from "axios";
import api, { BASE_URL } from "../../../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";


const SyllabusCreateUpdate = (props) => {

    const router = useRouter()

    let preLoadedValues = {
        "madrasha_class": props.syllabusOldData?.madrasha_class?.pk,
        "exam_term": props.syllabusOldData?.exam_term?.term_name,
        "session_year": props.syllabusOldData?.session_year,
        "syllabus_details": props.syllabusOldData?.syllabus_details
    }

    console.log("preLoadedValues: ", preLoadedValues)
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    })

    const onSubmit = async (values) => {
        let data = {
            "madrasha": props.syllabusOldData?.madrasha?.id,
            "madrasha_class": values.madrasha_class,
            "exam_term": {
                "madrasha": props.syllabusOldData?.madrasha?.id,
                "term_name": values.exam_term
            },
            "session_year": values.session_year,
            "syllabus_details": values.syllabus_details,
        }
        const current_id = props.syllabusOldData.id
        const list = await axios.put(`${BASE_URL}/talimat/syllabus/detail/${current_id}/`, data)
            .then((response) => {
                console.log(response.data)
            })
        props.onHide()
        router.reload()
    }


    return (
        <>
            <div className="update-teacher-train">
                <Modal {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={`${styles.customDialog}`}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Update/Edit Syllabus information
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="mb-3">
                                    <label className="mb-2">Class</label>
                                    <select
                                        className="form-select" placeholder="Class Name"
                                        name="madrasha_class"
                                        {...register("madrasha_class")}
                                    >
                                        <option value={props.syllabusOldData?.madrasha_class?.id} key={props.syllabusOldData?.madrasha_class?.name}>
                                            {props.syllabusOldData?.madrasha_class?.name}
                                        </option>
                                        {props.class_list && props.class_list.map((data) => (
                                            <option value={data.id} key={data.name}>{data.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2">Exam Term</label>
                                    <input type="text"
                                        className="form-control" placeholder="Exam term Name"
                                        name="exam_term"
                                        {...register("exam_term")}
                                    >
                                    </input>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2">Year</label>
                                    <input type="text"
                                        className="form-control" placeholder="2023"
                                        name="session_year"
                                        {...register("session_year")}
                                    >
                                    </input>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2">Syllabus Detail</label>
                                    <textarea
                                        className="form-control" placeholder="year"
                                        name="syllabus_details"
                                        {...register("syllabus_details")}
                                    >
                                    </textarea>
                                </div>
                                <div className="mb-3">
                                    <input type="file"
                                        className="form-control" placeholder="syllabus_file" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <button className={styles.defaultBtn}>Save</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default SyllabusCreateUpdate;