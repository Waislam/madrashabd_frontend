import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './ExtraActivity.module.css'
import studentLogo from '../../../public/assets/admission/students.png'
import Talimat from "../Talimat";

const ExtraActivity = ({extraActivity, handleAddExtraActivity, handleDeleteExtraActivity, handleUpdateExtraActivityModal}) => {

    return (
        <>
            <section className={styles.extraActivitySection}>
                <div className="container-fluid">
                    <div className="row">
                        <Talimat/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.extraActivityBody}>
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <h2>Extra Activity details</h2>
                                                </div>
                                                <div className="col-md-6">
                                                    <button
                                                        type="button"
                                                        className={`${styles.defaultBtn} float-md-end`}
                                                        onClick={() => handleAddExtraActivity()}
                                                    >Add
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="details-table mt-4">
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">ID</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Programe Name</th>
                                                            <th scope="col">Duration</th>
                                                            <th scope="col">start Time</th>
                                                            <th scope="col">place</th>
                                                            <th scope="col">Managed By</th>
                                                            <th scope="col" className="text-center">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            extraActivity?.map((data, index) => (
                                                                <tr key={index + 1}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td className="text-sm">{data.date}</td>
                                                                    <td className="text-sm">{data?.category}</td>
                                                                    <td className="text-sm">{data?.duration}</td>
                                                                    <td className="text-sm">{data?.start_time}</td>
                                                                    <td className="text-sm">{data?.place}</td>
                                                                    <td className="text-sm">{data?.managed_by}</td>
                                                                    <td className="text-center">
                                                                        <button
                                                                            type="button"
                                                                            className={`btn btn-primary me-2`}
                                                                            onClick={() => handleUpdateExtraActivityModal(data.id)}
                                                                        >
                                                                            Edit
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-danger"
                                                                            onClick={() => handleDeleteExtraActivity(data.id)}
                                                                        >
                                                                            Delete
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                        </tbody>
                                                    </table>
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


export default ExtraActivity;




