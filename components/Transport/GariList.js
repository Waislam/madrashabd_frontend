import React from "react";
import styles from './Transport.module.css'
import TransportSideMenu from "./TransportSideMenu";
import { AmPm } from '../Utils/utils'


const GariList = ({gariList, handleAddGari, handleGariUpdate, handleGariDelete}) => {
    return (
        <>
            <section className={styles.transportSection}>
                <div className="container-fluid">
                    <div className="row">
                        <TransportSideMenu/>
                        {/* ========== transport right side body start ============== */}
                        <div className="col-sm-12 cold-md-9 col-lg-9 col-xl-9">
                            <div className="transport">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className={styles.transportBody}>
                                                <div className="row">
                                                    <h2 className="col-md-6 mt-3"><u>Car Details</u></h2>
                                                    <div className="col-md-6 mb-4">
                                                        <button
                                                            type="button"
                                                            className={`${styles.defaultBtn} float-md-end`}
                                                            onClick={()=>handleAddGari()}
                                                        >
                                                            Add
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="cars-table">
                                                    <div className="table-responsive">
                                                        <table className="table table-striped">
                                                            <thead>
                                                            <tr>
                                                                <th scope="col">Car Number</th>
                                                                <th scope="col">Driver Name</th>
                                                                <th scope="col">Driver Number</th>
                                                                <th scope="col">Route</th>
                                                                <th scope="col">Time</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {
                                                                 gariList && gariList?.map((data, index) => (
                                                                    <tr key={index+1}>
                                                                        <th scope="row">{data?.car_number}</th>
                                                                        <td className="text-sm">{data?.driver_name}</td>
                                                                        <td className="text-sm">{data?.driver_number}</td>
                                                                        <td className="text-sm">{data?.route}</td>
                                                                        <td className="text-sm">{AmPm(data?.start_time)}</td>
                                                                        <td className="text-sm">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-info"
                                                                                onClick={()=>handleGariUpdate(data?.id)}
                                                                            >Edit
                                                                            </button>
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-danger"
                                                                                onClick={()=>handleGariDelete(data?.id)}
                                                                            >Delete
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button type="button" className={styles.defaultBtn}>Download
                                                    </button>
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


export default GariList;




