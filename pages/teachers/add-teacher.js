import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import styles from '../../components/Teachers/TeacherList.module.css'

const AddTeacherPage = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <section className="teacherStaffDetails mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h4>Teacher / Staff Details</h4>
                                <hr/>
                                <form action="#" method="Post">
                                    {/*Teacher*/}
                                    <div className="teacher mb-3">
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Name"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Father Name"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Mother Name"
                                                       className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <input type="date"
                                                       placeholder="Name"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <select className="form-select">
                                                    <option selected>Gender</option>
                                                    <option value="1">Man</option>
                                                    <option value="2">Women</option>
                                                    <option value="3">Others</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Religion"
                                                       className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-floating">
                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Leave a comment here" id="floatingTextarea2"
                                                    />
                                                    <label htmlFor="floatingTextarea2">Marital Status</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*Present Address*/}
                                    <div className="presentAddress mb-3">
                                        <h4>Present Address</h4>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Division"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="District "
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Thana "
                                                       className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Post Office"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Post Code"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Address"
                                                       className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*Permanent Address*/}
                                    <div className="permanentAddress mb-3">
                                        <h4>Permanent Address</h4>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Division"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="District "
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Thana "
                                                       className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Post Office"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Post Code "
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Address"
                                                       className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/*Education*/}
                                    <div className="education mb-3">
                                        <h4>Education</h4>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Division"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Degree "
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input type="text"
                                                       placeholder="Session "
                                                       className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <input type="text"
                                                       placeholder="Result (GPA)"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <input type="text"
                                                       placeholder="Result (Marks)"
                                                       className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <button type="Submit" className={styles.addButton}>Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    {/*Contact Section */}
                    <section className="contactSection mb-5">
                        <div className="card">
                            <div className="card-body">
                                <h4>Contact</h4>
                                <hr/>
                                <form action="#">
                                    {/*contact*/}
                                    <div className="contact mb-4">
                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <input type="tel"
                                                       placeholder="Phone"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <input type="tel"
                                                       placeholder="Home Phone"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <input type="email"
                                                       placeholder="E-mail"
                                                       className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*Other Details*/}
                                    <div className="otherDetails mb-4">
                                        <h4>Other Details</h4>
                                        <div className="row">
                                            <div className="col-md-4 mb-2">
                                                <input type="text"
                                                       placeholder="NID"
                                                       className="form-control mb-3"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <input type="text"
                                                       placeholder="Birth Certificate"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <input type="text"
                                                       placeholder="Nationality"
                                                       className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-2">
                                                <input type="text"
                                                       placeholder="Blood Group"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <input type="text"
                                                       placeholder="Department"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <input type="text"
                                                       placeholder="Designation"
                                                       className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*working duration*/}
                                    <div className="workingDuration mb-4">
                                        <h4>Working Duration</h4>
                                        <div className="form-check mb-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox" value=""
                                                id="flexCheckChecked" checked/>
                                            <label className="form-check-label"
                                                   htmlFor="flexCheckChecked">
                                                Check the box if you are working
                                            </label>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="">Start Date</label>
                                                <input type="date"
                                                       className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="">End Date</label>
                                                <input type="date"
                                                       className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*Experience*/}
                                    <div className="experience mb-4">
                                        <h4>Experience</h4>
                                        <div className="form-floating mb-3">
                                        <textarea className="form-control"
                                                  placeholder="Leave a comment here"
                                                  id="floatingTextarea"/>
                                            <label htmlFor="floatingTextarea">I can do nothing but leran new
                                                thing</label>
                                        </div>
                                        <button type="Submit" className={styles.addButton}>Add</button>
                                    </div>
                                    {/*skill*/}
                                    <div className="skill mb-4">
                                        <h4>Skill</h4>
                                        <div className="form-floating mb-3">
                                        <textarea className="form-control"
                                                  placeholder="Leave a comment here"
                                                  id="floatingTextarea"/>
                                            <label htmlFor="floatingTextarea">I can do nothing but leran new
                                                thing</label>
                                        </div>
                                        <button type="Submit" className={styles.addButton}>Add</button>
                                    </div>
                                    {/*imageUpload*/}
                                    <div className="imageUpload mb-4">
                                        <div className="mb-3">
                                            <label htmlFor="formFile" className="form-label">Image Upload</label>
                                            <input className="form-control" type="file" id="formFile"/>
                                        </div>
                                    </div>
                                    <button type="Submit" className={styles.addButton}>Save</button>
                                </form>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
};


export default AddTeacherPage;


AddTeacherPage.getLayout = (page) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
};
