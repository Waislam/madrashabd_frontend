import React from "react";
import styles from './Boarding.module.css'
import BoardingSidebar from './BoardingSidebar'

const KhabarDistribution = () => {
    return (
        <>
            <section className={styles.khabarDistributionSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                            <BoardingSidebar/>
                        </div>
                        <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                            <div className="card">
                                <div className="card-body">
                                    <h4>Khabar Distribution</h4>
                                    <hr/>
                                    <div className="khabarDistributionForm mb-5">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-5 mb-3">
                                                    <input
                                                        type="text"
                                                        placeholder="ID number /name"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-5 mb-3">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option value="1" selected>Class</option>
                                                        <option value="2">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-2 mb-3">
                                                    <button type="submit" className={styles.searchBtn}>Search</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="khabarDistributionTable">
                                        <div className="table-responsive">
                                            <h4 className="text-center">Static Data</h4>
                                            <hr/>
                                            <table className="table table-bordered table-bordered">
                                                <thead>
                                                <tr className="text-center">
                                                    <th scope="col">#</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Student ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">BreakFast</th>
                                                    <th scope="col">Lunch</th>
                                                    <th scope="col">Dinner</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="text-center">
                                                    <th scope="row">1</th>
                                                    <td>04-09-2022</td>
                                                    <td>Patoto</td>
                                                    <td>20k</td>
                                                    <td>400</td>
                                                    <td>20k</td>
                                                    <td>0k</td>
                                                    <td>0k</td>
                                                </tr>

                                                </tbody>
                                            </table>
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


export default KhabarDistribution;




