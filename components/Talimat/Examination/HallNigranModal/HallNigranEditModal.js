import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import styles from "../../../Account/Account/Account.module.css";

import api from '../../../../pages/api/api'
import { useRouter } from "next/router";

const HallNigranEditModal = (props) => {
    // console.log(" HallNigranEditModal(): props modal", props)
    // console.log("props.hallNigarData?.duty_date: ", props.hallNigarData?.duty_date)
    const madrasha_slug = props.session_data?.user?.madrasha_slug
    const madrasha_id = props.session_data?.user?.madrasha_id

    const preLoadedData = {
        // "duty_date": props.hallNigarData?.duty_date.toString(),
        "date": props.hallNigarData?.date?.toString(),
        "start_time": props.hallNigarData?.start_time,
        "end_time": props.hallNigarData?.end_time,
        "chief_of_hall": props.hallNigarData?.chief_of_hall,
        "assistant_of_hall": props.hallNigarData?.assistant_of_hall,
        "room_no": props.hallNigarData?.room_no
    }

    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors }
    } = useForm({
        mode: "all",
        defaultValues: preLoadedData
    });
    const router = useRouter()


    const onSubmit = data => {
        console.log("data", data)
        data.madrasha = madrasha_id
        api.put(`talimat/hall-duty/detail/${props.hallNigranId}/`, JSON.stringify(data))
            .then((response) => {
                console.log("response", response.data)
                props.onHide()
                router.reload()
            }).catch((error) => {
                console.log("error", error)
            })

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
                            <label className="mb-2">Exam duty Date</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Exam Date"
                                onFocus={(e) => e.target.type = "date"}
                                name="date"
                                {...register("date", { required: "this field is required" })}
                            />
                            <p className="text-danger">{errors.duty_date?.message}</p>
                        </div>
                        <div className="mb-3">
                            <label className="mb-2">Start Time</label>
                            <input
                                type="time"
                                className="form-control"
                                placeholder="Start time"
                                name="start_time"
                                {...register("start_time", { required: "this field is required" })}
                            />
                            <p className="text-danger">{errors.start_time?.message}</p>
                        </div>
                        <div className="mb-3">
                            <label className="mb-2">End Time</label>
                            <input
                                type="time"
                                className="form-control"
                                placeholder="end time"
                                name="end_time"
                                {...register("end_time", { required: "this field is required" })}
                            />
                            <p className="text-danger">{errors.end_time?.message}</p>
                        </div>

                        <div className="mb-3">
                            <label className="mb-2">Chief of Nigran</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Chief of Nigran"
                                name="chief_of_hall"
                                {...register("chief_of_hall", { required: "this field is required" })}
                            />
                            <p className="text-danger">{errors.chief_of_hall?.message}</p>
                        </div>

                        <div className="mb-3">
                            <label className="mb-2">Assistant Nigran</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Assistant Nigran"
                                name="assistant_of_hall"
                                {...register("assistant_of_hall")}
                            />
                            <p className="text-danger">{errors.assistant_of_hall?.message}</p>
                        </div>

                        <div className="mb-3">
                            <label className="mb-2">Room/Hall No</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Room/Hall No"
                                name="room_no"
                                {...register("room_no")}
                            />
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

export default HallNigranEditModal;