import React, { useState } from "react";
import styles from './Admission.module.css'
import AdmissionSidebar from './AdmissionSidebar'
import StudentDetailForm from "./StudentDetailForm";
import ParentInformationForm from "./ParentInformationForm";
import PreviousInstitutionForm from "./PreviousInstitutionForm";
import AdmissionForm from "./AdmissionForm";

const Admission = (props) => {
    return (
        <>
            <section className={styles.admissionSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <AdmissionSidebar />
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            {/*Student Details*/}
                            <AdmissionForm session={props.session}
                                deapartments={props.deapartments}
                                classes={props.classes}
                                groups={props.groups}
                                shifts={props.shifts}
                                session_year={props.session_year}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};


export default Admission;




