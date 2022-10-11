import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './TeacherList.module.css'
import studentLogo from '../../public/assets/admission/students.png'

const TeacherList = (
    {
        teachers,
        teacherId,
        setSearchTeacher,
        handleSearch,
        handleTeacherListPageNum,
        nextPage,
        prevPage,
    }
    ) => {

    console.log(teachers)
    return (
        <div>
            <div className="teacherListSection">
                <div className="container">
                    <div className="card pb-0 mb-4">
                        <div className="card-body pb-0">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="teacherForm">
                                        <form action="#">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Search"
                                                       aria-label="Username" aria-describedby="basic-addon1"/>
                                                <span className="input-group-text" id="basic-addon1">
                                                    <i className="fa fa-search"/>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6"/>
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="col col-md-8">
                                            <div style={{float: "right"}}>
                                                <Link href="teachers/add-teacher">
                                                    <a className="btn btn-success">Add</a>
                                                </Link>
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
                                                            <a className="dropdown-item" href="#">Name 1</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">Name 2</a>
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
                                            <tr>
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
                                            {/*{*/}
                                                {/*teachers.results.map((teacher) => (*/}
                                                    {/*<tr key={teacher.teacher_id}>*/}
                                                        {/*<th scope="row">{teacher.teacher_id}</th>*/}
                                                        {/*<td>{teacher.user?.username}</td>*/}
                                                        {/*<td>{teacher.user?.father_name}</td>*/}
                                                        {/*<td>{teacher.user?.father_name}</td>*/}
                                                        {/*<td></td>*/}
                                                        {/*<td></td>*/}
                                                        {/*<td>{teacher.user?.phone}</td>*/}
                                                        {/*<td></td>*/}

                                                        {/*<td className="text-sm" style={{color: "#5CBD67"}}>*/}
                                                            {/*<Link href={`/teachers/${teacher.slug}`}>*/}
                                                                {/*View Details*/}
                                                            {/*</Link>*/}

                                                        {/*</td>*/}
                                                    {/*</tr>*/}
                                                {/*))*/}
                                            {/*}*/}

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
                                                    <a className="page-link" href="#">Previous</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">1</a>
                                                </li>

                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
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