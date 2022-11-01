import styles from "../Syllabus.module.css";
import axios from "axios";
import api, { BASE_URL } from "../../../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";


const BookDistToTeacherUpdate = (props) => {

    const router = useRouter()

    let preLoadedValues = {
        "teacher_name": props.bookDistOldData?.teacher_name,
        "kitab_name": props.bookDistOldData?.kitab_name,
        "class_name": props.bookDistOldData?.class_name?.pk,
        "class_time": props.bookDistOldData?.class_time
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    })

    const onSubmit = async (values) => {
        let data = {
            "teacher_name": values.teacher_name, 
            "madrasha": props.bookDistOldData?.madrasha?.id,
            "kitab_name": values.kitab_name,
            "class_name": values.class_name,
            "class_time": values.class_time
        }
        const current_id = props.bookDistOldData.id
        const list = await axios.put(`${BASE_URL}/talimat/book-dist-teacher/detail/${current_id}/`, data)
        .then((response)=>{
            console.log(response.data)
        })
        props.onHide()
        router.reload(ss)
    }


    return (
        <>
            <div className="update-syllabus">
                <Modal {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName={`${styles.customDialog}`}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Update/Edit this Book distribution information
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="mb-2">
                                    <label className="mb-2">Teacher Name</label>
                                    <input type="text"
                                        placeholder="Teacher Name"
                                        className="form-control"
                                        name="teacher_name"
                                        {...register("teacher_name")}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Kitab Name</label>
                                    <input type="text"
                                        placeholder="Kitab Name"
                                        className="form-control"
                                        name="kitab_name"
                                        {...register("kitab_name")}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Class Name</label>
                                    <select
                                        // type="text"
                                        placeholder="Class Name"
                                        className="form-select"
                                        name="class_name"
                                        {...register("class_name")}
                                    >
                                        <option value={props.bookDistOldData?.class_name?.id}>
                                            {props.bookDistOldData?.class_name?.name}
                                        </option>
                                        {props.classList && props.classList.map((classname) => (
                                            <option value={classname.id} key={classname.name}>{classname.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Class time</label>
                                    <input type="text"
                                        placeholder="class time"
                                        className="form-control"
                                        onFocus={(e) => (e.target.type = "time")}
                                        name="class_time"
                                        {...register("class_time")}
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <button type="submit" className={styles.defaultBtn}>Save</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default BookDistToTeacherUpdate;