import {useForm} from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import styles from "../../../Account/Account/Account.module.css";

import api from '../../../../pages/api/api'
import {useRouter} from "next/router";

const RegistrationCreateModal = (props) => {
    // console.log("props modal", props)

    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: {errors}
    } = useForm({
        mode: "onChange"
    });
    const router = useRouter()

    const studentIdValidation = (student_id) => {
        api.get(`students/detail-by-id/${student_id}/`)
            .then((response) => {
                console.log(response.data)
                return !!response.data.status;
            }).catch((error) => {
            console.log("error", error)
            return false
        })
        // return false
    }

    const onSubmit = data => {
        api.get(`students/detail-by-id/${data.student}/`)
            .then((response) => {
                if (response.data.status) {
                    data.madrasha = 1
                    data.student = response.data.data.id
                    data.is_registered = true
                    data.session = 1
                    api.post(`talimat/${props.session_data?.madrasha_slug}/exam-registration/`, JSON.stringify(data))
                        .then((response) => {
                            console.log(response.data)
                            props.handleClose()
                            // router.reload()
                        }).catch((error) => {
                        console.log("error", error)
                    })
                } else {

                    setError("student", {
                        type: "focus",
                        message: 'Provide a valid Student ID !!'
                    }, {shouldFocus: true})
                }
            }).catch((error) => {
            console.log("error", error)
        })

        // data.madrasha = 1
        // data.is_registered = true
        // console.log(data)
        // api.post(`talimat/100/exam-registration/`, JSON.stringify(data))
        //     .then((response) => {
        //         console.log("response", response.data)
        //         props.handleClose()
        //         // router.reload()
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
                            <label className="mb-2">Student ID</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Please Give Student ID"
                                name="student"
                                {...register("student", {required: "this field is required"})}
                            />
                            <p className="text-danger">{errors.student?.message}</p>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="mb-2">Exam Term</label>
                                <select
                                    className="form-control form-select"
                                    name="exam_term"
                                    {...register("exam_term", {required: "this field is required"})}
                                    // onChange={(e) => props.setExpenseCategoryValue(e.target.value)}
                                >
                                    {props.termList && props.termList.map((term) => (
                                        <option value={term?.id} key={term?.id}>{term?.term_name}</option>
                                    ))}
                                </select>
                                <p className="text-danger">{errors.exam_term?.message}</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="mb-2">Student class</label>
                                <select
                                    className="form-control form-select"
                                    name="student_class"
                                    {...register("student_class", {required: "this field is required"})}
                                    // onChange={(e) => props.setExpenseCategoryValue(e.target.value)}
                                >
                                    {props.classList && props.classList.map((classData) => (
                                        <option value={classData?.id} key={classData?.id}>{classData?.name}</option>
                                    ))}
                                </select>
                                <p className="text-danger">{errors.category?.message}</p>
                            </div>
                        </div>

                        <div>
                            <label className="mb-2">Registration fee</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Registration fee"
                                name="amount"
                                {...register("amount", {required: "this field is required"})}
                            />
                            <p className="text-danger">{errors.amount?.message}</p>
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

export default RegistrationCreateModal;