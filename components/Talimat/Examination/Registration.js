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
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        valueGetter: (params) =>
            `${params.row.student.student_id || ''}`,
    },
    {
        field: 'first_name',
        headerName: 'Student Name',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
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
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        valueGetter: (params) =>
            `${params.row.exam_term.term_name || ''}`,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        valueGetter: (params) =>
            `${params.row.amount || ''}`,
    },
    {
        field: 'is_register',
        headerName: 'Register Status',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        valueGetter: (params) =>
            `${params.row.is_registered ? "Pain" : "Unpaid"}`
    },
];


const ExamARegistration = (props) => {
    const {examRegistrationList, classList, termList} = props;

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
                                                    <div className="row">
                                                        <div className="col col-md-6 mb-2">
                                                            <h2>
                                                                <u>
                                                                    Examination Registration
                                                                </u>
                                                            </h2>
                                                        </div>
                                                        <div className="col col-md-6 mb-2">
                                                            <button
                                                                type="button"
                                                                className={`float-end brand-btn`}
                                                                onClick={handleRegistrationModalShow}>
                                                                Add
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="register-table">
                                                            <Box sx={{height: 500, width: '100%'}}>
                                                                <DataGrid
                                                                    rows={examRegistrationList}
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
            {/*all modals*/}
            <RegistrationCreateModal
                show={registrationModalShow}
                handleClose={handleRegistrationModalClose}
                classList={classList}
                termList={termList}
                session_data={props.session_data}
            />
        </>
    )
}

export default ExamARegistration;