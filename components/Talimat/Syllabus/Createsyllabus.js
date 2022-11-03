import styles from './Createsyllabus.module.css';
import Talimat from '../Talimat';
import taliamatstyles from '../Talimat.module.css'
import SyllabusHeader from './SyllabusHeader'
import SyllabuSideMenu from './SyllabusSideMenu';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../pages/api/api';
import Modal from "react-bootstrap/Modal"
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const SyllabusCreation = ({ getClassList, class_list, handlePutRequest }) => {

    const router = useRouter()

    const [syllabusList, setSyllabusList] = useState(null)
    const [showInputForm, setShowInputForm] = useState(false)

    const { register, handleSubmit } = useForm()

    //handle get request
    const getSyllabusList = async () => {
        const list = await axios.get(`${BASE_URL}/talimat/100/syllabus/`)
        const syllabuslist = list.data
        setSyllabusList(syllabuslist)
    }

    useEffect(() => {
        getSyllabusList()
    }, [])

    //handle post request
    const handlePostRequest = () => {
        getClassList()
        setShowInputForm(true)
    }

    const onSubmit = async (values) => {

        const data = {
            "madrasha": 1,
            "madrasha_class": values.madrasha_class,
            "exam_term": {
                "term_name": values.exam_term,
                "madrasha": 1
              },
            "session_year": values.session_year,
            "syllabus_details": values.syllabus_details,
        }

        await axios.post(`${BASE_URL}/talimat/100/syllabus/`, data)
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
                        <SyllabuSideMenu />
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <SyllabusHeader />
                                        <hr />
                                        <div className="row">
                                            <div className="sub-page">
                                                <div className={styles.syllabus}>
                                                    <h2>Syllabus Creation</h2>
                                                    <div className="search-table">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-md-3 mb-3 px-0 ms-2">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control" placeholder="Department" />
                                                                        <button type="button"
                                                                            className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                            data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <span className="visually-hidden">Toggle Dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li>
                                                                                <a className="dropdown-item" href="#">Name 1</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className="dropdown-item" href="#">Name 2</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3 mb-3 px-0 ms-3">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control" placeholder="Class" />
                                                                        <button type="button"
                                                                            className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                            data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <span className="visually-hidden">Toggle Dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li>
                                                                                <a className="dropdown-item" href="#">Class 1</a>
                                                                            </li>
                                                                            <li><
                                                                                a className="dropdown-item" href="#">Class 2</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-2 mb-3">
                                                                    <button type="submit" className={styles.searchButton}>Search</button>
                                                                </div>
                                                                <div className="col-md-3 mb-3">
                                                                    <button type="button" className={`${styles.defaultBtn} float-md-end`}
                                                                        onClick={() => handlePostRequest()}
                                                                    >
                                                                        Add
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="syllabus-table">
                                                        <div className="table-responsive">
                                                            <table className="table table-striped">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Class</th>
                                                                        <th>Department</th>
                                                                        <th>Exam Term</th>
                                                                        <th>Syllabus Details</th>
                                                                        <th>Active year</th>
                                                                        <th>File</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {syllabusList && syllabusList.map((data, index) => (
                                                                        <tr key={data.id}>
                                                                            <td>{data.madrasha_class?.name}</td>
                                                                            <td>{data.madrasha_class?.department?.name}</td>
                                                                            <td>{data.exam_term?.term_name}</td>
                                                                            <td>{data.syllabus_details}</td>
                                                                            <td>{data.session_year}</td>
                                                                            <td>file container</td>
                                                                            <td>
                                                                                <button className="btn btn-primary" onClick={(e)=>handlePutRequest(e, data.id)}>Edit</button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" className={styles.defaultBtn}>Download pdf</button>
                                                    </div>
                                                </div>
                                                {/* === add syllabus start ====== */}
                                                <div className="add-syllabus">
                                                    <Modal show={showInputForm} onHide={() => setShowInputForm(false)}
                                                        dialogClassName={`${styles.customDialog}`}
                                                        size="lg"
                                                    >
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>
                                                                Add Syllabus
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                                <div className="row">
                                                                    <div className="mb-3">
                                                                        <label className="mb-2">Class</label>
                                                                        <select type="text"
                                                                            className="form-select" placeholder="Class Name"
                                                                            name="madrasha_class"
                                                                            {...register("madrasha_class")}
                                                                        >
                                                                            <option>Select Class</option>
                                                                            {class_list && class_list.map((data) => (
                                                                                <option value={data.id} key={data.name}>{data.name}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="mb-2">Exam Term</label>
                                                                        <input type="text"
                                                                            className="form-control" placeholder="Exam term Name"
                                                                            name="exam_term"
                                                                            {...register("exam_term")}
                                                                        >
                                                                        </input>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="mb-2">Year</label>
                                                                        <input type="text"
                                                                            className="form-control" placeholder="2023"
                                                                            name="session_year"
                                                                            {...register("session_year")}
                                                                        >
                                                                        </input>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="mb-2">Syllabus Detail</label>
                                                                        <textarea
                                                                            className="form-control" placeholder="year"
                                                                            name="syllabus_details"
                                                                            {...register("syllabus_details")}
                                                                        >
                                                                        </textarea>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <input type="file"
                                                                            className="form-control" placeholder="syllabus_file" />
                                                                    </div>
                                                                </div>
                                                                <div className="mb-2">
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
                </div>
            </section>

        </>
    )
}

export default SyllabusCreation;