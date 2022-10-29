import styles from "../Setting.module.css";
import axios from "axios";
import api, { BASE_URL } from "../../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";




const SessionUpdate = (props) => {

    let preLoadedValues = {
        "name": props.sessionsettingolddata?.name,
        "actual_year": props.sessionsettingolddata?.actual_year
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    })

    const onSubmit = async (values) => {
        let data = {
            "name": values.name,
            "madrasha": props.sessionsettingolddata?.madrasha?.id,
            "actual_year": values.actual_year
        }
        const current_id = props.sessionsettingolddata.id
        const list = await axios.put(`${BASE_URL}/settings/session/detail/${current_id}/`, data)
            .then((res) => {
                console.log(res.data)
            })
        props.onHide()
    }


    return (
        <>
            <div className="update-session">
                <Modal {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={`${styles.customDialog}`}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add Session
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="my-4">
                                    <input type="text" className="form-control"
                                        placeholder="session year"
                                        name="name"
                                        {...register("name", { required: "This field is required" })}
                                    />
                                    <p className="text-danger">{errors.name?.message}</p>
                                </div>
                                <div className="my-4">
                                    <input type="text" className="form-control"
                                        placeholder="session year"
                                        name="actual_year"
                                        {...register("actual_year", { required: "This field is required" })}
                                    />
                                    <p className="text-danger">{errors.name?.message}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button className={styles.defaultBtn}>Save</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default SessionUpdate;