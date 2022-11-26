import React from "react";
import styles from './Boarding.module.css'
import BoardingSidebar from './BoardingSidebar'

const KhabarDistribution = ({ classList }) => {
    console.log("class List: ", classList)

    return (
        <>
            <section className={styles.khabarDistributionSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                            <BoardingSidebar />
                        </div>
                        <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                            <div className="card">
                                <div className="card-body">
                                    <h4>Khabar Distribution</h4>
                                    <hr />
                                    <div className="khabarDistributionForm mb-5">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-3 mb-3">
                                                    <label className="mb-2">Class</label>
                                                    <select
                                                        type="text"
                                                        placeholder="ID number /name"
                                                        className="form-select"
                                                    >
                                                        <option>Select class</option>
                                                        {classList && classList.map((data) => (
                                                            <option value={data.id} key={data.id}>{data?.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="mb-2">Group</label>
                                                    <select className="form-select">
                                                        <option value="1">Select Group</option>
                                                        <option value="1">Shapla Group</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="mb-2">Meal Time</label>
                                                    <select className="form-select">
                                                        <option value="0">Select Meal</option>
                                                        <option value="1">Breakfast</option>
                                                        <option value="2">Lunch</option>
                                                        <option value="3">Dinner</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3 mb-2 mt-2">
                                                    <button type="submit" className={`${styles.searchBtn} mt-4`}>Search</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="khabarDistributionTable">
                                        <div className="table-responsive">
                                            <h4 className="text-center">Static Data</h4>
                                            <hr />
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr className="text-center">
                                                        <th scope="col">#</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Student ID</th>
                                                        <th scope="col">Student Name</th>
                                                        <th scope="col">Class Name</th>
                                                        <th scope="col">BreakFast</th>
                                                        <th scope="col">Lunch</th>
                                                        <th scope="col">Dinner</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="text-center">
                                                        <th scope="row">1</th>
                                                        <td>04-09-2022</td>
                                                        <td>S101</td>
                                                        <td>Waliul Islam</td>
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




