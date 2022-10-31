import React from "react";
import styles from './Dawah.module.css'
import Talimat from "../Talimat";

const Dawah = ({dawah, handleDawahModal, handleDeleteDawahModal, handleUpdateDawahModal}) => {
    return (
        <>
            <section className={styles.dawahSection}>
                <div className="container-fluid">
                    <div className="row">
                        <Talimat/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.dawahBody}>
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <h2>Dawah details</h2>
                                                </div>
                                                <div className="col-md-6">
                                                    <button
                                                        type="button"
                                                        className={`${styles.defaultBtn} float-md-end`}
                                                        onClick={handleDawahModal}>Add
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
                                                            <th scope="col">Program Name</th>
                                                            <th scope="col">Duration</th>
                                                            <th scope="col">Start Time</th>
                                                            <th scope="col">Place</th>
                                                            <th scope="col">Managed By</th>
                                                            <th scope="col" className="text-center">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            dawah?.map((data, index) => (
                                                                <tr key={index}>
                                                                    <th scope="row">{index+1}</th>
                                                                    <td className="text-sm">{data?.date}</td>
                                                                    <td className="text-sm">{data?.program_name}</td>
                                                                    <td className="text-sm">{data?.duration}</td>
                                                                    <td className="text-sm">{data?.start_time}</td>
                                                                    <td className="text-sm">{data?.place}</td>
                                                                    <td className="text-sm">{data?.managed_by}</td>
                                                                    <td className="text-center">
                                                                        <button className="btn btn-primary" onClick={() =>handleUpdateDawahModal(data.id)}>Edit</button>
                                                                        <button className="btn btn-danger" onClick={()=>handleDeleteDawahModal(data.id)}>Delete</button>
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


export default Dawah;




