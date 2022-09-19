import React from "react";
import styles from './Admission.module.css'

const ParentInformationForm = ({nextStep}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <>
            <div id="parents-information-wrap">
                <div className="card">
                    <div className="card-body">
                        <form action="#">
                            {/*Parents Information ***********************************************/}
                            <div className="parents-information">
                                <h4>Parents Information</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Father's Name"
                                               className="form-control mb-3"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Mother's Name"
                                               className="form-control mb-3"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Date of birth"
                                               className="form-control mb-3"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Date of birth"
                                               className="form-control mb-3"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Father's NID"
                                               className="form-control mb-3"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Mother's NID"
                                               className="form-control mb-3"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Father's Occupation"
                                               className="form-control mb-3"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Mother's Occupation"
                                               className="form-control mb-3"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text"
                                               placeholder="Organization name, Designation"
                                               className="form-control mb-3"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text"
                                               placeholder="Organization name, Designation"
                                               className="form-control mb-3"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Father's Education"
                                               className="form-control mb-3"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Mother's Education"
                                               className="form-control mb-3"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Father's Contact"
                                               className="form-control mb-3"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Mother's Contact"
                                               className="form-control mb-3"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Father's E-mail"
                                               className="form-control mb-3"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Mother's E-mail"
                                               className="form-control mb-3"/>
                                    </div>
                                </div>
                            </div>
                            {/*Guardian Information **********************************************/}
                            <div className="guardian-information">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h5 className="mt-3">Guardian Information</h5>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-check mt-3">
                                            <input className="form-check-input" type="checkbox"
                                                   value=""
                                                   id="flexCheckDefault"/>
                                            <label className="form-check-label"
                                                   htmlFor="flexCheckDefault">Save as present
                                                address
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input type="text" placeholder="Name"
                                                   className="form-control mb-3"/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" placeholder="Relation"
                                                   className="form-control mb-3"/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" placeholder="Occupation"
                                                   className="form-control mb-3"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input type="text" placeholder="Yearly Income"
                                                   className="form-control mb-3"/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" placeholder="Contact"
                                                   className="form-control mb-3"/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" placeholder="E-mail"
                                                   className="form-control mb-3"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input type="text" placeholder="Second contact person"
                                                   className="form-control mb-3"/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" placeholder="Relation"
                                                   className="form-control mb-3"/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" placeholder="Number"
                                                   className="form-control mb-3"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <input type="text" placeholder="Yearly Income"
                                                   className="form-control mb-3"/>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="text" placeholder="Second contact person"
                                                   className="form-control mb-3"/>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="text" placeholder="Relation"
                                                   className="form-control mb-3"/>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="text" placeholder="Number"
                                                   className="form-control mb-3"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p>Siblings Information (if any)</p>
                                            <input type="text" placeholder="Student ID"
                                                   className="form-control mb-3"/>
                                            <button className={styles.defaultBtn} onClick={Continue}>Next Step</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )

};


export default ParentInformationForm;




