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
        
    let preLoadedValues

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    });

    // Function for update student details
    const onSubmit = data => console.log(data);

    return (
        <div className="card mt-4">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                            value={department.id}
                                            >{department.name}
                                            </option>)
                                    }
                                </select>
                                {errors.department && (
                                    <p className="text-danger">Department is required</p>
                                )}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="class" className="form-label">Class</label>
                                <select
                                    name="class"
                                    className="form-select"
                                    id="class"
                                    {
                                        ...register("class", {required: true})
                                    }
                                >
                                    <option value="">Select Class</option>
                                    <option value="1">1</option>
                                    {
                                        classes.map(NameOfClass => <option
                                            key={NameOfClass.id}
                                            value={NameOfClass.name}
                                            >{NameOfClass.name}
                                            </option>)
                                    }
                                </select>
                                {errors.class && (
                                    <p className="text-danger">Class is required</p>
                                )}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="group" className="form-label">Group</label>
                                <select
                                    name="group"
                                    className="form-select"
                                    id="group"
                                    {
                                        ...register("group", {required: true})
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
                                {errors.group && (
                                    <p className="text-danger">Group is required</p>
                                )}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="session" className="form-label">Session</label>
                                <select
                                    name="session"
                                    className="form-select"
                                    id="session"
                                    {
                                        ...register("session", {required: true})
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
                                {errors.session && (
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
                                {errors.classRoll && (
                                    <p className="text-danger">Class Roll is required</p>
                                )}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="shift" className="form-label">Shift</label>
                                <select
                                    name="shift"
                                    className="form-select"
                                    id="shift"
                                    {
                                        ...register("shift", {required: true})
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
                                {errors.shift && (
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
                                <label htmlFor="food-boarding" className="form-label">Food bill / boarding</label>
                                <input
                                    type="text"
                                    name="foodOrBoarding"
                                    placeholder="Food bill / Boarding"
                                    id="food-boarding"
                                    className="form-control"
                                    defaultValue=""
                                    {...register("foodOrBoarding", {required: true})}
                                />
                                {errors.foodOrBoarding && (
                                    <p className="text-danger">Food bill / Boarding is required</p>
                                )}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="tuition" className="form-label">Monthly tuition fees</label>
                                    <input
                                        type="text"
                                        name="tuition"
                                        placeholder="Monthly tuition fees"
                                        id="tuition"
                                        className="form-control"
                                        defaultValue=""
                                        {...register("tuition", {required: true})}
                                    />
                                    {errors.tuition && (
                                        <p className="text-danger">Monthly tuition fees is required</p>
                                    )}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="tuition" className="form-label">Scholarship</label>
                                    <input
                                        type="text"
                                        name="scholarship"
                                        placeholder="Scholarship"
                                        id="scholarship"
                                        className="form-control"
                                        defaultValue=""
                                        {...register("scholarship")}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="talimi mb-3">
                            <h4>Part C</h4>
                            <h5>Murubbi</h5>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="talimat-murubbi" className="form-label">Talimat Murubbi</label>
                                    <input
                                        type="text"
                                        name="talimatMurubbi"
                                        placeholder="Talimat Murubbi"
                                        id="talimat-murubbi"
                                        className="form-control"
                                        defaultValue=""
                                        {...register("talimatMurubbi", {required: true})}
                                    />
                                    {errors.talimatMurubbi && (
                                        <p className="text-danger">Talimat murubbi is required</p>
                                    )}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="eslahi-murubbi" className="form-label">Eslahi Murubbi</label>
                                    <input
                                        type="text"
                                        name="eslahiMurubbi"
                                        placeholder="Eslahi Murubbi"
                                        id="eslahi-murubbi"
                                        className="form-control"
                                        defaultValue=""
                                        {...register("eslahiMurubbi", {required: true})}
                                    />
                                    {errors.tuition && (
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