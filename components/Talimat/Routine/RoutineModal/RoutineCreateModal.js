import {useForm} from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import styles from "../../../Account/Account.module.css";

import api from '../../../../pages/api/api'
import {useRouter} from "next/router";

const RoutineCreateModal = (props) => {
    console.log("RoutineCreateModal(): props modal", props)

    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: {errors}
    } = useForm({
        mode: "all"
    });
    const router = useRouter()

    const onSubmit = data => {
        console.log("RoutineCreateModal(): data", data)
        // data.madrasha = 1
        // api.post(`talimat/100/hall-duty/`, JSON.stringify(data))
        //     .then((response) => {
        //         console.log("response", response.data)
        //         props.handleClose()
        //         router.reload()
        //     }).catch((error) => {
        //     console.log("error", error)
        // })
    };

    return (
        <Modal show={props.show} onHide={props.handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Student Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="mb-3">
                            <label className="mb-2">Class</label>
                            <select
                                className="form-control form-select"
                                name="routine_class"
                                {...register("routine_class", {required: "this field is required"})}
                            >
                                {props.classList && props.classList.map((classData) => (
                                    <option value={classData?.id} key={classData?.id}>{classData?.name}</option>
                                ))}
                            </select>
                            <p className="text-danger">{errors.routine_class?.message}</p>
                        </div>

                        <div className="mb-3">
                            <label className="mb-2">Subject</label>
                            <select
                                className="form-control form-select"
                                name="exam_subject"
                                {...register("exam_subject", {required: "this field is required"})}
                            >
                                {props.madrashaBookList && props.madrashaBookList.map((book) => (
                                    <option value={book?.id} key={book?.id}>{book?.name}</option>
                                ))}
                            </select>
                            <p className="text-danger">{errors.exam_subject?.message}</p>
                        </div>

                        <div className="mb-3">
                            <label className="mb-2">Exam Start DateTime</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                name="exam_start_date_time"
                                {...register("exam_start_date_time")}
                            />
                            <p className="text-danger">{errors.exam_start_date_time?.message}</p>
                        </div>

                        <div className="mb-3">
                            <label className="mb-2">Exam finish DateTime</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                name="exam_finish_date_time"
                                {...register("exam_finish_date_time")}
                            />
                            <p className="text-danger">{errors.exam_finish_date_time?.message}</p>
                        </div>

                        <div className="mb-3">
                            <label className="mb-2">Exam Term</label>
                            <select
                                className="form-control form-select"
                                name="exam_term"
                                {...register("exam_term", {required: "this field is required"})}
                            >
                                {props.examTermList && props.examTermList.map((term) => (
                                    <option value={term?.id} key={term?.id}>{term?.term_name}</option>
                                ))}
                            </select>
                            <p className="text-danger">{errors.room_no?.message}</p>
                        </div>
                    </div>
                    <div>
                        <button className={`${styles.defaultBtn}`}>
                            Save
                        </button>
                        <button
                            type="button"
                            className={`${styles.defaultBtn} ms-3 float-md-end`}
                            onClick={props.onHide}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default RoutineCreateModal;