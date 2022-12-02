
// css
import taliamatstyles from '../Talimat.module.css'
import styles from './Examination.module.css'

// components
import ExamHeader from './ExamHeader'
import SideMenu from './ExamSideMenu';
import RoutineCreateModal from "../Routine/RoutineModal/RoutineCreateModal";
import { useState } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const ExamRoutine = (props) => {

    // console.log("props value in Routine.js file: ", props.routineList)
    const [showExamRoutineCreateModal, setShowExamRoutineCreateModal] = useState(false)

    const handleExamRoutineCreateModalClose = () => setShowExamRoutineCreateModal(false)
    const handleExamRoutineCreateModalOpen = () => setShowExamRoutineCreateModal(true)

    //handle get field value of routine list

    // const columns = [
    //     {
    //         field: "routine_class.name",
    //         headerName: 'Class',
    //         valueGetter: (params) => {
    //             return (
    //                 `${params?.row?.routine_class?.name}`
    //             )
    //         }
    //     },
    //     {
    //         field: "subject",
    //         renderHeader: () => {
    //             console.log("do something: ", props.routineList)
    //             return (
    //                 <h5>do</h5>
    //             )
    //         },
    //         // valueGetter: (params: GridColumnHeaderParams) => {
    //         //     return (
    //         //         `${params?.row?.routine_class?.name}`
    //         //     )
    //         // }
    //     },
    // ]


    return (
        <>
            <section className={taliamatstyles.talimatSection}>
                <div className="container-fluid">
                    <div className="row">
                        <SideMenu />
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <ExamHeader />
                                        <hr />
                                        <div className="row">
                                            <div className="sub-page">
                                                <div className={styles.exam}>
                                                    <div className="row">
                                                        <div className="col-md-6 mt-1">
                                                            <h2>Examination Routine</h2>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <button
                                                                type="button"
                                                                className={`${styles.defaultBtn} float-md-end`}
                                                                onClick={() => handleExamRoutineCreateModalOpen()}
                                                            >
                                                                Add
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="register-table mt-4">

                                                            {/* <Box sx={{ height: 500, width: '100%' }}>
                                                                <DataGrid
                                                                    rows={props.routineList}
                                                                    columns={columns}
                                                                    // pageSize={5}
                                                                    // rowsPerPageOptions={[5]}
                                                                    disableColumnMenu
                                                                    checkboxSelection
                                                                    disableSelectionOnClick
                                                                    disableColumnFilter
                                                                    disableColumnSelector
                                                                    disableDensitySelector
                                                                    components={{ Toolbar: GridToolbar }}
                                                                    experimentalFeatures={{ newEditingApi: false }}
                                                                    componentsProps={{
                                                                        toolbar: {
                                                                            showQuickFilter: true,
                                                                            quickFilterProps: { debounceMs: 500 },
                                                                        },
                                                                    }}
                                                                />
                                                            </Box> */}
                                                            <div className="table-responsive">
                                                                <table className="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Jamat</th>
                                                                            <th>Date</th>
                                                                            <th>Date</th>
                                                                            <th>Date</th>
                                                                            <th>Date</th>
                                                                            <th>Date</th>
                                                                            <th>Date</th>
                                                                            <th>Date</th>
                                                                            <th>Date</th>
                                                                            <th>Date</th>
                                                                            <th>Date</th>
                                                                            <th>Date</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>shore bekaya</td>
                                                                            <td>subject1</td>
                                                                            <td>subject2</td>
                                                                            <td>subject2</td>
                                                                            <td>subject3</td>
                                                                            <td>subject4</td>
                                                                            <td>subject5</td>
                                                                            <td>subject5</td>
                                                                            <td>subject5</td>
                                                                            <td>subject5</td>
                                                                            <td>subject5</td>
                                                                            <td>subject5</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>shore bekaya</td>
                                                                            <td>subject1</td>
                                                                            <td>subject2</td>
                                                                            <td>subject2</td>
                                                                            <td>subject3</td>
                                                                            <td>subject4</td>
                                                                            <td>subject5</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>shore bekaya</td>
                                                                            <td>subject1</td>
                                                                            <td>subject2</td>
                                                                            <td>subject2</td>
                                                                            <td>subject3</td>
                                                                            <td>subject4</td>
                                                                            <td>subject5</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* <div className="downloadButton">
                                                            <button type='button' className={styles.defaultBtn}>Download</button>
                                                        </div> */}
                                                    </div>
                                                    {/* exam routine create form */}
                                                    {/* <div className="exam-routine-form mt-5">
                                                        <form action="#" method="POST">
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <input type="text" placeholder="Jamat" className="form-control" />
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <input type="text" placeholder="date" className="form-control" />
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <input type="text" placeholder="Class" className="form-control" />
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <input type="text" placeholder="Amount" className="form-control" />
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <input type="text" placeholder="status" className="form-control" />
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
                </div>
            </section>

            {/* // create modal */}
            <RoutineCreateModal
                show={showExamRoutineCreateModal}
                handleClose={handleExamRoutineCreateModalClose}
                examTermList={props.examTermList}
                madrashaBookList={props.madrashaBookList}
                classList={props.classList}
            />

        </>
    )
}

export default ExamRoutine;