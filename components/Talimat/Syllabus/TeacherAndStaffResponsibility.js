import styles from './TeacherAndStaffResponsibility.module.css';
import Talimat from '../Talimat';
import taliamatstyles from '../Talimat.module.css'
import SyllabusHeader from './SyllabusHeader'
import SyllabuSideMenu from './SyllabusSideMenu';
import axios from 'axios';
import { BASE_URL } from "../../../pages/api/api"
import { useEffect, useState } from 'react';

const TeacherAndStaffResponsibility = ({ handlePutRequest, handleDeleteRequest }) => {

    const [responsibilityList, setResponsibilityList] = useState(null)

    //handle get Request
    const getResponsibilityList = async () => {
        const list = await axios.get(`${BASE_URL}/talimat/100/responsibility/`)
        const data = list.data
        setResponsibilityList(data)
    }

    useEffect(() => {
        getResponsibilityList()
    }, [])

    return (
        <>
            <section className={taliamatstyles.talimatSection}>
                <div className="container-fluid">
                    <div className="row">
                        <SyllabuSideMenu />
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <SyllabusHeader />
                                        <hr />
                                        <div className="row">
                                            <div className="sub-page">
                                                <div className={styles.syllabus}>
                                                    <h2>Syllabus Creation</h2>
                                                    <div className="search-table mt-2">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-md-5 my-3">
                                                                    <input type="text" className="form-control" placeholder="input search item" />
                                                                </div>
                                                                <div className="col-md-2 my-3">
                                                                    <button type="submit" className={styles.searchButton}>Search</button>
                                                                </div>
                                                                <div className="col-md-5 my-3">
                                                                    <button type="button" className={`${styles.defaultBtn} float-md-end`}>Add</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="responsibility-table">
                                                        <div className="table-responsive">
                                                            <table className="table table-striped">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Name</th>
                                                                        <th>Designation</th>
                                                                        <th>Responsiblity</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {responsibilityList && responsibilityList.map((data, index) => (
                                                                        <tr key={data.id}>
                                                                            <td>
                                                                                {data.teacher_staff?.user?.first_name} {data.teacher_staff?.user?.last_name}
                                                                            </td>
                                                                            <td>{data.teacher_staff?.designation?.name} </td>
                                                                            <td className="text-truncate" style={{ "maxWidth": 300 }}>
                                                                                {data.responsibility}
                                                                            </td>
                                                                            <td>
                                                                                <button className="btn btn-primary me-3"
                                                                                    onClick={(e) => handlePutRequest(e, data.id)}
                                                                                >
                                                                                    Edit
                                                                                </button>
                                                                                <button className="btn btn-danger"
                                                                                onClick={()=>handleDeleteRequest(data.id)}
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" className={styles.defaultBtn}>Download pdf</button>
                                                    </div>
                                                </div>
                                                {/* === add Responsibility start ====== */}
                                                {/* <div className="responsiblity-add mt-4">
                                                    <form action="#" method="POST">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <input type="text" className="form-control" placeholder="Staf/Teacher Name" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input type="text" className="form-control" placeholder="Designation" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input type="text" className="form-control" placeholder="Responsiblity" />
                                                            </div>
                                                        </div>
                                                        <button type="submit" className={`${styles.defaultBtn} my-3`}>Save</button>
                                                    </form>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TeacherAndStaffResponsibility;