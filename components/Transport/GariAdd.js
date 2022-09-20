import React from "react";
import styles from './Transport.module.css'
import TransportSideMenu from "./TransportSideMenu";


const AddCars = () => {
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
                                                        <button type="button" className={`${styles.defaultBtn} float-md-end`}>Add</button>
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
                                                                <tr>
                                                                    <th scope="row">25444</th>
                                                                    <td className="text-sm">First driver</td>
                                                                    <td className="text-sm">017.....</td>
                                                                    <td className="text-sm">malibug to mogbazar</td>
                                                                    <td className="text-sm">9:50 am</td>
                                                                    <td className="text-sm">
                                                                        <button type="button" className="btn btn-info">Edit</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">25444</th>
                                                                    <td className="text-sm">First driver</td>
                                                                    <td className="text-sm">017.....</td>
                                                                    <td className="text-sm">malibug to mogbazar</td>
                                                                    <td className="text-sm">9:50 am</td>
                                                                    <td className="text-sm">
                                                                        <button type="button" className="btn btn-info">Edit</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">25444</th>
                                                                    <td className="text-sm">First driver</td>
                                                                    <td className="text-sm">017.....</td>
                                                                    <td className="text-sm">malibug to mogbazar</td>
                                                                    <td className="text-sm">9:50 am</td>
                                                                    <td className="text-sm">
                                                                        <button type="button" className="btn btn-info">Edit</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">25444</th>
                                                                    <td className="text-sm">First driver</td>
                                                                    <td className="text-sm">017.....</td>
                                                                    <td className="text-sm">malibug to mogbazar</td>
                                                                    <td className="text-sm">9:50 am</td>
                                                                    <td className="text-sm">
                                                                        <button type="button" className="btn btn-info">Edit</button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button type="button" className={styles.defaultBtn}>Download</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ======= add cars form =========== */}
                                        <div className="add-cars-form">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-7 mt-3">
                                                        <input type="text" className="form-control" placeholder="Car Number" />
                                                    </div>
                                                    <div className="col-md-7 mt-3">
                                                        <input type="text" className="form-control" placeholder="Driver Name" />
                                                    </div>
                                                    <div className="col-md-7 mt-3"> 
                                                        <input type="text" className="form-control" placeholder="Driver Number" />
                                                    </div>
                                                    <div className="col-md-7 mt-3">
                                                        <input type="text" className="form-control" placeholder="Route Name" />
                                                    </div>
                                                    <div className="col-md-7 mt-3">
                                                        <input type="text" className="form-control" placeholder="Time" />
                                                    </div>
                                                    <div className="mt-3">
                                                        <button type="button" className={styles.defaultBtn}>Save</button>
                                                    </div>
                                                </div>
                                            </form>
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


export default AddCars;



