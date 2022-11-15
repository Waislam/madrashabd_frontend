import styles from "../Syllabus.module.css";
import axios from "axios";
import api, { BASE_URL } from "../../../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";


const TeacherTrainUpdate = (props) => {

    const router = useRouter()

    let preLoadedValues = {
        "training_title": props.teachertrainolddata?.training_title,
        "training_description": props.teachertrainolddata?.training_description
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    })

    const onSubmit = async (values) => {
        let data = {
            "training_title": values.training_title, 
            "training_description": values.training_description,
        }
        const current_id = props.teachertrainolddata.id
        const list = await axios.put(`${BASE_URL}/talimat/teacher-training/detail/${current_id}/`, data)
        .then((response)=>{
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
                            Update/Edit Training information
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="my-4">
                                    <label className="mb-2">Training Title</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="title"
                                        name="training_title"
                                        {...register("training_title")}
                                    />
                                </div>
                                <div className="my-4">
                                    <label className="mb-2">Training Detail</label>
                                    <textarea
                                        type="textarea"
                                        placeholder="write description here"
                                        className="form-control"
                                        name="training_description"
                                        {...register("training_description")}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button type="submit" className={styles.defaultBtn}>Save</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default TeacherTrainUpdate;