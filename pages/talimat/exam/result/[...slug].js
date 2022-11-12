import React from "react";
import Layout from "../../../../components/Layout/Layout";

const ResultSheetPage = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="academicInfo text-center mb-4">
                            <h3 style={{fontWeight: "bold"}}>Madrash Name</h3>
                            <h5>Phone : +88 <span className="mx-2"/> E-mail : @gmail.com</h5>
                            <h6>Webite : ikhwanBD</h6>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <dl className="row">
                            <dt className="col-sm-6">
                                Name of Student
                            </dt>
                            <dd className="col-sm-6">
                                <span className="mx-2">:</span>
                                Sakib Al Hasan
                            </dd>
                            <dt className="col-sm-6">
                                Student ID
                            </dt>
                            <dd className="col-sm-6">
                                <span className="mx-2">:</span>
                                100
                            </dd>
                            <dt className="col-sm-6">
                                Student Roll
                            </dt>
                            <dd className="col-sm-6">
                                <span className="mx-2">:</span>
                                9
                            </dd>
                        </dl>
                    </div>
                    <div className="col-md-6">
                        <dl className="row">
                            <dt className="col-sm-6">
                                Date
                            </dt>
                            <dd className="col-sm-6">
                                <span className="mx-2">:</span>
                                11-11-2022
                            </dd>
                            <dt className="col-sm-6">
                                Academic Session
                            </dt>
                            <dd className="col-sm-6">
                                <span className="mx-2">:</span>
                                2020-2022
                            </dd>
                            <dt className="col-sm-6">
                                Exam Term
                            </dt>
                            <dd className="col-sm-6">
                                <span className="mx-2">:</span>
                                Do noting
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                <tr className="text-center">
                                    <th scope="col">#</th>
                                    <th scope="col">Subject Name</th>
                                    <th scope="col">Marks</th>
                                    <th scope="col">Teacher</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="text-center">
                                    <th scope="row">1</th>
                                    <td>Bukhari First</td>
                                    <td>80</td>
                                    <td>Sakib</td>
                                </tr>
                                <tr className="text-center">
                                    <th scope="row">2</th>
                                    <td>Bukhari Second</td>
                                    <td>90</td>
                                    <td>Tamim</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <p>Mohotami singnature and seal</p>
                        <p>Date : 11-11-2022</p>
                    </div>
                    <div className="col-md-6">
                        <div className="float-end">
                            <p>Talimat singnature and seal</p>
                            <p>Date : 11-11-2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export default ResultSheetPage;


ResultSheetPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

