import styles from "../Syllabus.module.css";
import axios from "axios";
import api, { BASE_URL } from "../../../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";


const TeacherResponseUpdate = (props) => {
    console.log('porps value0', props.old_data)

    const router = useRouter()

    let preLoadedValues = {
        "responsibility": props.old_data?.responsibility
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    })

    const onSubmit = async (values) => {
        let data = {
            // "madrasha": props.old_data?.madrasha?.id,
            "responsibility": values.responsibility,
            "teacher_staff": props.old_data?.teacher_staff?.id
        }
        const current_id = props.old_data.id
        const list = await axios.put(`${BASE_URL}/talimat/responsibility/detail/${current_id}/`, data)
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
                            Update/Edit Responsibility information
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="mb-3">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Responsiblity"
                                        name="responsibility"
                                        {...register("responsibility")}
                                    />
                                </div>
                            </div>
                            <button className={`${styles.defaultBtn} my-3`}>Update</button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default TeacherResponseUpdate;