import React, {useState} from "react";

// styles
import taliamatstyles from '../Talimat.module.css'
import styles from './Examination.module.css'

// components
import SideMenu from './ExamSideMenu'
import ExamHeader from './ExamHeader'

// third party
import {DataGrid, GridToolbar} from "@mui/x-data-grid"
import Box from "@mui/material/Box"

// Modals
import RegistrationCreateModal from "./RegistrationModal/RegistrationModalCreate"

const columns = [
    {
        field: 'student',
        headerName: 'Student ID',
        width: 150,
        valueGetter: (params) =>
            `${params.row.student.student_id || ''}`,
    },
    {
        field: 'first_name',
        headerName: 'Student Name',
        width: 150,
        valueGetter: (params) =>
            `${params.row.student.user.first_name || ''}`
    },
    {
        field: 'admitted_class',
        headerName: 'Class',
        width: 110,
        valueGetter: (params) =>
            `${params.row.student.admitted_class?.name || ''}`
    },
    {
        field: 'term_name',
        headerName: 'Exam Term',
        width: 110,
        valueGetter: (params) =>
            `${params.row.exam_term.term_name || ''}`,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        width: 110,
        valueGetter: (params) =>
            `${params.row.amount || ''}`,
    },
    {
        field: 'is_register',
        headerName: 'Register Status',
        width: 110,
        valueGetter: (params) =>
            `${params.row.is_registered ? "Pain" : "Unpaid"}`
    },
];


const ExamARegistration = (props) => {
    const {examRegistrationList, classList, termList} = props

    const [registrationModalShow, setRegistrationModalShow] = useState(false);

    const handleRegistrationModalClose = () => setRegistrationModalShow(false);
    const handleRegistrationModalShow = () => setRegistrationModalShow(true);

    return (
        <>
            <section className={taliamatstyles.talimatSection}>
                <div className="container-fluid">
                    <div className="row">
                        <SideMenu/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <ExamHeader/>
                                        <hr/>
                                        <div className="row">
                                            <div className="sub-page">
                                                <div className={styles.exam}>
                                                    <h2>Examination Registration</h2>
                                                    <div className="table-search mb-4 mt-3">
                                                        <form action="#">
                                                            <div className="row">
                                                            {/*    <div className="col-md-4">*/}
                                                            {/*        <input*/}
                                                            {/*            type="text"*/}
                                                            {/*            className="form-control"*/}
                                                            {/*            placeholder="Search"*/}
                                                            {/*        />*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-md-2">*/}
                                                            {/*        <div className="input-group">*/}
                                                            {/*            <input*/}
                                                            {/*                type="text"*/}
                                                            {/*                className="form-control"*/}
                                                            {/*                placeholder="Exam Term"*/}
                                                            {/*            />*/}
                                                            {/*            <button*/}
                                                            {/*                type="button"*/}
                                                            {/*                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"*/}
                                                            {/*                data-bs-toggle="dropdown"*/}
                                                            {/*            >*/}
                                                            {/*                <span className="visually-hidden">Toggle Dropdown</span>*/}
                                                            {/*            </button>*/}
                                                            {/*            <ul className="dropdown-menu dropdown-menu-end">*/}
                                                            {/*                <li>*/}
                                                            {/*                    <a className="dropdown-item" href="#">Term*/}
                                                            {/*                        1</a>*/}
                                                            {/*                </li>*/}
                                                            {/*                <li>*/}
                                                            {/*                    <a className="dropdown-item" href="#">Term*/}
                                                            {/*                        2</a>*/}
                                                            {/*                </li>*/}
                                                            {/*            </ul>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-md-2">*/}
                                                            {/*        <div className="input-group">*/}
                                                            {/*            <input*/}
                                                            {/*                type="text" className="form-control"*/}
                                                            {/*                placeholder="Class"*/}
                                                            {/*            />*/}
                                                            {/*            <button*/}
                                                            {/*                type="button"*/}
                                                            {/*                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"*/}
                                                            {/*                data-bs-toggle="dropdown"*/}
                                                            {/*            >*/}
                                                            {/*        <span*/}
                                                            {/*            className="visually-hidden">Toggle Dropdown</span>*/}
                                                            {/*            </button>*/}
                                                            {/*            <ul className="dropdown-menu dropdown-menu-end">*/}
                                                            {/*                <li>*/}
                                                            {/*                    <a className="dropdown-item" href="#">Name*/}
                                                            {/*                        1</a>*/}
                                                            {/*                </li>*/}
                                                            {/*                <li>*/}
                                                            {/*                    <a className="dropdown-item" href="#">Name*/}
                                                            {/*                        2</a>*/}
                                                            {/*                </li>*/}
                                                            {/*            </ul>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-md-2">*/}
                                                            {/*        <button type="submit"*/}
                                                            {/*                className={styles.searchButton}>Search*/}
                                                            {/*        </button>*/}
                                                            {/*    </div>*/}
                                                                <div className="col-md-2">
                                                                    <button
                                                                        type="button"
                                                                        className={`${styles.defaultBtnReg}`}
                                                                        onClick={handleRegistrationModalShow}
                                                                    >
                                                                        Register
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="row">
                                                        <div className="register-table">

                                                            <Box sx={{height: 500, width: '100%'}}>
                                                                <DataGrid
                                                                    rows={examRegistrationList.results}
                                                                    columns={columns}
                                                                    pageSize={5}
                                                                    rowsPerPageOptions={[5]}
                                                                    checkboxSelection
                                                                    disableSelectionOnClick
                                                                    disableColumnFilter
                                                                    disableColumnSelector
                                                                    disableDensitySelector
                                                                    components={{Toolbar: GridToolbar}}
                                                                    experimentalFeatures={{newEditingApi: false}}
                                                                    componentsProps={{
                                                                        toolbar: {
                                                                            showQuickFilter: true,
                                                                            quickFilterProps: {debounceMs: 500},
                                                                        },
                                                                    }}
                                                                />
                                                            </Box>
                                                            {/*<div className="table-responsive">*/}
                                                            {/*    <table className="table table-striped">*/}
                                                            {/*        <thead>*/}
                                                            {/*        <tr>*/}
                                                            {/*            <th>St id</th>*/}
                                                            {/*            <th>St Name</th>*/}
                                                            {/*            <th>Father Name</th>*/}
                                                            {/*            <th>Class</th>*/}
                                                            {/*            <th>Exam Term</th>*/}
                                                            {/*            <th>Fees Amount tk</th>*/}
                                                            {/*            <th>Status</th>*/}
                                                            {/*        </tr>*/}
                                                            {/*        </thead>*/}
                                                            {/*        <tbody>*/}
                                                            {/*        {examRegistrationList.results && examRegistrationList.results.map((examRegistration) => (*/}
                                                            {/*            <tr key={examRegistration.id}>*/}
                                                            {/*                <td>{examRegistration.student.student_id}</td>*/}
                                                            {/*                <td>{examRegistration.student?.user.first_name}</td>*/}
                                                            {/*                <td>{examRegistration.exam_term.term_name}</td>*/}
                                                            {/*                <td>{examRegistration.student.admitted_class?.name}</td>*/}
                                                            {/*                <td>{examRegistration.exam_term.term_name}</td>*/}
                                                            {/*                <td>{examRegistration.amount}</td>*/}
                                                            {/*                <td>{examRegistration.is_registered ? "Pain" : "Unpaid"}</td>*/}
                                                            {/*            </tr>*/}
                                                            {/*        ))}*/}
                                                            {/*        </tbody>*/}
                                                            {/*    </table>*/}
                                                            {/*</div>*/}
                                                        </div>
                                                        <div className="downloadButton">
                                                            <button type='button'
                                                                    className={styles.defaultBtn}>Download
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

            // all modals
            <RegistrationCreateModal
                show={registrationModalShow}
                handleClose={handleRegistrationModalClose}
                classList={classList}
                termList={termList}
            />
        </>
    )
}

export default ExamARegistration;