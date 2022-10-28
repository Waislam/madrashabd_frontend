import styles from "../Setting.module.css";
import axios from "axios";
import api, { BASE_URL } from "../../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";


const ClassesUpdate = (props) => {

    let preLoadedValues = {
        "name": props.classolddata?.name,
        "department": props.classolddata?.department?.id
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    })

    const onSubmit = async (values) => {
        let data = { "name": values.name, "madrasha": props.classolddata?.madrasha?.id, "department": values.department }
        const current_id = props.classolddata.id
        const list = await axios.put(`${BASE_URL}/settings/classes/detail/${current_id}/`, data)
        props.onHide()
    }


    return (
        <>
            <div className="update-class">
                <Modal {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={`${styles.customDialog}`}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Update/Edit this class information
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="mt-4">
                                    <label className="mb-2">Class Name</label>
                                    <input type="text" className="form-control"
                                        placeholder="class Name Name"
                                        name="name"
                                        {...register("name", { required: "This field is required" })}
                                    />
                                    <p className="text-danger">{errors.name?.message}</p>
                                </div>
                                <div className="mt-4">
                                    <label className="mb-2">Select Department Name</label>
                                    <select type="text" className="form-select"
                                        placeholder="select department"
                                        name="department"
                                        {...register("department")}
                                    >
                                        <option value={props.classolddata?.department?.id}>{props.classolddata?.department?.name}</option>
                                        {props.departmentList && props.departmentList.map((department) => (
                                            <option className="dropdown-item" value={department.id} key={department.name}>
                                                {department.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-7 mt-3">
                                <button className={styles.defaultBtn}>Save</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default ClassesUpdate;