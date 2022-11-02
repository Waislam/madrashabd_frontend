import React from "react";
import styles from './Transport.module.css'
import TransportSideMenu from "./TransportSideMenu";


const Transport = ({transport, handleAddTransportModal}) => {
    return (
        <>
            <section className={styles.transportSection}>
                <div className="container-fluid">
                    <div className="row">
                        <TransportSideMenu/>
                        {/* ========== transport right side body start ============== */}
                        <div className="col-sm-12 cold-md-10 col-lg-10 col-xl-10">
                            <div className="transport">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className={styles.transportBody}>
                                                <h2>Transport Details</h2>
                                                <div className="search-section my-3">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <input type="text" className="form-control"
                                                                       placeholder="search"/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control"
                                                                           placeholder="time"/>
                                                                    <button type="button"
                                                                            className="btn btn-outline-secondary dropdown-toggle"
                                                                            data-bs-toggle="dropdown">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item">9.20</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item">11.20</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <button
                                                                    type="button"
                                                                    className={styles.searchButton}>
                                                                    Search
                                                                </button>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <button
                                                                    type="button"
                                                                    className={`${styles.defaultBtn} float-md-end`}
                                                                    onClick={()=>handleAddTransportModal()}
                                                                >
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Student Name</th>
                                                            <th scope="col">Guardian Name</th>
                                                            <th scope="col">Gari Number</th>
                                                            <th scope="col">Driver name</th>
                                                            <th scope="col">Driver Number</th>
                                                            <th scope="col">Root</th>
                                                            <th scope="col">Time</th>
                                                            <th scope="col" className="text-center">Edit</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            transport?.results?.map((data, index) => (
                                                                <tr key={index + 1} className="text-capitalize">
                                                                    <td className="text-sm">{data.id}</td>
                                                                    <td className="text-sm">{data.student_id?.user.first_name?.last_name}</td>
                                                                    <td className="text-sm">{data.student_id?.guardian_name}</td>
                                                                    <td className="text-sm">{data.vehicle?.car_number}</td>
                                                                    <td className="text-sm">{data.vehicle?.driver_name}</td>
                                                                    <td className="text-sm">{data.vehicle?.driver_number}</td>
                                                                    <td className="text-sm">{data.vehicle?.route}</td>
                                                                    <td className="text-sm">{data.vehicle?.start_time}</td>
                                                                    <td className="text-center">
                                                                        <button className="btn btn-primary">Edit</button>
                                                                        <button className="btn btn-danger">Delete</button>
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


export default Transport;




