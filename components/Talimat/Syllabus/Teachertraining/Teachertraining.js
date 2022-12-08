import styles from '../Teachertraining.module.css';
import Link from 'next/link'
import taliamatstyles from '../../Talimat.module.css'
import SyllabusHeader from '../SyllabusHeader'
import SyllabuSideMenu from '../SyllabusSideMenu';
import Modal from "react-bootstrap/Modal"
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import api, { BASE_URL } from '../../../../pages/api/api';


const TeacherTraining = ({ handlePutRequest, handleDeleteRequest }) => {

    const router = useRouter();

    const [showInputForm, setShowInputForm] = useState(false);
    const [trainingDataList, setTrainingDataList] = useState(false);

    //handle get request
    const getTraningNoticeList = async () => {
        const list = await axios.get(`${BASE_URL}/talimat/100/teacher-training/`);
        const trainingData = list.data;
        setTrainingDataList(trainingData)

    };

    useEffect(() => {
        getTraningNoticeList()
    }, []);


    //handle post request
    const { register, handleSubmit } = useForm({ mode: "all" });

    const handlePostRequest = () => {
        setShowInputForm(true)
    };

    const onSubmit = async (values) => {
        const data = {
            "madrasha": 1,
            "training_title": values.training_title,
            "training_description": values.training_description,
        };
        await axios.post(`${BASE_URL}/talimat/100/teacher-training/`, data)
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
                                                    <div className="row">
                                                        <h2 className="col-md-6">Teachers Training</h2>
                                                        <div className="col-md-6">
                                                            <button type="button"
                                                                className={`${styles.defaultBtn} float-md-end`}
                                                                onClick={handlePostRequest}>
                                                                Add
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="table-responsive">
                                                            <table className="table table-striped">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">Counting</th>
                                                                        <th scope="col">Title</th>
                                                                        <th scope="col">Description</th>
                                                                        <th scope="col" className="text-center">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {trainingDataList && trainingDataList.map((data, index) => (
                                                                        <tr key={data.id}>
                                                                            <th scope="row">{index + 1}</th>
                                                                            <td className="text-truncate"
                                                                                style={{ "maxWidth": 150 }}>
                                                                                {data.training_title}
                                                                            </td>
                                                                            <td className="text-truncate"
                                                                                style={{ "maxWidth": 250 }}>
                                                                                {data.training_description}
                                                                            </td>
                                                                            <td className='text-end'>
                                                                                <Link
                                                                                    href={`/talimat/syllabus/training/${data.id}`}>
                                                                                    <a className="btn btn-secondary primary me-4">Details</a>
                                                                                </Link>
                                                                                <button className="btn btn-primary me-2 primary"
                                                                                    onClick={(e) => handlePutRequest(e, data.id)}>
                                                                                    Edit
                                                                                </button>
                                                                                <button className="btn btn-danger"
                                                                                    onClick={() => handleDeleteRequest(data.id)}>
                                                                                    Remove
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                    {/* add form */}
                                                    <div className="teacher-training-info">
                                                        <Modal
                                                            show={showInputForm}
                                                            onHide={() => setShowInputForm(false)}
                                                            size="lg"
                                                            dialogClassName={`${styles.customDialog}`}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>
                                                                    Add Teacher Training Information
                                                                </Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                                    <div className="row">
                                                                        <div className="my-4">
                                                                            <label className="mb-2">Training
                                                                                Title</label>
                                                                            <input type="text"
                                                                                className="form-control"
                                                                                placeholder="title"
                                                                                name="training_title"
                                                                                {...register("training_title")}
                                                                            />
                                                                        </div>
                                                                        <div className="my-4">
                                                                            <label className="mb-2">Training
                                                                                Detail</label>
                                                                            <textarea
                                                                                type="textarea"
                                                                                placeholder="write description here"
                                                                                className="form-control"
                                                                                name="training_description"
                                                                                {...register("training_description")}
                                                                            >
                                                                            </textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
};

export default TeacherTraining;