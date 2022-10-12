import React from "react";
import Link from 'next/link'
import styles from './TeacherList.module.css'

const TeacherList = (
    {
        teachers,
        teacherId,
        setSearchTeacher,
        handleSearch,
        teacherListPageNum,
        handleTeacherListPageNum,
        nextPage,
        prevPage,
    }) => {


    return (
        <div>
            <div className="teacherListSection">
                <div className="container">
                    <div className="card pb-0 mb-4">
                        <div className="card-body pb-0">
                            <div className="row">
                                <div className="col-md-3">
                                    <Link href="teachers/add-teacher">
                                        <a className="btn btn-secondary">Add</a>
                                    </Link>
                                </div>
                                <div className="col-md-6"/>
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="col col-md-8">
                                            <div style={{float: "right"}}>
                                                <div className="teacherForm">
                                                    <form action="#">
                                                        <div className="input-group mb-3">
                                                            <input type="text"
                                                                   className="form-control"
                                                                   placeholder="Search"
                                                                   onChange={(event) => setSearchTeacher(event.target.value)}
                                                            />
                                                            <button
                                                                type="submit"
                                                                className={styles.addButton}

                                                                onClick={handleSearch}>
                                                                Search
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col col-md-4">
                                            <div style={{width: 80}}>
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="10"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span className="visually-hidden">Toggle Dropdown</span>
                                                    </button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a className="dropdown-item" href="#">1</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">2</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-hover">
                                            <thead className="table-dark">
                                            <tr className="text-center">
                                                <th scope="col">Teacher ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Father Name</th>
                                                <th scope="col">Mother Name</th>
                                                <th scope="col">Department</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Contact</th>
                                                <th scope="col">Picture</th>
                                                <th scope="col">Detail</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {teachers.results.map((teacher) => (
                                                <tr key={teacher.id} className="text-center text-capitalize">
                                                    <th scope="text-sm align-middle">{teacher.teacher_id}</th>
                                                    <td className="text-sm">{teacher?.user.username}</td>
                                                    <td className="text-sm">{teacher?.father_name}</td>
                                                    <td className="text-sm">{teacher?.mother_name}</td>
                                                    <td className="text-sm">{teacher?.department.name}</td>
                                                    <td className="text-sm">{teacher?.marital_status}</td>
                                                    <td className="text-sm">{teacher?.user.phone}</td>
                                                    <td className="text-sm">
                                                        No Image
                                                    </td>
                                                    <td className="text-sm" style={{color: "#5CBD67"}}>
                                                        <Link href={`/teachers/${teacher.slug}`}>
                                                            View Details
                                                        </Link>

                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div style={{float: "right"}}>
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className={teachers.previous
                                                        ? "btn page-link"
                                                        : "btn page-link disabled"
                                                    }
                                                       onClick={prevPage} href="#">
                                                        Previous
                                                    </a>
                                                </li>
                                                {teachers.previous &&
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        onClick={handleTeacherListPageNum}
                                                    >
                                                        {teacherListPageNum - 1}
                                                    </a>
                                                </li>
                                                }
                                                <li className="page-item">
                                                    <a className="page-link" href="#"
                                                       onClick={handleTeacherListPageNum}
                                                    >
                                                        {teacherListPageNum}
                                                    </a>
                                                </li>
                                                {teachers.next &&
                                                <li className="page-item">
                                                    <a className="page-link" href="#"
                                                       onClick={handleTeacherListPageNum}
                                                    >
                                                        {teacherListPageNum + 1}
                                                    </a>
                                                </li>
                                                }
                                                <li className="page-item">
                                                    <a className={teachers.next
                                                        ? "btn page-link"
                                                        : "btn page-link disabled"
                                                    }
                                                       onClick={nextPage} href="#">
                                                        Next
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TeacherList;