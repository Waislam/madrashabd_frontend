import React, {useState} from "react";
import styles from './Admission.module.css'

import {useForm} from "react-hook-form";
import {useAdmissionFormData} from "../../context/AdmissionFormProvider";
import api from "../../pages/api/api";

const StudentDetailForm = (props) => {
    const [loading, setLoading] = useState(false)
    const {
        nextStep, prevStep,
        divisionList, districtList, postOfficeList,
        postCodeList, thanaList,
        setSelectPresentAddressDistrict, setSelectPresentAddressDivision,
        setSelectPresentAddressThana, setSelectPresentAddressPostCode,
        setSelectPresentAddressPostOffice,
        setSelectPermanentAddressDistrict, setSelectPermanentAddressDivision,
        setSelectPermanentAddressPostCode, setSelectPermanentAddressPostOffice,
        setSelectPermanentAddressThana,
    } = props
    const {setAdmissionFormValues, admissionData} = useAdmissionFormData();
    // console.log('admissionData', admissionData);
    // console.log('divisionList', divisionList);

    const {
        handleSubmit,
        setError,
        formState: {errors},
        register,
    } = useForm({mode: "onChange"});

    const onSubmit = (values) => {
        setLoading(true)
        console.log("values", values)

        // check passport number
        api.get(`students/check-passport/${values.passport_number}/`)
            .then((response) => {
                console.log("result", response)
                if (response.data.status) {
                    setError("passport_number", {
                        type: "focus",
                        message: 'This passport number already exist !!'
                    }, {shouldFocus: true})
                    setLoading(false)
                } else {

                    api.get(`students/check-nid/${values.student_nid}/`)
                        .then((response) => {
                            if (response.data.status) {
                                setError("student_nid", {
                                    type: "focus",
                                    message: 'This NID number already exist !!'
                                }, {shouldFocus: true})
                            } else {
                                setAdmissionFormValues(values);
                                nextStep();
                            }
                            setLoading(false)
                        })
                }
            })
    };

    const Continue = e => {
        e.preventDefault();
        nextStep();
    };

    console.log("error", errors);

    return (
        <>
            <div className="student-details">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Student Details ****************** */}
                            <div className="student-detail">
                                <h4>Student Details</h4>
                                <hr/>
                                <div className="mb-4">
                                    <div>
                                        <input
                                            type="text"
                                            defaultValue={admissionData.full_name}
                                            className="form-control"
                                            placeholder="Full Name"
                                            id="full_name"
                                            {...register("full_name", {required: true})}
                                        />
                                    </div>
                                    <div>
                                        {errors.full_name && (
                                            <p className="text-danger">Full Name is required</p>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <input
                                                type="date"
                                                defaultValue={admissionData.date_of_birth}
                                                className="form-control"
                                                placeholder="Date of Birth"
                                                id="date_of_birth"
                                                {...register("date_of_birth", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.date_of_birth && (
                                                <p className="text-danger">Date of birth is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.age}
                                                className="form-control"
                                                placeholder="Age"
                                                id="age"
                                                {...register("age", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.age && (
                                                <p className="text-danger">Age is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.birth_certificate}
                                                className="form-control"
                                                placeholder="Birth Certificate"
                                                id="birth_certificate"
                                                {...register("birth_certificate", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.birth_certificate && (
                                                <p className="text-danger">Birth Certificate is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.passport_number}
                                                className="form-control"
                                                placeholder="Passport"
                                                id="passport_number"
                                                {...register("passport_number", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.passport_number && (
                                                <p className="text-danger">{errors.passport_number.message ? errors.passport_number.message : "Passport Number is required"}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <input
                                                type="text"
                                                defaultValue={admissionData.student_nid}
                                                className="form-control"
                                                placeholder="NID"
                                                id="student_nid"
                                                {...register("student_nid", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.student_nid && (

                                                 <p className="text-danger">{errors.student_nid.message ? errors.student_nid.message : "NID is required"}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <select
                                            name="nationality"
                                            defaultValue={admissionData.nationality}
                                            className="form-select"
                                            id="nationality"
                                            {...register("nationality", {required: true})}
                                        >
                                            <option value=''>Choose nationality...</option>
                                            <option value="bangladeshi">Bangladeshi</option>
                                        </select>
                                        {errors.nationality && (
                                            <p className="text-danger">Nationality is required</p>
                                        )}
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <select
                                                name="religion"
                                                defaultValue={admissionData.religion}
                                                className="form-select"
                                                id="religion"
                                                {...register("religion", {required: true})}
                                            >
                                                <option value=''>Choose religion...</option>
                                                <option value="islam">
                                                    Islam
                                                </option>
                                            </select>
                                        </div>
                                        <div>
                                            {errors.religion && (
                                                <p className="text-danger">Religion is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <select
                                                name="gender"
                                                defaultValue={admissionData.gender}
                                                className="form-select"
                                                id="gender"
                                                {...register("gender", {required: true})}
                                            >
                                                <option value=''>Choose gender...</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <div>
                                            {errors.gender && (
                                                <p className="text-danger">Gender is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Present Address ****************** */}
                            <div className="present mt-3">
                                <h5>Present Address</h5>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <select
                                                name="present_address_division"
                                                defaultValue={admissionData.present_address_division}
                                                id="present_address_division"
                                                className="form-select"
                                                {...register("present_address_division", {required: true})}
                                                onChange={(e) => setSelectPresentAddressDivision(e.target.value)}
                                            >
                                                <option value=''>Choose division...</option>
                                                {
                                                    divisionList.map((division) => (
                                                        <option key={division.pk} defaultValue={division.pk}>
                                                            {division.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.present_address_division && (
                                                <p className="text-danger">Division is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <select
                                                name="present_address_district"
                                                defaultValue={admissionData.present_address_district}
                                                id="present_address_district"
                                                className="form-select"
                                                {...register("present_address_district", {required: true})}
                                                onChange={(e) => setSelectPresentAddressDistrict(e.target.value)}
                                            >
                                                <option value=''>Choose district...</option>
                                                {
                                                    districtList.map((district) => (
                                                        <option key={district.pk} defaultValue={district.pk}>
                                                            {district.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>

                                        </div>
                                        <div>
                                            {errors.present_address_district && (
                                                <p className="text-danger">District is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <select
                                                name="present_address_thana"
                                                defaultValue={admissionData.present_address_thana}
                                                id="present_address_thana"
                                                className="form-select"
                                                {...register("present_address_thana", {required: true})}
                                                onChange={(e) => setSelectPresentAddressThana(e.target.value)}
                                            >
                                                <option value=''>Choose district...</option>
                                                {
                                                    thanaList.map((thana) => (
                                                        <option key={thana.pk} defaultValue={thana.pk}>
                                                            {thana.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.present_address_thana && (
                                                <p className="text-danger">Thana is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6  mb-4">
                                        <div>
                                            <select
                                                name="present_address_post_office"
                                                defaultValue={admissionData.present_address_post_office}
                                                id="present_address_post_office"
                                                className="form-select"
                                                {...register("present_address_post_office", {required: true})}
                                                onChange={(e) => setSelectPresentAddressPostOffice(e.target.value)}
                                            >
                                                <option value=''>Choose post office...</option>
                                                {
                                                    postOfficeList.map((post_office) => (
                                                        <option key={post_office.pk} defaultValue={post_office.pk}>
                                                            {post_office.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.present_address_post_office && (
                                                <p className="text-danger">Post Office is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <select
                                                name="present_address_post_code"
                                                defaultValue={admissionData.present_address_post_code}
                                                id="present_address_post_code"
                                                className="form-select"
                                                {...register("present_address_post_code", {required: true})}
                                                onChange={(e) => setSelectPresentAddressPostCode(e.target.value)}
                                            >
                                                <option value=''>Choose Post code ...</option>
                                                {
                                                    postCodeList.map((post_code) => (
                                                        <option key={post_code.pk} defaultValue={post_code.pk}>
                                                            {post_code.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.present_address_post_code && (
                                                <p className="text-danger">Post Code is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating">
                                    <div>
                                        <textarea
                                            className="form-control"
                                            defaultValue={admissionData.student_present_address_info}
                                            placeholder=" Village/Town/Road/House/Flat"
                                            id="student_present_address_info"
                                            {...register("student_present_address_info", {required: true})}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Permanent Address ****************** */}
                            <div className="permanent-address mt-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h5 className="mt-3">Permanent Address</h5>
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
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <select
                                                name="permanent_address_division"
                                                defaultValue={admissionData.permanent_address_division}
                                                id="permanent_address_division"
                                                className="form-select"
                                                {...register("permanent_address_division", {required: true})}
                                                onChange={(e) => setSelectPermanentAddressDivision(e.target.value)}
                                            >
                                                <option value=''>Choose division...</option>
                                                {
                                                    divisionList.map((division) => (
                                                        <option key={division.pk} defaultValue={division.pk}>
                                                            {division.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.permanent_address_division && (
                                                <p className="text-danger">Division is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div>
                                            <select
                                                name="permanent_address_district"
                                                defaultValue={admissionData.permanent_address_district}
                                                id="permanent_address_district"
                                                className="form-select"
                                                {...register("permanent_address_district", {required: true})}
                                                onChange={(e) => setSelectPermanentAddressDistrict(e.target.value)}
                                            >
                                                <option value=''>Choose district...</option>
                                                {
                                                    districtList.map((district) => (
                                                        <option key={district.pk} defaultValue={district.pk}>
                                                            {district.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.permanent_address_district && (
                                                <p className="text-danger">District is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <select
                                                name="permanent_address_thana"
                                                defaultValue={admissionData.permanent_address_thana}
                                                id="permanent_address_thana"
                                                className="form-select"
                                                {...register("permanent_address_thana", {required: true})}
                                                onChange={(e) => setSelectPermanentAddressThana(e.target.value)}
                                            >
                                                <option value=''>Choose district...</option>
                                                {
                                                    thanaList.map((thana) => (
                                                        <option key={thana.pk} defaultValue={thana.pk}>
                                                            {thana.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.permanent_address_thana && (
                                                <p className="text-danger">Thana is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <select
                                                name="permanent_address_post_office"
                                                defaultValue={admissionData.permanent_address_post_office}
                                                id="permanent_address_post_office"
                                                className="form-select"
                                                {...register("permanent_address_post_office", {required: true})}
                                                onChange={(e) => setSelectPermanentAddressPostOffice(e.target.value)}
                                            >
                                                <option value=''>Choose post office...</option>
                                                {
                                                    postOfficeList.map((post_office) => (
                                                        <option key={post_office.pk} defaultValue={post_office.pk}>
                                                            {post_office.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.permanent_address_post_office && (
                                                <p className="text-danger">Post Office is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <select
                                                name="permanent_address_post_code"
                                                defaultValue={admissionData.permanent_address_post_code}
                                                id="permanent_address_post_code"
                                                className="form-select"
                                                {...register("permanent_address_post_code", {required: true})}
                                                onChange={(e) => setSelectPermanentAddressPostCode(e.target.value)}
                                            >
                                                <option value=''>Choose Post code ...</option>
                                                {
                                                    postCodeList.map((post_code) => (
                                                        <option key={post_code.pk} defaultValue={post_code.pk}>
                                                            {post_code.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.permanent_address_post_code && (
                                                <p className="text-danger">Post Code is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        defaultValue={admissionData.student_permanent_address_info}
                                        placeholder="Village/Town/Road/House/Flat"
                                        id="student_permanent_address_info"
                                        {...register("student_permanent_address_info", {required: true})}
                                    />
                                    <label htmlFor="floatingTextarea">
                                        Village/Town/Road/House/Flat
                                    </label>
                                </div>
                            </div>
                            {
                                loading ?
                                    <button className={styles.defaultBtn}>Loading</button>
                                    :
                                    <button className={styles.defaultBtn}>Next Step</button>
                            }
                        </form>

                    </div>
                </div>
            </div>
        </>
    )

};


export default StudentDetailForm;




