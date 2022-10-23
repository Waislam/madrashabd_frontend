import React,{useEffect, useState} from "react";
import styles from './OldAdmission.module.css'
import AdmissionSidebar from './AdmissionSidebar'
import { useForm } from "react-hook-form";
import { getStudentDetailById } from '../../pages/api/StudentAPI/students_api';
import UpdateAdmissionForm from "./UpdateAdmissionForm";


const OldAdmission = ({madrashaData}) => {
    const [studentDetails, setStudentDetails] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit} = useForm();

    // Function for handle search form
    const handleSearch = data => {
        setIsLoading(true)
        const searchValue = data.search;

        getStudentDetailById(searchValue)
            .then(data => {
                setStudentDetails(data.data);
                setIsLoading(false);
            });

    }

    if(isLoading) {
        return <h1>loading......</h1>
    }

    return (
        <section className={styles.oldAdmissionSection}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <AdmissionSidebar/>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                        <div className="admission-form">
                            {/* Start search form section */}
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(handleSearch)}>
                                        <div className="input-group my-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search student by id"
                                                {...register("search")}
                                            />
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="submit"
                                                id="search-btn"
                                            >Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* End search form section */}

                            {/* Start update form section */}
                            {
                                (Object.keys(studentDetails).length === 0) ?
                                    <p>Show something</p>
                                    :
                                    <UpdateAdmissionForm
                                    madrashaData={madrashaData}
                                    studentDetails={studentDetails}
                                />
                            }
                            {/* End update form section */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default OldAdmission;




