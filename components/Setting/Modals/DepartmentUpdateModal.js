import styles from "../Setting.module.css";
import axios from "axios";
import api, { BASE_URL } from "../../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";


const DepartmentUpdate = (props) => {
    let preLoadedValues = {
        "name": props.departmentUpdateAbleData?.name
    }

    const { register, handleSubmit } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    })

    const onSubmit = async (values) =>{
        let data = {"name":values.name, "madrasha":props.departmentUpdateAbleData?.madrasha?.id}
        const current_id = props.departmentUpdateAbleData.id
        const list = await axios.put(`${BASE_URL}/settings/department/detail/${current_id}/`, data)
        props.onHide()
    }


    return (
        <>
            {/* ========= put department form ======== */}
            <div className={`putDepartment text-center`}>
                <Modal {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={`${styles.customDialog}`}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Edit This Department
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="my-4">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Department Name"
                                        name="name"
                                        {...register("name")}
                                    />
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

export default DepartmentUpdate;