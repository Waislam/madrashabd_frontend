import Link from 'next/link'
import SideMenu from './ExamSideMenu';
import taliamatstyles from '../Talimat.module.css'
import ExamHeader from './ExamHeader'
import styles from './Examination.module.css'
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {isAssetError} from 'next/dist/client/route-loader';

const ResutSheet = ({result_list}) => {

    const columns = [
        {
            field: "student.student_roll_id",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            headerName: "Roll",
            valueGetter: (parmas) => {
                return `${parmas?.row?.student?.student_roll_id}`
            },
        },
        {
            field: "student.user",
            headerName: "Name",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (parmas) => {
                const user = parmas?.row?.student?.user;
                const name = `${user?.first_name} ${user?.last_name}`;
                return name
            }
        },
        {
            field: "student_class",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (parmas) => {
                return `${parmas?.row?.student_class?.name}`
            }

        },
        {
            field: "exam_term",
            headerName: "Exam Term",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) => {
                return `${params?.row?.exam_term?.term_name}`
            }
        },
        {
            field: "total_marks",
            headerName: "Total Marks",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            field: "division",
            headerName: "Division",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            field: "merit_position",
            headerName: "Merit",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            field: "detail",
            headerName: "Detail",
            headerAlign: 'center',
            align: 'center',
            flex: 1,

        },
    ];

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
                                                    <h2>Result Sheet</h2>
                                                    <div className="result-search">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <input type="text" className="form-control"
                                                                           placeholder="Search"/>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control"
                                                                               placeholder="class"/>
                                                                        <button type="button"
                                                                                className="btn btn-outline-secondary dropdown-toggle"
                                                                                data-bs-toggle="dropdown">
                                                                            <span className="visually-hidden">Toggle dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li>
                                                                                <a className='dropdown-item'>Class 1</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className='dropdown-item'>Class 1</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control"
                                                                               placeholder="Merit"/>
                                                                        <button type="button"
                                                                                className="btn btn-outline-secondary dropdown-toggle"
                                                                                data-bs-toggle="dropdown">
                                                                            <span className="visually-hidden">Toggle dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li>
                                                                                <a className='dropdown-item'>merit</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className='dropdown-item'>Roll Id</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control"
                                                                               placeholder="Term"/>
                                                                        <button type="button"
                                                                                className="btn btn-outline-secondary dropdown-toggle"
                                                                                data-bs-toggle="dropdown">
                                                                            <span className="visually-hidden">Toggle dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li>
                                                                                <a className='dropdown-item'>First</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className='dropdown-item'>second</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className='dropdown-item'>Third</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control"
                                                                               placeholder="year"/>
                                                                        <button type="button"
                                                                                className="btn btn-outline-secondary dropdown-toggle"
                                                                                data-bs-toggle="dropdown">
                                                                            <span className="visually-hidden">Toggle dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li>
                                                                                <a className='dropdown-item'>2022</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className='dropdown-item'>2023</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className='dropdown-item'>2021</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-1">
                                                                    <button type="button"
                                                                            className={`${styles.searchIcon}`}>
                                                                        <span className={styles.searchicon}></span>
                                                                    </button>
                                                                </div>
                                                                <div className="col-md-1">
                                                                    <Link
                                                                        href="/talimat/exam/result_upload"
                                                                        className={`${styles.defaultBtnResult}`}
                                                                    >
                                                                        Add
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="result-table mt-4">

                                                        <Box sx={{height: 500, width: '100%'}}>
                                                            <DataGrid
                                                                rows={result_list}
                                                                columns={columns}
                                                                // disableColumnFilter
                                                                disableColumnSelector
                                                                disableDensitySelector
                                                                components={{Toolbar: GridToolbar}}
                                                                // experimentalFeatures={{ newEditingApi: false }}
                                                                componentsProps={{
                                                                    toolbar: {
                                                                        showQuickFilter: true,
                                                                        quickFilterProps: {debounceMs: 500},
                                                                    },
                                                                }}
                                                                // filterModel={{
                                                                //     items: [{
                                                                //         columnField: "Class",
                                                                //         operatorValue: "isAnyOf",
                                                                //         value: ARRAYofSelctedRowValuesInTabOne
                                                                //     }],
                                                                // }}
                                                            />
                                                        </Box>
                                                        {/* <div className="table-responsive">
                                                            <table className="table table-striped">
                                                                <thead>
                                                                <tr>
                                                                    <th>Roll Id</th>
                                                                    <th>Student Name</th>
                                                                    <th>Class</th>
                                                                    <th>Term</th>
                                                                    <th>Total Marks</th>
                                                                    <th>Division</th>
                                                                    <th>Merit List</th>
                                                                    <th>Details</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <th>5245454</th>
                                                                    <th>waliul Islam</th>
                                                                    <th>class Name</th>
                                                                    <th>first</th>
                                                                    <th>646</th>
                                                                    <th>montaj</th>
                                                                    <th>2</th>
                                                                    <th>
                                                                        <Link
                                                                            href="/talimat/exam/result/slug/"
                                                                        >
                                                                            Details
                                                                        </Link>
                                                                    </th>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div> */}
                                                    </div>
                                                    <div className="col-md-3">
                                                        <button type="button" className={styles.defaultBtn}>Download
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* add results */}
                                                {/* <div className="add-results mt-5">
                                                    <form action="#" method="POST">
                                                        <div className="row">
                                                            <div className="col-md-7 mb-3">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control"
                                                                           placeholder="class"/>
                                                                    <button type="button"
                                                                            className="btn btn-outline-secondary dropdown-toggle"
                                                                            data-bs-toggle="dropdown">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className='dropdown-item'>class 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className='dropdown-item'>class 2</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control"
                                                                           placeholder="Exam term"/>
                                                                    <button type="button"
                                                                            className="btn btn-outline-secondary dropdown-toggle"
                                                                            data-bs-toggle="dropdown">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className='dropdown-item'>term 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className='dropdown-item'>term 2</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control"
                                                                           placeholder="department"/>
                                                                    <button type="button"
                                                                            className="btn btn-outline-secondary dropdown-toggle"
                                                                            data-bs-toggle="dropdown">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className='dropdown-item'>department
                                                                                1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className='dropdown-item'>department
                                                                                2</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <input type="text" className="form-control"
                                                                       placeholder="year"/>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <input type="file" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button type="submit" className={styles.defaultBtn}>Save
                                                            </button>
                                                        </div>
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

export default ResutSheet;