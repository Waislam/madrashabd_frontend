import React from "react";
import styles from './Admission.module.css'
import { useForm } from "react-hook-form";
import { useAdmissionFormData } from "../../context/AdmissionFormProvider";

const ParentInformationForm = (props) => {
    const { nextStep, prevStep } = props
    const { setAdmissionFormValues, admissionData } = useAdmissionFormData();

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm({ mode: "all" });

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
                                            <label htmlFor="parents_information_father_name" className="form-label">Father's Name</label>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.parents_information_father_name}
                                                placeholder="Father Name"
                                                className="form-control"
                                                id="parents_information_father_name"
                                                {...register("parents_information_father_name", { required: true })}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_father_name && (
                                                <p className="text-danger">Father name is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <label htmlFor="parents_information_mother_name" className="form-label">Mother's Name</label>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.parents_information_mother_name}
                                                placeholder="Mother Name"
                                                className="form-control"
                                                id="parents_information_mother_name"
                                                {...register("parents_information_mother_name", { required: true })}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_mother_name && (
                                                <p className="text-danger">Mother name is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="parents_information_father_date_of_birth" className="form-label">Father's Date of birth</label>
                                            <input
                                                type="date"
                                                defaultValue={admissionData.parents_information_father_date_of_birth}
                                                placeholder="Father Date of birth"
                                                className="form-control"
                                                id="parents_information_father_date_of_birth"
                                                {...register("parents_information_father_date_of_birth")}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="parents_information_mother_date_of_birth" className="form-label">Mother's Date of birth</label>
                                            <input
                                                type="date"
                                                defaultValue={admissionData.parents_information_mother_date_of_birth}
                                                placeholder="Mother Date Of Birth"
                                                className="form-control"
                                                id="parents_information_mother_date_of_birth"
                                                {...register("parents_information_mother_date_of_birth")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="parents_information_father_nid" className="form-label">Father's NID</label>
                                            <input
                                                type="name"
                                                defaultValue={admissionData.parents_information_father_nid}
                                                placeholder="Father NID"
                                                className="form-control"
                                                id="parents_information_father_nid"
                                                {...register("parents_information_father_nid", { required: true })}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_father_nid && (
                                                <p className="text-danger">Father's NID is Required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="parents_information_mother_nid" className="form-label">Mother's NID</label>
                                            <input
                                                type="name"
                                                defaultValue={admissionData.parents_information_mother_nid}
                                                placeholder="Mothers NID"
                                                className="form-control"
                                                id="parents_information_mother_nid"
                                                {...register("parents_information_mother_nid")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="parents_information_father_occupation" className="form-label">Father's Occupation</label>
                                            <select
                                                name="parents_information_father_occupation"
                                                defaultValue={admissionData.parents_information_father_occupation}
                                                className="form-select"
                                                id="parents_information_father_occupation"
                                                {...register("parents_information_father_occupation", { required: true })}
                                            >
                                                <option value=''>Choose Father occupation ...</option>
                                                <option value="teacher">Teacher</option>
                                                <option value="farmer">Farmer</option>
                                                <option value="doctor">Doctor</option>
                                                <option value="businessman">Businessman</option>
                                                <option value="non-govt-employee">Non govt. employee</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            {errors.parents_information_father_occupation && (
                                                <p className="text-danger">Father occupation is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="parents_information_mother_occupation" className="form-label">Mother's Occupation</label>
                                            <select
                                                name="parents_information_mother_occupation"
                                                defaultValue={admissionData.parents_information_mother_occupation}
                                                className="form-select"
                                                id="parents_information_mother_occupation"
                                                {...register("parents_information_mother_occupation", { required: true })}
                                            >
                                                <option value=''>Choose Mother occupation ...</option>
                                                <option value="teacher">Teacher</option>
                                                <option value="farmer">Farmer</option>
                                                <option value="doctor">Doctor</option>
                                                <option value="businessman">Businessman</option>
                                                <option value="non-govt-employee">Non govt. employee</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            {errors.parents_information_mother_occupation && (
                                                <p className="text-danger">Mother occupation is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="parents_information_father_organization_with_designation" className="form-label">Father's Organization</label>
                                        <input
                                            type="text"
                                            placeholder="Organization name, Designation"
                                            className="form-control"
                                            id="parents_information_father_organization_with_designation"
                                            {...register("parents_information_father_organization_with_designation")}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="parents_information_father_organization_with_designation" className="form-label">Mother's Organization</label>
                                        <input
                                            type="text"
                                            placeholder="Organization name, Designation"
                                            className="form-control"
                                            id="parents_information_mother_organization_with_designation"
                                            {...register("parents_information_mother_organization_with_designation")}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6  mb-3">
                                        <label htmlFor="parents_information_father_education" className="form-label">Father's Education</label>
                                        <select
                                            name="parents_information_father_education"
                                            defaultValue={admissionData.parents_information_father_education}
                                            className="form-select"
                                            id="parents_information_father_education"
                                            {...register("parents_information_father_education")}
                                        >
                                            <option value="literate">Choose Father Education</option>
                                            <option value="literate">Literate</option>
                                            <option value="ssc/equivalent">SSC/equivalent</option>
                                            <option value="hsc/equivalent">HSC/equivalent</option>
                                            <option value="hons/equivalent">Hons/equivalent</option>
                                            <option value="ma/equivalent">M.A./equivalent</option>
                                            <option value="higher/equivalent">Higher/equivalent</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <label htmlFor="parents_information_mother_education" className="form-label">Mother's Education</label>
                                        <select
                                            name="parents_information_mother_education"
                                            defaultValue={admissionData.parents_information_mother_education}
                                            className="form-select"
                                            id="parents_information_mother_education"
                                            {...register("parents_information_mother_education")}
                                        >
                                            <option value="literate">Choose Mother Education</option>
                                            <option value="literate">Literate</option>
                                            <option value="ssc/equivalent">SSC/equivalent</option>
                                            <option value="hsc/equivalent">HSC/equivalent</option>
                                            <option value="hons/equivalent">Hons/equivalent</option>
                                            <option value="m.a./equivalent">M.A./equivalent</option>
                                            <option value="higher/equivalent">Higher/equivalent</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6  mb-3">
                                        <div>
                                            <label htmlFor="parents_information_father_contact" className="form-label">Father's Contact</label>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.parents_information_father_contact}
                                                placeholder="Father Contact"
                                                className="form-control"
                                                id="parents_information_father_contact"
                                                {...register("parents_information_father_contact", { required: true })}
                                            />
                                        </div>
                                        <div>
                                            {errors.parents_information_father_contact && (
                                                <p className="text-danger">Father Contact is required</p>
                                            )}
                                        </div>

                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <div>
                                            <label htmlFor="parents_information_mother_contact" className="form-label">Mother's Contact</label>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.parents_information_mother_contact}
                                                placeholder="Mother Contact"
                                                className="form-control"
                                                id="parents_information_mother_contact"
                                                {...register("parents_information_mother_contact")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="father_email" className="form-label">Father's Email</label>
                                        <input
                                            type="text"
                                            defaultValue={admissionData.father_email}
                                            placeholder="Father E-mail"
                                            className="form-control"
                                            id="father_email"
                                            {...register("father_email")}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="mother_email" className="form-label">Mother's Email</label>
                                        <input
                                            type="text"
                                            defaultValue={admissionData.mother_email}
                                            placeholder="Mother E-mail"
                                            className="form-control"
                                            id="mother_email"
                                            {...register("mother_email")}
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
                                    <div className="row">
                                        <div className="col-md-4  mb-3">
                                            <label htmlFor="guardian_name" className="form-label">Guardian Name</label>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.guardian_name}
                                                placeholder="Guardian Name"
                                                className="form-control"
                                                id="guardian_name"
                                                {...register("guardian_name", { required: "Guarding Name is required" })}
                                            />
                                            <p className="text-danger">{errors?.guardian_name?.message}</p>
                                        </div>
                                        <div className="col-md-4  mb-3">
                                            <label htmlFor="guardian_relation" className="form-label">Guardian Relation</label>
                                            <select
                                                name="guardian_relation"
                                                defaultValue={admissionData.guardian_relation}
                                                className="form-select"
                                                id="guardian_relation"
                                                {...register("guardian_relation", { required: "This field is required" })}
                                            >
                                                <option value="null">Choose guardian relation ...</option>
                                                <option value="father">Father</option>
                                                <option value="mother">Mother</option>
                                                <option value="brother">Brother</option>
                                                <option value="sister">Sister</option>
                                                <option value="uncle">Uncle</option>
                                                <option value="cousine">Cousine</option>
                                            </select>
                                            <p className="text-danger">{errors?.guardian_relation?.message}</p>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="guardian_occupation" className="form-label">Guardian Occupation</label>
                                            <select
                                                name="guardian_occupation"
                                                defaultValue={admissionData.guardian_occupation}
                                                className="form-select"
                                                id="guardian_occupation"
                                                {...register("guardian_occupation")}
                                            >
                                                <option value="null">Guardian occupation</option>
                                                <option value="teacher">Teacher</option>
                                                <option value="farmer">Farmer</option>
                                                <option value="doctor">Doctor</option>
                                                <option value="police">Police</option>
                                                <option value="businessman">Businessman</option>
                                                <option value="non-govt-employee">Non govt. employee</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="guardian_yearly_income" className="form-label">Guardian Annual Income</label>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.guardian_yearly_income}
                                                placeholder="Yearly Income"
                                                className="form-control"
                                                id="guardian_yearly_income"
                                                {...register("guardian_yearly_income")}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <label htmlFor="guardian_contact" className="form-label">Guardian Contact</label>
                                                <input
                                                    type="text"
                                                    defaultValue={admissionData.guardian_contact}
                                                    placeholder="Guardian Contact"
                                                    className="form-control"
                                                    id="guardian_contact"
                                                    {...register("guardian_contact", { required: true })}
                                                />
                                            </div>
                                            <div>
                                                {errors.guardian_contact && (
                                                    <p className="text-danger">Guardian Contact is required</p>
                                                )}

                                            </div>
                                        </div>
                                        <div className="col-md-4  mb-3">
                                            <label htmlFor="guardian_email" className="form-label">Guardian Email</label>
                                            <input
                                                type="email"
                                                defaultValue={admissionData.guardian_email}
                                                placeholder="E-mail"
                                                className="form-control"
                                                id="guardian_email"
                                                {...register("guardian_email")}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="other_contact_person" className="form-label">Other Contact</label>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.other_contact_person}
                                                placeholder="Other contact person"
                                                className="form-control"
                                                id="other_contact_person"
                                                {...register("other_contact_person")}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="other_contact_person_relation" className="form-label">Other Guardian Relation</label>
                                            <select
                                                name="other_contact_person_relation"
                                                defaultValue={admissionData.other_contact_person_relation}
                                                className="form-select"
                                                id="other_contact_person_relation"
                                                {...register("other_contact_person_relation")}
                                            >
                                                <option value=''>Other Guardian Relation ...</option>
                                                <option value="father">Father</option>
                                                <option value="mother">Mother</option>
                                                <option value="brother">Brother</option>
                                                <option value="sister">Sister</option>
                                                <option value="uncle">Uncle</option>
                                                <option value="cousine">Cousine</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="other_contact_person_contact" className="form-label">Other Guardian Another Contact</label>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.other_contact_person_contact}
                                                placeholder="Other person contact"
                                                className="form-control"
                                                id="other_contact_person_contact"
                                                {...register("other_contact_person_contact")}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="sibling_id" className="form-label">Sibling</label>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.sibling_id}
                                                placeholder="Sibling ID"
                                                className="form-control mb-3"
                                                id="sibling_id"
                                                {...register("sibling_id")}
                                            />
                                            <div className="d-flex justify-content-between">
                                                <button className={styles.defaultBtn} onClick={prevStep}>Previous Step</button>
                                                <button className={styles.defaultBtn}>Next Step</button>
                                            </div>
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




