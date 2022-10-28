import styles from "./Setting.module.css";
import SettingSideMenu from "./SettingSideMenu";
import axios from "axios";
import api, { BASE_URL } from "../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";


const Designation = ({handlePutRequest, departmentList}) => {

    const [designationList, setDesignationList] = useState(null)
    const [showInputForm, setShowInputForm] = useState(false)

    //handle get request of designation
    const getDesignationList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/designation/`)
        const designations = list.data
        setDesignationList(designations)

    }

    useEffect(() => {
        getDesignationList()
    }, [])

    //handle post request for designation
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "all" })


    const handlePostRequest = () => {
        setShowInputForm(true)
    }

    const onSubmit = async (values) => {
        const data = { "name": values.name, "madrasha": 1, "department": values.department }
        await axios.post(`${BASE_URL}/settings/100/designation/`, data)
            .then((response) => (
                console.log(response.data)
            ))
        setShowInputForm(false)
    }

    return (
        <>
            <section className={styles.settingSection}>
                <div className="container-fluid">
                    <div className="row">
                        <SettingSideMenu />
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="department-body">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.department}>
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <h2><u>Designation</u></h2>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className={`${styles.defaultBtn} float-end`} onClick={handlePostRequest}>Add</button>
                                                </div>
                                            </div>
                                            <div className="designation-table mt-3">
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Counting</th>
                                                                <th scope="col">Designation Name</th>
                                                                <th scope="col">Department Name</th>
                                                                <th scope="col" className="text-center">Edit</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {designationList && designationList.map((designation, index) => (
                                                                <tr key={designation.id}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td className="text-sm">{designation.name}</td>
                                                                    <td className="text-sm">{designation.department?.name}</td>
                                                                    <td className="p-0 text-center">
                                                                        <button type="button" className={`${styles.editButton}`} onClick={(e)=>handlePutRequest(e, designation.id)}>Edit</button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* ========= add department form ======== */}
                                            <div className="add-designation">
                                                <Modal show={showInputForm} onHide={() => setShowInputForm(false)}
                                                    dialogClassName={`${styles.customDialog}`}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>
                                                            Add Designation
                                                        </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                            <div className="row">
                                                                <div className="mt-4">
                                                                    <label className="mb-2">Designation Name</label>
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Designation Name"
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
                                                                            {departmentList && departmentList.map((department) => (
                                                                                <option className="dropdown-item" value={department.id}
                                                                                    key={department.name}
                                                                                >{department.name}</option>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Designation;