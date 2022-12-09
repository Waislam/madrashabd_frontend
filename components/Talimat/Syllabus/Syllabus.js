import styles from './Syllabus.module.css';
import Talimat from '../Talimat';
import taliamatstyles from '../Talimat.module.css'
import SyllabusHeader from './SyllabusHeader'
import axios from 'axios';
import api, {BASE_URL} from '../../../pages/api/api'
import {useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {useForm} from "react-hook-form";
import {AmPm} from "../../Utils/utils"
import {useRouter} from 'next/router'
import {getSession, useSession} from "next-auth/react";
import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';


const Syllabus = ({getClassList, classList, handlePutRequest, handleDeleteRequest}) => {
    const componentRef = useRef();

    const router = useRouter();
    const {data: session, status} = useSession();

    console.log("session :", session);

    const [bookDistList, setBookDistList] = useState(null);
    const [showInputForm, setShowInputForm] = useState(false);

    // const [classList, setClassList] = useState(null)

    const {register, handleSubmit} = useForm({mode: "all"});

    //handle get request
    const getBookDistList = async () => {
        const list = await axios.get(`${BASE_URL}/talimat/100/book-dist-teacher/`);
        const bookdistData = list.data;
        setBookDistList(bookdistData)
    };

    useEffect(() => {
        getBookDistList()
    }, []);

    //handle post request

    const handlePostRequest = () => {
        getClassList();
        setShowInputForm(true)
    };

    const onSubmit = async (values) => {

        const data = {
            "madrasha": session?.user?.madrasha_id,
            "teacher_name": values.teacher_name,
            "kitab_name": values.kitab_name,
            "class_name": values.class_name,
            "class_time": values.class_time
        };

        await axios.post(`${BASE_URL}/talimat/100/book-dist-teacher/`, data)
            .then((response) => (
                console.log(response.data)
            ));
        setShowInputForm(false);
        router.reload()
    };

    return (
        <>
            <section className={taliamatstyles.talimatSection}>
                <div className="container-fluid">
                    <div className="row">
                        <Talimat/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <SyllabusHeader/>
                                        <hr/>
                                        <div className="row">
                                            <div className="sub-page">
                                                <div className={styles.syllabus}>
                                                    <div className="styllabus-table">
                                                        <div className="row">
                                                            <div className="col col-md-6 mb-2">
                                                                <h2>
                                                                    <u>
                                                                        Book distribution to Teacher
                                                                    </u>
                                                                </h2>
                                                            </div>
                                                            <div className="col col-md-6  mb-2">
                                                                <button
                                                                    type="button"
                                                                    className={`float-end brand-btn`}
                                                                    onClick={handlePostRequest}>Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="print-container" ref={componentRef}>
                                                            <div className="print-banner">
                                                                <div className="text-center">
                                                                    <h5 className="text-capitalize">{session?.user?.madrasha_name}</h5>
                                                                    <p>Book distribution to Teacher</p>
                                                                </div>
                                                            </div>
                                                            <div className="table-responsive">
                                                                <table className="table table-striped">
                                                                    <thead>
                                                                    <tr className="text-center">
                                                                        <th>Counting</th>
                                                                        <th>Teacher</th>
                                                                        <th>Kitab Name</th>
                                                                        <th>Class</th>
                                                                        <th>Class Time</th>
                                                                        <th className="noprint text-center">
                                                                            Action
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {bookDistList && bookDistList.map((bookdist, index) => (
                                                                        <tr key={bookdist.id} className="text-center">
                                                                            <th>{index + 1}</th>
                                                                            <td>{bookdist.teacher_name}</td>
                                                                            <td>{bookdist.kitab_name}</td>
                                                                            <td>{bookdist.class_name?.name}</td>
                                                                            <td>{AmPm(bookdist.class_time)}</td>
                                                                            <td className="noprint">
                                                                                <button
                                                                                    className="btn btn-primary primary"
                                                                                    onClick={(e) => handlePutRequest(e, bookdist.id)}>
                                                                                    Edit
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-danger primary ms-2"
                                                                                    onClick={() => handleDeleteRequest(bookdist.id)}>
                                                                                    Remove
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* ========= add syllabus start =========== */}
                                                    <div className="syllabus-add-form">
                                                        <Modal show={showInputForm}
                                                               onHide={() => setShowInputForm(false)}
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
                                                                                {classList && classList.map((classname) => (
                                                                                    <option value={classname.id}
                                                                                            key={classname.name}>{classname.name}</option>
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
                                                                        <button type="submit"
                                                                                className={styles.defaultBtn}>Save
                                                                        </button>
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
                                <div className="text-center my-2">
                                    <ReactToPrint
                                        trigger={() =>
                                            <button className="btn btn-primary primary">Print</button>}
                                        content={() => componentRef.current}
                                    />
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