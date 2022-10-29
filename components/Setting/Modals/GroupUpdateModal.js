import styles from "../Setting.module.css";
import axios from "axios";
import api, { BASE_URL } from "../../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";


const GroupUpdate = (props) => {

    let preLoadedValues = {
        "name": props.groupolddata?.name,
        "department": props.groupolddata?.department?.id,
        "madrasha_class": props.groupolddata?.madrasha_class?.id
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    })

    const onSubmit = async (values) => {
        let data = {
            "name": values.name,
            "madrasha": props.groupolddata?.madrasha?.id,
            "department": values.department,
            "madrasha_class": values.madrasha_class
        }
        const current_id = props.groupolddata.id
        const list = await axios.put(`${BASE_URL}/settings/group/detail/${current_id}/`, data)
            .then((res) => {
                console.log(res.data)
            })
        props.onHide()
    }


    return (
        <>
            <div className="update-group">
                <Modal {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={`${styles.customDialog}`}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Edit Group
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="my-4">
                                    <label>Group Name</label>
                                    <input type="text" className="form-control"
                                        placeholder="Group Name"
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
                                        <option value={props.groupolddata?.department?.id}>{props.groupolddata?.department?.name}</option>
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
                                        <option value={props.groupolddata?.madrasha_class?.id}>{props.groupolddata?.madrasha_class?.name}</option>
                                        {props.classList && props.classList.map((className) => (
                                            <option value={className.id} key={className.name}>
                                                {className.name}
                                            </option>
                                        ))}
                                    </select>
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

export default GroupUpdate;