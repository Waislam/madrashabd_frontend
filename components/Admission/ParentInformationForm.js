import React from "react";
import styles from './Admission.module.css'
import {useForm} from "react-hook-form";
import {useAdmissionFormData} from "../../context/AdmissionFormProvider";

const ParentInformationForm = (props) => {
    const {nextStep, prevStep} = props
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
                                                defaultValue={admissionData.parents_information_father_name}
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
                                                defaultValue={admissionData.parents_information_mother_name}
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
                                                defaultValue={admissionData.parents_information_father_date_of_birth}
                                                placeholder="Father's Date of birth"
                                                className="form-control"
                                                id="parents_information_father_date_of_birth"
                                                {...register("parents_information_father_date_of_birth")}
                                            />
                                        </div>
                                        {/*<div>*/}
                                        {/*    {errors.parents_information_father_date_of_birth && (*/}
                                        {/*        <p className="text-danger">Date of birth is required</p>*/}
                                        {/*    )}*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <input
                                                type="date"
                                                defaultValue={admissionData.parents_information_mother_date_of_birth}
                                                placeholder="Mother's Date Of Birth"
                                                className="form-control"
                                                id="parents_information_mother_date_of_birth"
                                                {...register("parents_information_mother_date_of_birth")}
                                            />
                                        </div>
                                        {/*<div>*/}
                                        {/*    {errors.parents_information_mother_date_of_birth && (*/}
                                        {/*        <p className="text-danger">Date of birth is required</p>*/}
                                        {/*    )}*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <input
                                                type="name"
                                                defaultValue={admissionData.parents_information_father_nid}
                                                placeholder="Father's NID"
                                                className="form-control"
                                                id="parents_information_father_nid"
                                                {...register("parents_information_father_nid")}
                                            />
                                        </div>
                                        {/*<div>*/}
                                        {/*    {errors.parents_information_father_nid && (*/}
                                        {/*        <p className="text-danger">Father's NID is required</p>*/}
                                        {/*    )}*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <input
                                                type="name"
                                                defaultValue={admissionData.parents_information_mother_nid}
                                                placeholder="Mothers's NID"
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
                                            <select
                                                name="parents_information_father_occupation"
                                                defaultValue={admissionData.parents_information_father_occupation}
                                                className="form-select"
                                                id="parents_information_father_occupation"
                                                {...register("parents_information_father_occupation", {required: true})}
                                            >
                                                <option value=''>Choose Father occupation ...</option>
                                                <option value="teacher">Teacher</option>
                                                <option value="farmer">Farmer</option>
                                                <option value="doctor">Doctor</option>
                                                <option value="police">Police</option>
                                                <option value="businessman">Businessman</option>
                                                <option value="non-govt-employee">Non govt. employee</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            {errors.parents_information_father_occupation && (
                                                <p className="text-danger">Father's occupation is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <select
                                                name="parents_information_mother_occupation"
                                                defaultValue={admissionData.parents_information_mother_occupation}
                                                className="form-select"
                                                id="parents_information_mother_occupation"
                                                {...register("parents_information_mother_occupation", {required: true})}
                                            >
                                                <option value=''>Choose Mother occupation ...</option>
                                                <option value="teacher">Teacher</option>
                                                <option value="farmer">Farmer</option>
                                                <option value="doctor">Doctor</option>
                                                <option value="police">Police</option>
                                                <option value="businessman">Businessman</option>
                                                <option value="non-govt-employee">Non govt. employee</option>
                                                <option value="other">Other</option>
                                            </select>
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
                                        <select
                                            name="parents_information_father_education"
                                            defaultValue={admissionData.parents_information_father_education}
                                            className="form-select"
                                            id="parents_information_father_education"
                                            {...register("parents_information_father_education", {required: true})}
                                        >
                                            <option value=''>Choose Father Education ...</option>
                                            <option value="literate">Literate</option>
                                            <option value="ssc/equivalent">SSC/equivalent</option>
                                            <option value="hsc/equivalent">HSC/equivalent</option>
                                            <option value="hons/equivalent">Hons/equivalent</option>
                                            <option value="m.a./equivalent">M.A./equivalent</option>
                                            <option value="higher/equivalent">Higher/equivalent</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6  mb-3">
                                        <select
                                            name="parents_information_mother_education"
                                            defaultValue={admissionData.parents_information_mother_education}
                                            className="form-select"
                                            id="parents_information_mother_education"
                                            {...register("parents_information_mother_education", {required: true})}
                                        >
                                            <option value=''>Choose Mother Education ...</option>
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
                                            <input
                                                type="text"
                                                defaultValue={admissionData.parents_information_father_contact}
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
                                                defaultValue={admissionData.parents_information_mother_contact}
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
                                            defaultValue={admissionData.father_email}
                                            placeholder="Father's E-mail"
                                            className="form-control"
                                            id="father_email"
                                            {...register("father_email")}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.mother_email}
                                            placeholder="Mother's E-mail"
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
                                                defaultValue={admissionData.guardian_name}
                                                placeholder="Guardian Name"
                                                className="form-control"
                                                id="guardian_name"
                                                {...register("guardian_name", {required: true})}
                                            />
                                        </div>
                                        <div className="col-md-4  mb-3">
                                            <select
                                                name="guardian_relation"
                                                defaultValue={admissionData.guardian_relation}
                                                className="form-select"
                                                id="guardian_relation"
                                                {...register("guardian_relation", {required: true})}
                                            >
                                                <option value=''>Choose guardian relation ...</option>
                                                <option value="father">Father</option>
                                                <option value="mother">Mother</option>
                                                <option value="brother">Brother</option>
                                                <option value="sister">Sister</option>
                                                <option value="uncle">Uncle</option>
                                                <option value="cousine">Cousine</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <select
                                                name="guardian_occupation"
                                                defaultValue={admissionData.guardian_occupation}
                                                className="form-select"
                                                id="guardian_occupation"
                                                {...register("guardian_occupation", {required: true})}
                                            >
                                                <option value=''>Guardian occupation ...</option>
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
                                                <input
                                                    type="text"
                                                    defaultValue={admissionData.guardian_contact}
                                                    placeholder="Guardian Contact"
                                                    className="form-control"
                                                    id="guardian_contact"
                                                    {...register("guardian_contact", {required: true})}
                                                />
                                            </div>
                                            <div>
                                                {errors.guardian_contact && (
                                                    <p className="text-danger">Guardian Contact is required</p>
                                                )}

                                            </div>
                                        </div>
                                        <div className="col-md-4  mb-3">
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
                                            <select
                                                name="other_contact_person_relation"
                                                defaultValue={admissionData.other_contact_person_relation}
                                                className="form-select"
                                                id="other_contact_person_relation"
                                                {...register("other_contact_person_relation", {required: true})}
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
                                    {/*<div className="row">*/}
                                    {/*    <div className="col-md-3 mb-3">*/}
                                    {/*        <input*/}
                                    {/*            type="text"*/}
                                    {/*            placeholder="Yearly Income"*/}
                                    {/*            className="form-control"*/}
                                    {/*        />*/}
                                    {/*    </div>*/}
                                    {/*    <div className="col-md-3 mb-3">*/}
                                    {/*        <input*/}
                                    {/*            type="text"*/}
                                    {/*            placeholder="Second contact person"*/}
                                    {/*            className="form-control"*/}
                                    {/*        />*/}
                                    {/*    </div>*/}
                                    {/*    <div className="col-md-3 mb-3">*/}
                                    {/*        <input*/}
                                    {/*            type="text"*/}
                                    {/*            placeholder="Relation"*/}
                                    {/*            className="form-control"*/}
                                    {/*        />*/}
                                    {/*    </div>*/}
                                    {/*    <div className="col-md-3 mb-3">*/}
                                    {/*        <input*/}
                                    {/*            type="text"*/}
                                    {/*            placeholder="Number"*/}
                                    {/*            className="form-control"*/}
                                    {/*        />*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <div className="row">
                                        <div className="col">
                                            <p>Siblings Information (if any)</p>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.sibling_id}
                                                placeholder="Student ID"
                                                className="form-control mb-3"
                                                id="sibling_id"
                                                {...register("sibling_id")}
                                            />
                                            <button className={styles.defaultBtn}>Next Step</button>
                                            <button className={styles.defaultBtn} onClick={prevStep}>Previous Step
                                            </button>
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




