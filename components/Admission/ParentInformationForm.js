import React from "react";
import styles from './Admission.module.css'
import {useForm} from "react-hook-form";
import {useAdmissionFormData} from "../../context/AdmissionFormProvider";

const ParentInformationForm = ({nextStep}) => {

    const {setAdmissionFormValues, admissionData} = useAdmissionFormData();

    const {
        handleSubmit,
        formState: {errors},
        register,
    } = useForm({mode: "all"});

    const onSubmit = (values) => {
        setAdmissionFormValues(values);
        nextStep();
    };

    const Continue = e => {
        e.preventDefault();
        nextStep();
    };

    return (
        <>
            <div id="parents-information-wrap">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/*Parents Information ***********************************************/}
                            <div className="parents-information">
                                <h4>Parents Information</h4>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Father's Name"
                                                className="form-control"
                                                id="parents_information_father_name"
                                                {...register("parents_information_father_name", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_father_name && (
                                                <p className="text-danger">Father's name is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Mother's Name"
                                                className="form-control"
                                                id="parents_information_mother_name"
                                                {...register("parents_information_mother_name", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_mother_name && (
                                                <p className="text-danger">Mother's name is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <input
                                                type="date"
                                                placeholder="Mother's Name"
                                                className="form-control"
                                                id="parents_information_father_date_of_birth"
                                                {...register("parents_information_father_date_of_birth", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_father_date_of_birth && (
                                                <p className="text-danger">Date of birth is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <input
                                                type="date"
                                                placeholder="Mother's Name"
                                                className="form-control"
                                                id="parents_information_mother_date_of_birth"
                                                {...register("parents_information_mother_date_of_birth", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_mother_date_of_birth && (
                                                <p className="text-danger">Date of birth is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <input
                                                type="name"
                                                placeholder="Father's NID"
                                                className="form-control"
                                                id="parents_information_father_nid"
                                                {...register("parents_information_father_nid", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_father_nid && (
                                                <p className="text-danger">Father's NID is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <input
                                                type="name"
                                                placeholder="Mothers's NID"
                                                className="form-control"
                                                id="parents_information_mother_nid"
                                                {...register("parents_information_mother_nid", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_mother_nid && (
                                                <p className="text-danger">Mother's NID is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <input
                                                type="name"
                                                placeholder="Father's Occupation"
                                                className="form-control"
                                                id="parents_information_father_occupation"
                                                {...register("parents_information_father_occupation", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_father_occupation && (
                                                <p className="text-danger">Father's occupation is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <input
                                                type="name"
                                                placeholder="Mother's Occupation"
                                                className="form-control"
                                                id="parents_information_mother_occupation"
                                                {...register("parents_information_mother_occupation", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_mother_occupation && (
                                                <p className="text-danger">Mother's occupation is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            placeholder="Organization name, Designation"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            placeholder="Organization name, Designation"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6  mb-3">
                                        <input
                                            type="text"
                                            placeholder="Father's Education"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <input
                                            type="text"
                                            placeholder="Mother's Education"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6  mb-3">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Father's Contact"
                                                className="form-control"
                                                id="parents_information_father_contact"
                                                {...register("parents_information_father_contact", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_father_contact && (
                                                <p className="text-danger">Father's Contact is required</p>
                                            )}
                                        </div>

                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Mother's Contact"
                                                className="form-control"
                                                id="parents_information_mother_contact"
                                                {...register("parents_information_mother_contact", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_mother_contact && (
                                                <p className="text-danger">Mother's Contact is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            placeholder="Father's E-mail"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            placeholder="Mother's E-mail"
                                            className="form-control"
                                        />
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
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefault">
                                                Save as present address
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4  mb-3">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-4  mb-3">
                                            <input
                                                type="text"
                                                placeholder="Relation"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="text"
                                                placeholder="Occupation"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                placeholder="Yearly Income"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Guardian Contact"
                                                    className="form-control"
                                                    id="parents_information_guardian_contact"
                                                    {...register("parents_information_guardian_contact", {required: true})}
                                                />
                                            </div>
                                            <div>
                                                {errors.parents_information_guardian_contact && (
                                                    <p className="text-danger">Guardian Contact is required</p>
                                                )}

                                            </div>
                                        </div>
                                        <div className="col-md-4  mb-3">
                                            <input
                                                type="text"
                                                placeholder="E-mail"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="text"
                                                placeholder="Second contact person"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="text"
                                                placeholder="Relation"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="text"
                                                placeholder="Number"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <input
                                                type="text"
                                                placeholder="Yearly Income"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <input
                                                type="text"
                                                placeholder="Second contact person"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <input
                                                type="text"
                                                placeholder="Relation"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <input
                                                type="text"
                                                placeholder="Number"
                                                className="form-control"
                                            />
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




