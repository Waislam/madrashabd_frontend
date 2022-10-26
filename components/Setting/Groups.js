import styles from "./Setting.module.css";
import SettingSideMenu from "./SettingSideMenu";
import axios from "axios";
import api, { BASE_URL } from "../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";


const Groups = () => {

    const [groupList, setGroupList] = useState(null)
    const [showInputForm, setShowInputForm] = useState(false)
    const [departmentList, setDepartmentList] = useState(null)
    const [classList, setClassList] = useState(null)

    const getGroupList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/group/`)
        const groups = list.data
        setGroupList(groups)

    }
    useEffect(() => {
        getGroupList()
    }, [])

    //handle post request for designation
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "all" })


    const handlePostRequest = () => {
        setShowInputForm(true)
    }

    const getDepartmentList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/department/`)
        const departments = list.data
        setDepartmentList(departments)
    }
    const getClassList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/classes/`)
        const classes = list.data
        setClassList(classes)

    }

    useEffect(() => {
        getDepartmentList()
        getClassList()
    }, [])

    const onSubmit = async (values) => {
        const data = { "name": values.name, "madrasha": 1, "department": values.department, "madrasha_class": values.madrasha_class }
        await axios.post(`${BASE_URL}/settings/100/group/`, data)
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
                                                    <h2><u>Class Group</u></h2>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className={`${styles.defaultBtn} float-end`} onClick={handlePostRequest}>Add</button>
                                                </div>
                                            </div>
                                            <div className="books-table mt-3">
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Counting</th>
                                                                <th scope="col">Group Name</th>
                                                                <th scope="col">Class</th>
                                                                <th scope="col">Department</th>
                                                                <th scope="col" className="text-center">Edit</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {groupList && groupList.map((studentgroup, index) => (
                                                                <tr>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td className="text-sm">{studentgroup.name}</td>
                                                                    <td className="text-sm">{studentgroup.madrasha_class.name}</td>
                                                                    <td className="text-sm">{studentgroup.department.name}</td>
                                                                    <td className="p-0 text-center"><button type="button" className={`${styles.editButton}`}>Edit</button></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* ========= add department form ======== */}
                                            <div className="add-class">
                                                <Modal show={showInputForm} onHide={() => setShowInputForm(false)}
                                                    dialogClassName={`${styles.customDialog}`}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>
                                                            Add Books For Class
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
                                                                        {departmentList && departmentList.map((department) => (
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
                                                                        {classList && classList.map((className) => (
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

export default Groups;