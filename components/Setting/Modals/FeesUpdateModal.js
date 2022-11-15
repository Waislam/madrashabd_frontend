import styles from "../Setting.module.css";
import axios from "axios";
import api, {BASE_URL} from "../../../pages/api/api"
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Modal from "react-bootstrap/Modal";
import {useForm} from "react-hook-form";


const FeesUpdate = (props) => {
    const router = useRouter();

    let preLoadedValues = {
        "name": props.feesOldData?.name,
        "department": props.feesOldData?.department?.id,
        "madrasha_class": props.feesOldData?.madrasha_class?.id,
        "amount": props.feesOldData?.amount
    };

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    });

    const onSubmit = async (values) => {
        let data = {
            "name": values.name,
            "madrasha": props.feesOldData?.madrasha?.id,
            "department": values.department,
            "madrasha_class": values.madrasha_class,
            "amount": values.amount
        };
        const current_id = props.feesOldData.id;
        const list = await axios.put(`${BASE_URL}/settings/fees/detail/${current_id}/`, data)
            .then((res) => {
                console.log(res.data)
            });
        props.onHide();
        router.reload();
    };


    return (
        <>
            <div className="update-fees">
                <Modal {...props}
                       size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                       dialogClassName={`${styles.customDialog}`}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Edit Fees
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="mt-4">
                                    <label className="mb-2">Fees Name</label>
                                    <input type="text" className="form-control"
                                           placeholder="Shift Name"
                                           name="name"
                                           {...register("name", {required: "This field is required"})}
                                    />
                                    <p className="text-danger">{errors.name?.message}</p>
                                </div>
                                <div className="mb-4">
                                    <label className="mb-2">Department Name</label>
                                    <select type="text" className="form-select"
                                            placeholder="select department"
                                            name="department"
                                            {...register("department")}
                                    >
                                        {props.departmentList && props.departmentList.map((department) => (
                                            <option className="dropdown-item" value={department.id}
                                                    key={department.name}>
                                                {department.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
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
                                <div className="mb-4">
                                    <label className="mb-2">Fees Amount</label>
                                    <input type="text" className="form-control"
                                           placeholder="500"
                                           name="amount"
                                           {...register("amount", {required: "This field is required"})}
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

export default FeesUpdate;