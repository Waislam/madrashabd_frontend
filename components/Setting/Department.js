import styles from "./Setting.module.css";
import SettingSideMenu from "./SettingSideMenu";
import axios from "axios";
import api, { BASE_URL } from "../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const Department = () =>{
    const [departmentList, setDepartmentList] = useState(null)
    const [showInputForm, setShowInputForm] = useState(false)

    //Handle get Department List
    const getDepartmentList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/department/`)
        const departments = list.data
        setDepartmentList(departments)
    }

    useEffect(()=>{
        getDepartmentList()
    },[])

    //Handle Post request of Department
    const handlePostRequest = () =>{
        setShowInputForm(true)
    }

    const {register, handleSubmit} = useForm({mode:"all"})

    const onSubmit = async (values) =>{
        const data = {"name":values.name, "madrasha":1}
        await axios.post(`${BASE_URL}/settings/100/department/`, data)
        .then((response)=>(
            console.log(response.data)
        ))

        setShowInputForm(false)
    }

    return (
        <>
            <section className={styles.settingSection}>
                <div className="container-fluid">
                    <div className="row">
                        <SettingSideMenu/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="department-body">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.department}>
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <h2><u>Deparments</u></h2>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className={`${styles.defaultBtn} float-end`} onClick={handlePostRequest}>Add</button>
                                                </div>
                                            </div>
                                            <div className="department-table mt-3">
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Counting</th>
                                                                <th scope="col">Department Name</th>
                                                                <th scope="col">Institution Name</th>
                                                                <th scope="col" className="text-center">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {departmentList && departmentList.map((department, index)=>(
                                                            <tr key={department.id}>
                                                                <th scope="row">{index+1}</th>
                                                                <td className="text-sm">{department.name}</td>
                                                                <td className="text-sm">{department.madrasha.name}</td>
                                                                <td className="p-0 text-center"><button type="button" className={`${styles.editButton}`}>Edit</button></td>
                                                            </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* ========= add department form ======== */}
                                            <div className={`addDepartment text-center`}>
                                                <Modal show={showInputForm} onHide={()=>setShowInputForm(false)} dialogClassName={`${styles.customDialog}`}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>
                                                            Add Department
                                                        </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        <div className="row">
                                                            <div className="my-4">
                                                                <input type="text" className="form-control" placeholder="Department Name"
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

export default Department;