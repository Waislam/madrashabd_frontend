import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './StudentList.module.css'
import studentLogo from '../../public/assets/admission/students.png'
import students from '../../public/assets/admission/students.png'


const StudentList =
    ({
         students,
         handleStudentListPageNum,
         studentListPageNum,
         nextPage,
         prevPage,
         setSearchStudent,
         handleSearchBtn
     }) => {
        // console.log("students", students, studentListPageNum,)

        return (
            <>
                <section className={styles.promotedStudentSection}>
                    <div className="container-fluid">
                        {/* <h3 className={styles.promotedStudentTitle}>Student List</h3> */}
                        <div className="row">
                            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <div className={styles.promotedStudentList}>
                                    <div className="card">
                                        <h4 className="text-center mt-3">
                                            <Image src={studentLogo} className="img-responsive"
                                                   alt="Logo missing" height={40} width={40}/>
                                        </h4>
                                        <hr/>
                                        <div className="card-body p-0">
                                            <div className={styles.studentLink}>
                                                <Link href="/students">
                                                    <a className="text-center">Student List</a>
                                                </Link>
                                            </div>

                                            <div className={styles.promotedLink}>
                                                <Link href="/students/promoted-student">
                                                    <a className="text-center">Promoted List</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                                <div className="card">
                                    <div className="card-body mt-3">
                                        <div className="student-table">
                                            <div className="table-search mb-2">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-2 mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Search"
                                                                onChange={(event) => setSearchStudent(event.target.value)}
                                                            />
                                                        </div>
                                                        <div className="col-md-2 mb-3 px-0">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Department"/>
                                                                <button type="button"
                                                                        className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <span
                                                                        className="visually-hidden">Toggle Dropdown</span>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li><a className="dropdown-item" href="#">Name 1</a>
                                                                    </li>
                                                                    <li><a className="dropdown-item" href="#">Name 2</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2 mb-3">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Class"/>
                                                                <button type="button"
                                                                        className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <span
                                                                        className="visually-hidden">Toggle Dropdown</span>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li><a className="dropdown-item" href="#">Name 1</a>
                                                                    </li>
                                                                    <li><a className="dropdown-item" href="#">Name 2</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2 mb-3">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Group"
                                                                />
                                                                <button type="button"
                                                                        className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <span className="visually-hidden">
                                                                        Toggle Dropdown
                                                                    </span>
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
                                                        <div className="col-md-2 mb-3">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Admited Student"/>
                                                                <button type="button"
                                                                        className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <span
                                                                        className="visually-hidden">Toggle Dropdown</span>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li><a className="dropdown-item" href="#">Name 1</a>
                                                                    </li>
                                                                    <li><a className="dropdown-item" href="#">Name 2</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2 mb-3">
                                                            <button type="submit"
                                                                    className={styles.searchButton}
                                                                    onClick={handleSearchBtn}
                                                            >
                                                                Search
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table table-striped table-borderless">
                                                    <thead className={styles.test}>
                                                    <tr>
                                                        <th scope="col">Student ID</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Father</th>
                                                        <th scope="col">Class</th>
                                                        <th scope="col">Group</th>
                                                        <th scope="col">Roll</th>
                                                        <th scope="col">Address</th>
                                                        <th scope="col">Contact</th>
                                                        <th scope="col">Image</th>
                                                        <th scope="col">Detail</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {students.results.map((student) => (
                                                        <tr>
                                                            <th scope="text-sm align-middle">{student.student_id}</th>
                                                            <td className="text-sm">{student.user.first_name} {student.user.last_name}</td>
                                                            <td className="text-sm">Abul Kashem</td>
                                                            <td className="text-sm">Dawra</td>
                                                            <td className="text-sm">Null</td>
                                                            <td className="text-sm">99</td>
                                                            <td className="text-sm">Tala</td>
                                                            <td className="text-sm">+88 01987132107</td>
                                                            <td className="text-center text-sm">
                                                                <Image src={students} alt="" width="25" height="25"/>
                                                            </td>
                                                            <td className="text-sm" style={{color: "#5CBD67"}}>
                                                                <Link href="/">
                                                                    View Details
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))}

                                                    {/*<tr>*/}
                                                    {/*    <th scope="row">101</th>*/}
                                                    {/*    <td className="text-sm">Reza</td>*/}
                                                    {/*    <td className="text-sm">Abul Kashem</td>*/}
                                                    {/*    <td className="text-sm">Dawra</td>*/}
                                                    {/*    <td className="text-sm">Null</td>*/}
                                                    {/*    <td className="text-sm">99</td>*/}
                                                    {/*    <td className="text-sm">Tala</td>*/}
                                                    {/*    <td className="text-sm">+88 01987132107</td>*/}
                                                    {/*    <td className="text-center text-sm">*/}
                                                    {/*        <Image src={students} alt="" width="25" height="25"/>*/}
                                                    {/*    </td>*/}
                                                    {/*    <td className="text-sm" style={{color: "#5CBD67"}}>*/}
                                                    {/*        <Link href="/">*/}
                                                    {/*            View Details*/}
                                                    {/*        </Link>*/}
                                                    {/*    </td>*/}
                                                    {/*</tr>*/}
                                                    {/*<tr>*/}
                                                    {/*    <th scope="row">101</th>*/}
                                                    {/*    <td className="text-sm">Reza</td>*/}
                                                    {/*    <td className="text-sm">Abul Kashem</td>*/}
                                                    {/*    <td className="text-sm">Dawra</td>*/}
                                                    {/*    <td className="text-sm">Null</td>*/}
                                                    {/*    <td className="text-sm">99</td>*/}
                                                    {/*    <td className="text-sm">Tala</td>*/}
                                                    {/*    <td className="text-sm">+88 01987132107</td>*/}
                                                    {/*    <td className="text-center text-sm">*/}
                                                    {/*        <Image src={students} alt="" width="25" height="25"/>*/}
                                                    {/*    </td>*/}
                                                    {/*    <td className="text-sm" style={{color: "#5CBD67"}}>*/}
                                                    {/*        <Link href="/">*/}
                                                    {/*            View Details*/}
                                                    {/*        </Link>*/}
                                                    {/*    </td>*/}
                                                    {/*</tr>*/}
                                                    {/*<tr>*/}
                                                    {/*    <th scope="row">101</th>*/}
                                                    {/*    <td className="text-sm">Reza</td>*/}
                                                    {/*    <td className="text-sm">Abul Kashem</td>*/}
                                                    {/*    <td className="text-sm">Dawra</td>*/}
                                                    {/*    <td className="text-sm">Null</td>*/}
                                                    {/*    <td className="text-sm">99</td>*/}
                                                    {/*    <td className="text-sm">Tala</td>*/}
                                                    {/*    <td className="text-sm">+88 01987132107</td>*/}
                                                    {/*    <td className="text-center text-sm">*/}
                                                    {/*        <Image src={students} alt="" width="25" height="25"/>*/}
                                                    {/*    </td>*/}
                                                    {/*    <td className="text-sm" style={{color: "#5CBD67"}}>*/}
                                                    {/*        <Link href="/">*/}
                                                    {/*            View Details*/}
                                                    {/*        </Link>*/}
                                                    {/*    </td>*/}
                                                    {/*</tr>*/}

                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination">
                                                            <li className="page-item">
                                                                <a className={students.previous
                                                                    ? "btn page-link"
                                                                    : "btn page-link disabled"
                                                                }
                                                                   onClick={prevPage} href="#">
                                                                    Previous
                                                                </a>
                                                            </li>
                                                            {students.previous &&
                                                                <li className="page-item">
                                                                    <a
                                                                        className="page-link"
                                                                        href="#"
                                                                        onClick={handleStudentListPageNum}
                                                                    >
                                                                        {studentListPageNum - 1}
                                                                    </a>
                                                                </li>
                                                            }
                                                            <li className="page-item">
                                                                <a className="page-link" href="#"
                                                                   onClick={handleStudentListPageNum}
                                                                >
                                                                    {studentListPageNum}
                                                                </a>
                                                            </li>
                                                            {students.next &&
                                                                <li className="page-item">
                                                                    <a className="page-link" href="#"
                                                                       onClick={handleStudentListPageNum}
                                                                    >
                                                                        {studentListPageNum + 1}
                                                                    </a>
                                                                </li>
                                                            }
                                                            <li className="page-item">
                                                                <a className={students.next
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
                                                <div className="col-md-4">
                                                    <div className="download">
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="ten-page">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control"
                                                                               placeholder="10"/>
                                                                        <button type="button"
                                                                                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                                data-bs-toggle="dropdown"
                                                                                aria-expanded="false">
                                                                            <span className="visually-hidden">Toggle Dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li><a className="dropdown-item"
                                                                                   href="#">1</a>
                                                                            </li>
                                                                            <li><a className="dropdown-item"
                                                                                   href="#">2</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <button type="submit"
                                                                        className={styles.searchButton}>Search
                                                                </button>
                                                            </div>
                                                            <div className="col">
                                                                <button type="submit"
                                                                        className={styles.searchButton}>Print
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
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
    };


export default StudentList;




