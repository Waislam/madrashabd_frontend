import {useForm} from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styles from "../../../Account/Account.module.css";

import api from '../../../../pages/api/api'
import {useRouter} from "next/router";

const ExamAnnouncementEditModal = (props) => {
    // console.log("props.examAnnouncementData?.exam_title", props.examAnnouncementData?.exam_title)
    const router = useRouter()

    const preLoadedData = {
        exam_title: props.examAnnouncementData?.exam_title,
        exam_description: props.examAnnouncementData?.exam_description,
    }

    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        mode: "all",
        defaultValues: preLoadedData
    });

    const onSubmit = data => {
        data.madrasha = 1

        api.put(`talimat/exam-announcement/detail/${props.examAnnouncementId}/`, JSON.stringify(data))
            .then((response) => {
                console.log("response", response.data)
                props.handleClose()
                router.reload()
            }).catch((error) => {
            console.log("error", error)
        })
    };

    return (
        <Modal show={props.show} onHide={props.handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Exam Announcement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="mb-3">
                            <label className="mb-2">Expense By</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Expense By"
                                   name="exam_title"
                                   {...register("exam_title", {required: "this field is required"})}
                            />
                            <p className="text-danger">{errors.exam_title?.message}</p>
                        </div>
                        <div className="mb-3">
                            <label className="mb-2">Exam details</label>
                            <input type="textarea"
                                   className="form-control"
                                   placeholder="Exam details"
                                   name="exam_description"
                                   {...register("exam_description", {required: "this field is required"})}
                            />

                            <p className="text-danger">{errors.exam_description?.message}</p>
                        </div>
                    </div>
                    <div>
                        <button className={`${styles.defaultBtn}`}>
                            Save
                        </button>
                        <button className={`${styles.defaultBtn} ms-3 float-md-end`} onClick={props.onHide}>
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default ExamAnnouncementEditModal;