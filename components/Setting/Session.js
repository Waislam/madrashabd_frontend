import styles from "./Setting.module.css";
import SettingSideMenu from "./SettingSideMenu";

import axios from "axios";
import api, { BASE_URL } from "../../pages/api/api"
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const Sessions = () => {

    const [sessionList, setSessionList] = useState(null)
    const [showInputForm, setShowInputForm] = useState(false)

    const getSessionList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/session/`)
        const sessions = list.data
        setSessionList(sessions)

    }
    useEffect(() => {
        getSessionList()
    }, [])

    //handle post request for session
    const { register, handleSubmit, formState:{errors} } = useForm({ mode: "all" })

    const handlePostRequest = () => {
        setShowInputForm(true)
    }

    const onSubmit = async (values) => {
        const data = {"name":values.name, "madrasha":1, "actual_year": values.actual_year}
        await axios.post(`${BASE_URL}/settings/100/session/`, data)
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
                        <SettingSideMenu />
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="department-body">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.department}>
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <h2><u>Eduction Sessions</u></h2>
                                                </div>
                                                <div className="col-md-6">
                                                    { sessionList && sessionList.length>0? <></>:
                                                    <button type="button" className={`${styles.defaultBtn} float-end`} onClick={handlePostRequest}>Add</button>
                                                    }
                                                </div>
                                            </div>
                                            <div className="books-table mt-3">
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Counting</th>
                                                                <th scope="col">Session year</th>
                                                                <th scope="col">year</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col" className="text-center">Edit Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {sessionList && sessionList.map((onesession, index) => (
                                                                <tr>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td className="text-sm">{onesession.name}</td>
                                                                    <td className="text-sm">{onesession.actual_year}</td>
                                                                    <td className="text-sm">{onesession.is_active ? <button className="btn-success">Active</button> : <button className="btn-danger">Inactive</button>}</td>
                                                                    <td className="p-0 text-center"><button type="button" className={`${styles.editButton}`}>Edit</button></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* ========= add department form ======== */}
                                            <div className="add-session">
                                                <Modal show={showInputForm} onHide={() => setShowInputForm(false)}
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
                                                                        {...register("name", {required:"This field is required"})}
                                                                    />
                                                                    <p className="text-danger">{errors.name?.message}</p>
                                                                </div>
                                                                <div className="my-4">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="session year"
                                                                        name="actual_year"
                                                                        {...register("actual_year", {required:"This field is required"})}
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

export default Sessions;