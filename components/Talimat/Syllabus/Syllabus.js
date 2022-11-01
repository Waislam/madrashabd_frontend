import Link from 'next/link';
import styles from './Syllabus.module.css';
import Talimat from '../Talimat';
import taliamatstyles from '../Talimat.module.css'
import SyllabusHeader from './SyllabusHeader'
import axios from 'axios';
import api, { BASE_URL } from '../../../pages/api/api'
import { useEffect, useState } from 'react';

import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import {AmPm} from "../../Utils/utils"
import { useRouter } from 'next/router'


const Syllabus = ({ getClassList, classList, handlePutRequest, handleDeleteRequest }) => {

    const router = useRouter()

    const [bookDistList, setBookDistList] = useState(null)
    const [showInputForm, setShowInputForm] = useState(false)

    // const [classList, setClassList] = useState(null)

    const { register, handleSubmit } = useForm({ mode: "all" })

    //handle get request
    const getBookDistList = async () => {
        const list = await axios.get(`${BASE_URL}/talimat/100/book-dist-teacher/`)
        const bookdistData = list.data
        setBookDistList(bookdistData)
    }

    useEffect(() => {
        getBookDistList()
    }, [])

    //handle post request

    const handlePostRequest = () => {
        getClassList()
        setShowInputForm(true)


    }

    const onSubmit = async (values) => {

        const data = {
            "madrasha": 1,
            "teacher_name": values.teacher_name,
            "kitab_name": values.kitab_name,
            "class_name": values.class_name,
            "class_time": values.class_time
        }

        await axios.post(`${BASE_URL}/talimat/100/book-dist-teacher/`, data)
            .then((response) => (
                console.log(response.data)
            ))
        setShowInputForm(false)
        router.reload()
    }

    return (
        <>
            <section className={taliamatstyles.talimatSection}>
                <div className="container-fluid">
                    <div className="row">
                        <Talimat />
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <SyllabusHeader />
                                        <hr />
                                        <div className="row">
                                            <div className="sub-page">
                                                <div className={styles.syllabus}>
                                                    <h2>Book distribution to Teacher</h2>
                                                    <div className="styllabus-table">
                                                        <div className={`${styles.searchTable} mb-5`}>
                                                            <form action="#">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <input type="text" className="form-control" placeholder="Search" />
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <button type="submit" className={styles.searchButton}>Search</button>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <button type="button" className={`${styles.defaultBtn}`} onClick={handlePostRequest}>
                                                                            Add
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="table-responsive">
                                                            <table className="table table-striped">
                                                                <thead className={styles.hearderCustom}>
                                                                    <tr>
                                                                        <th scope="col">Conting</th>
                                                                        <th scope="col">Teacher</th>
                                                                        <th scope="col">Kitab Name</th>
                                                                        <th scope="col">Class</th>
                                                                        <th scope="col">Class Time</th>
                                                                        <th scope="col" className="text-center">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {bookDistList && bookDistList.map((bookdist, index) => (
                                                                        <tr key={bookdist.id}>
                                                                            <th className="text-sm" scope="row">{index + 1}</th>
                                                                            <td className="text-sm ">{bookdist.teacher_name}</td>
                                                                            <td className="text-sm">{bookdist.kitab_name}</td>
                                                                            <td className="text-sm">{bookdist.class_name?.name}</td>
                                                                            <td className="text-sm">
                                                                                {AmPm(bookdist.class_time)}
                                                                            </td>
                                                                            <td className="text-sm float-md-end">
                                                                                <button className="btn btn-primary" onClick={(e)=>handlePutRequest(e, bookdist.id)}>
                                                                                    Edit
                                                                                </button>
                                                                                <button className="btn btn-danger ms-2" onClick={()=>handleDeleteRequest(bookdist.id)}>
                                                                                    Remove
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="downloadButton">
                                                            <button type='button' className={styles.defaultBtn}>Download</button>
                                                        </div>
                                                    </div>

                                                    {/* ========= add syllabus start =========== */}
                                                    <div className="syllabus-add-form">
                                                        <Modal show={showInputForm} onHide={() => setShowInputForm(false)}
                                                            dialogClassName={`${styles.customDialog}`}
                                                            size="lg"
                                                        >
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>
                                                                    Add Book to Teacher
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
                                                                                type="text"
                                                                                placeholder="Class Name"
                                                                                className="form-select"
                                                                                name="class_name"
                                                                                {...register("class_name")}
                                                                            >
                                                                                <option>Select class</option>
                                                                                {classList && classList.map((classname)=>(
                                                                                    <option value={classname.id} key={classname.name}>{classname.name}</option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                        <div className="mb-2">
                                                                            <label className="mb-2">Class time</label>
                                                                            <input type="time"
                                                                                placeholder="class time"
                                                                                className="form-control"
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
                                                </div>
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

export default Syllabus;