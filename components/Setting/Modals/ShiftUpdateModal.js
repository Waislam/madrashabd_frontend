import styles from "../Setting.module.css";
import axios from "axios";
import api, { BASE_URL } from "../../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";


const ShiftUpdate = (props) => {

    let preLoadedValues = {
        "name": props.shiftolddata?.name,
        "department": props.shiftolddata?.department?.id,
        "madrasha_class": props.shiftolddata?.madrasha_class?.id,
        "shift_time": props.shiftolddata?.shift_time
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    })

    const onSubmit = async (values) => {
        let data = {
            "name": values.name,
            "madrasha": props.shiftolddata?.madrasha?.id,
            "department": values.department,
            "madrasha_class": values.madrasha_class,
            "shift_time": values.shift_time
        }
        const current_id = props.shiftolddata.id
        const list = await axios.put(`${BASE_URL}/settings/shift/detail/${current_id}/`, data)
            .then((res) => {
                console.log(res.data)
            })
        props.onHide()
    }


    return (
        <>
            <div className="update-shift">
                <Modal {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={`${styles.customDialog}`}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add Different Class Shift
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="mt-4">
                                    <label>Shift Name</label>
                                    <input type="text" className="form-control"
                                        placeholder="Shift Name"
                                        name="name"
                                        {...register("name", { required: "This field is required" })}
                                    />
                                    <p className="text-danger">{errors.name?.message}</p>
                                </div>
                                <div className="mt-4">
                                    <label className="mb-2">Department Name</label>
                                    <select type="text" className="form-select"
                                        placeholder="select department"
                                        name="department"
                                        {...register("department")}
                                    >
                                        {props.departmentList && props.departmentList.map((department) => (
                                            <option className="dropdown-item" value={department.id} key={department.name}>
                                                {department.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="my-4">
                                    <label className="mb-2">Class Name</label>
                                    <select type="text" className="form-select"
                                        placeholder="select Class"
                                        name="madrasha_class"
                                        {...register("madrasha_class")}
                                    >
                                        {props.classList && props.classList.map((className) => (
                                            <option value={className.id} key={className.name}>
                                                {className.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="my-4">
                                    <label>Shift Time</label>
                                    <input type="time" className="form-control"
                                        placeholder="Shift Time"
                                        name="shift_time"
                                        {...register("shift_time", { required: "This field is required" })}
                                    />
                                    <p className="text-danger">{errors.shift_time?.message}</p>
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

export default ShiftUpdate;