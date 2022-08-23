import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './StudentList.module.css'
import students from '../../public/assets/admission/students.png'

const StudentList = () => {
    return (
        <>
            <section className={styles.studentSection}>
                <div className="container-fluid">
                    <h3 className={styles.studentTitle}>Student</h3>
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className={styles.studentList}>
                                <div className="card">
                                    <h4 className="text-center mt-3">
                                        <Image src={students} className="img-responsive"
                                               alt="Logo missing" height={40} width={40}/>
                                    </h4>
                                    <div className="card-body p-0">
                                        <div className={styles.student}>
                                            <Link href="/">
                                                <>
                                                    <h6 className={styles.studentListTitle}>Student List</h6>
                                                </>
                                            </Link>
                                        </div>
                                        <div className={styles.promotedStudent}>
                                            <Link href="/">
                                                <>
                                                    <h6 className={styles.studentListTitle}>Promoted List</h6>
                                                </>
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
                                                    <div className="col-md-2">
                                                        <input type="text" className="form-control"
                                                               placeholder="Search"/>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control"
                                                                   placeholder="Department"/>
                                                            <button type="button"
                                                                    className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                                <span className="visually-hidden">Toggle Dropdown</span>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">Name 1</a>
                                                                </li>
                                                                <li><a className="dropdown-item" href="#">Name 2</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control"
                                                                   placeholder="Class"/>
                                                            <button type="button"
                                                                    className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                                <span className="visually-hidden">Toggle Dropdown</span>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">Name 1</a>
                                                                </li>
                                                                <li><a className="dropdown-item" href="#">Name 2</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control"
                                                                   placeholder="Group"/>
                                                            <button type="button"
                                                                    className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                                <span className="visually-hidden">Toggle Dropdown</span>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">Name 1</a>
                                                                </li>
                                                                <li><a className="dropdown-item" href="#">Name 2</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control"
                                                                   placeholder="Admited Student"/>
                                                            <button type="button"
                                                                    className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                                <span className="visually-hidden">Toggle Dropdown</span>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">Name 1</a>
                                                                </li>
                                                                <li><a className="dropdown-item" href="#">Name 2</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <button type="submit" className={styles.searchButton}>Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped table-hover">
                                                <thead className="table-dark">
                                                <tr>
                                                    <th scope="col" className="text-center">Student ID</th>
                                                    <th scope="col" className="text-center">Name</th>
                                                    <th scope="col" className="text-center">Father</th>
                                                    <th scope="col" className="text-center">Class</th>
                                                    <th scope="col" className="text-center">Group</th>
                                                    <th scope="col" className="text-center">Roll</th>
                                                    <th scope="col" className="text-center">Address</th>
                                                    <th scope="col" className="text-center">Contact</th>
                                                    <th scope="col" className="text-center">Image</th>
                                                    <th scope="col" className="text-center">Detail</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row" className="text-center">101</th>
                                                    <td>Reza</td>
                                                    <td>Abul Kashem</td>
                                                    <td>Dawra</td>
                                                    <td>Null</td>
                                                    <td>99</td>
                                                    <td>Tala</td>
                                                    <td>+88 01987132107</td>
                                                    <td className="text-center">
                                                        <Image src={students} alt="" width="25" height="25"/>
                                                    </td>
                                                    <td style={{color: "#5CBD67"}}>
                                                        <Link href="/">
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-center">101</th>
                                                    <td>Reza</td>
                                                    <td>Abul Kashem</td>
                                                    <td>Dawra</td>
                                                    <td>Null</td>
                                                    <td>99</td>
                                                    <td>Tala</td>
                                                    <td>+88 01987132107</td>
                                                    <td className="text-center">
                                                        <Image src={students} alt="" width="25" height="25"/>
                                                    </td>
                                                    <td style={{color: "#5CBD67"}}>
                                                        <Link href="/">
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-center">101</th>
                                                    <td>Reza</td>
                                                    <td>Abul Kashem</td>
                                                    <td>Dawra</td>
                                                    <td>Null</td>
                                                    <td>99</td>
                                                    <td>Tala</td>
                                                    <td>+88 01987132107</td>
                                                    <td className="text-center">
                                                        <Image src={students} alt="" width="25" height="25"/>
                                                    </td>
                                                    <td style={{color: "#5CBD67"}}>
                                                        <Link href="/">
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-center">101</th>
                                                    <td>Reza</td>
                                                    <td>Abul Kashem</td>
                                                    <td>Dawra</td>
                                                    <td>Null</td>
                                                    <td>99</td>
                                                    <td>Tala</td>
                                                    <td>+88 01987132107</td>
                                                    <td className="text-center">
                                                        <Image src={students} alt="" width="25" height="25"/>
                                                    </td>
                                                    <td style={{color: "#5CBD67"}}>
                                                        <Link href="/">
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-center">101</th>
                                                    <td>Reza</td>
                                                    <td>Abul Kashem</td>
                                                    <td>Dawra</td>
                                                    <td>Null</td>
                                                    <td>99</td>
                                                    <td>Tala</td>
                                                    <td>+88 01987132107</td>
                                                    <td className="text-center">
                                                        <Image src={students} alt="" width="25" height="25"/>
                                                    </td>
                                                    <td style={{color: "#5CBD67"}}>
                                                        <Link href="/">
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="text-center">101</th>
                                                    <td>Reza</td>
                                                    <td>Abul Kashem</td>
                                                    <td>Dawra</td>
                                                    <td>Null</td>
                                                    <td>99</td>
                                                    <td>Tala</td>
                                                    <td>+88 01987132107</td>
                                                    <td className="text-center">
                                                        <Image src={students} alt="" width="25" height="25"/>
                                                    </td>
                                                    <td style={{color: "#5CBD67"}}>
                                                        <Link href="/">
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination">
                                                        <li className="page-item"><a className="page-link"
                                                                                     href="#">Previous</a>
                                                        </li>
                                                        <li className="page-item"><a className="page-link"
                                                                                     href="#">1</a></li>
                                                        <li className="page-item"><a className="page-link"
                                                                                     href="#">2</a></li>
                                                        <li className="page-item"><a className="page-link"
                                                                                     href="#">3</a></li>
                                                        <li className="page-item"><a className="page-link"
                                                                                     href="#">Next</a>
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
                                                                        <li><a className="dropdown-item" href="#">1</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">2</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <button type="submit" className={styles.searchButton}>Search
                                                            </button>
                                                        </div>
                                                        <div className="col">
                                                            <button type="submit" className={styles.searchButton}>Print
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
