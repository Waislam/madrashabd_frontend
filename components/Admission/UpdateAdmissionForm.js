import { useForm } from "react-hook-form";
import styles from './OldAdmission.module.css'

const UpdateAdmissionForm = ({madrashaData, studentDetails}) => {
    // Destructuring madrashaData
    const {departmentList, classes, groups, sessionList, shifts} = madrashaData;
    
    // Destructuring studentDetails
    const {
        admitted_department,
        admitted_class,
        admitted_group,
        admitted_session,
        student_roll_id,
        admitted_shift,
        academic_fees,
        eslahi_murobbi_name,
        talimi_murobbi_name,
    } = studentDetails;

    const formDefaultValues = {
        admitted_department: admitted_department.name,
        admitted_class: admitted_class.name,
        admitted_group: admitted_group.name,
        admitted_session: admitted_session.name,
        student_roll_id,
        admitted_shift: admitted_shift.name,
        food_bill_percent: academic_fees.food_bill_percent,
        monthly_tution_percent: academic_fees.monthly_tution_percent,
        scholarship_amount: academic_fees.scholarship_amount,
        eslahi_murobbi_name,
        talimi_murobbi_name,
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: formDefaultValues
    });

    // Function for update student details
    const handleUpdateStudent = data => console.log(data);

    return (
        <div className="card mt-4">
            <div className="card-body">
                <form onSubmit={handleSubmit(handleUpdateStudent)}>
                    <div className="part-b-admission-information mb-5">
                        <h4>Part A</h4>
                        <h5>Admission Information</h5>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="admitted_department" className="form-label">Department</label>
                                <select
                                    name="admitted_department"
                                    className="form-select"
                                    id="admitted_department"
                                    {
                                        ...register("admitted_department", {required: true})
                                    }
                                >
                                    <option value="">Select Department</option>
                                    {
                                        departmentList.map(department => <option
                                            key={department.id}
                                            value={department.name}
                                            >{department.name}
                                            </option>)
                                    }
                                </select>
                                {errors.admitted_department && (
                                    <p className="text-danger">Department is required</p>
                                )}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="admitted_class" className="form-label">Class</label>
                                <select
                                    name="admitted_class"
                                    className="form-select"
                                    id="admitted_class"
                                    {
                                        ...register("admitted_class", {required: true})
                                    }
                                >
                                    <option value="">Select Class</option>
                                    {
                                        classes.map(NameOfClass => <option
                                            key={NameOfClass.id}
                                            value={NameOfClass.name}
                                            >{NameOfClass.name}
                                            </option>)
                                    }
                                </select>
                                {errors.admitted_class && (
                                    <p className="text-danger">Class is required</p>
                                )}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="admitted_group" className="form-label">Group</label>
                                <select
                                    name="admitted_group"
                                    className="form-select"
                                    id="admitted_group"
                                    {
                                        ...register("admitted_group", {required: true})
                                    }
                                >
                                    <option value="">Select Group</option>
                                    {
                                        groups.map(group => <option
                                            key={group.id}
                                            value={group.name}
                                            >{group.name}
                                            </option>)
                                    }
                                </select>
                                {errors.admitted_group && (
                                    <p className="text-danger">Group is required</p>
                                )}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="admitted_session" className="form-label">Session</label>
                                <select
                                    name="admitted_session"
                                    className="form-select"
                                    id="admitted_session"
                                    {
                                        ...register("admitted_session", {required: true})
                                    }
                                >
                                    <option value="">Select Session</option>
                                    {
                                        sessionList.map(session => <option
                                            key={session.id}
                                            value={session.name}
                                            >{session.name}
                                            </option>)
                                    }
                                </select>
                                {errors.admitted_session && (
                                    <p className="text-danger">Session is required</p>
                                )}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="student_roll_id" className="form-label">Class Roll</label>
                                <input
                                    type="text"
                                    name="student_roll_id"
                                    placeholder="Class Roll"
                                    id="student_roll_id"
                                    className="form-control"
                                    {...register("student_roll_id", {required: true})}
                                />
                                {errors.student_roll_id && (
                                    <p className="text-danger">Class Roll is required</p>
                                )}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="admitted_shift" className="form-label">Shift</label>
                                <select
                                    name="admitted_shift"
                                    className="form-select"
                                    id="admitted_shift"
                                    {
                                        ...register("admitted_shift", {required: true})
                                    }
                                >
                                    <option value="">Select Shift</option>
                                    {
                                        shifts.map(shifts => <option
                                            key={shifts.id}
                                            value={shifts.name}
                                            >{shifts.name}
                                            </option>)
                                    }
                                </select>
                                {errors.admitted_shift && (
                                    <p className="text-danger">Shift is required</p>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*Academic Fees*/}
                    <div className="part-b-admission-information">
                        <div className="academic-fees mb-4">
                            <h4>Part B</h4>
                            <h5>Academic Fees</h5>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                <label htmlFor="food_bill_percent" className="form-label">Food bill / boarding</label>
                                <input
                                    type="text"
                                    name="food_bill_percent"
                                    placeholder="Food bill / Boarding"
                                    id="food_bill_percent"
                                    className="form-control"
                                    defaultValue=""
                                    {...register("food_bill_percent", {required: true})}
                                />
                                {errors.food_bill_percent && (
                                    <p className="text-danger">Food bill / Boarding is required</p>
                                )}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="monthly_tution_percent" className="form-label">Monthly tuition fees</label>
                                    <input
                                        type="text"
                                        name="monthly_tution_percent"
                                        placeholder="Monthly tuition fees"
                                        id="monthly_tution_percent"
                                        className="form-control"
                                        defaultValue=""
                                        {...register("monthly_tution_percent", {required: true})}
                                    />
                                    {errors.monthly_tution_percent && (
                                        <p className="text-danger">Monthly tuition fees is required</p>
                                    )}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="scholarship_amount" className="form-label">Scholarship</label>
                                    <input
                                        type="text"
                                        name="scholarship_amount"
                                        placeholder="Scholarship"
                                        id="scholarship_amount"
                                        className="form-control"
                                        defaultValue=""
                                        {...register("scholarship_amount")}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="talimi mb-3">
                            <h4>Part C</h4>
                            <h5>Murubbi</h5>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="talimi_murobbi_name" className="form-label">Talimat Murubbi</label>
                                    <input
                                        type="text"
                                        name="talimi_murobbi_name"
                                        placeholder="Talimat Murubbi"
                                        id="talimi_murobbi_name"
                                        className="form-control"
                                        defaultValue=""
                                        {...register("talimi_murobbi_name", {required: true})}
                                    />
                                    {errors.talimi_murobbi_name && (
                                        <p className="text-danger">Talimat murubbi is required</p>
                                    )}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="eslahi_murobbi_name" className="form-label">Eslahi Murubbi</label>
                                    <input
                                        type="text"
                                        name="eslahi_murobbi_name"
                                        placeholder="Eslahi Murubbi"
                                        id="eslahi_murobbi_name"
                                        className="form-control"
                                        defaultValue=""
                                        {...register("eslahi_murobbi_name", {required: true})}
                                    />
                                    {errors.eslahi_murobbi_name && (
                                        <p className="text-danger">Eslahi murubbi is required</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* <div className="student-image mb-3">
                            <h4>Student image upload</h4>
                            <input type="file" className="form-control"
                                    placeholder="Upload Image Here"/>
                        </div> */}
                        <button className={styles.defaultBtn}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateAdmissionForm;