import styles from './TeacherAndStaffResponsibility.module.css';
import SyllabusHeader from './SyllabusHeader'
import SyllabuSideMenu from './SyllabusSideMenu';
import api, {BASE_URL} from "../../../pages/api/api"
import {useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {useForm} from "react-hook-form";
import {useRouter} from 'next/router';
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';
import PrintBanner from '../../PrintBanner/PrintBanner'


const TeacherAndStaffResponsibility = ({handlePutRequest, handleDeleteRequest, responsibilityList, madrasha_slug, madrasha_id}) => {

    const componentRef = useRef();
    const router = useRouter();

    const [addModalShow, setAddModalShow] = useState(false);

    const {register, formState: {errors}, handleSubmit} = useForm({mode: "all"});

    //handle post request
    const handleModalShow = (e) => {
        e.preventDefault();
        setAddModalShow(true)
    };


    const onSubmit = async (values) => {
        const data = {
            "madrasha": madrasha_id,
            "teacher_staff": values.teacher_staff,
            "responsibility": values.responsibility
        };
        await api.post(`/talimat/${madrasha_slug}/responsibility/`, data)
            .then((response) => (
                console.log(response.data)
            ));
        setAddModalShow(false);
        router.reload()
    };

    //get list to use in datagrid
    const columns = [
        {
            field: "teacher_staff.user",
            headerName: "Teacher Name",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) => {
                return `${params.row?.teacher_staff?.user?.first_name} ${params.row?.teacher_staff?.user?.last_name}`
            }
        },
        {
            field: "teacher_staff.designation",
            headerName: "Designation",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) => {
                return `${params?.row?.teacher_staff?.designation?.name}`
            }
        },
        {
            field: "responsibility",
            headerName: "Responsibility",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            field: "action",
            headerName: "Action",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className="float-md-end">
                        <button className="btn btn-primary primary me-3"
                                onClick={(e) => handlePutRequest(e, params.id)}
                        >
                            Edit
                        </button>
                        <button className="btn btn-primary primary"
                                onClick={() => handleDeleteRequest(params.id)}
                        >
                            Remove
                        </button>
                    </div>
                )
            }
        },
    ];

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <SyllabuSideMenu/>
                    <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                        <div className="talimat">
                            <div className="card">
                                <div className="card-header">
                                    <SyllabusHeader/>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4>
                                                <ul>Teacher and taff Responsibility</ul>
                                            </h4>
                                        </div>
                                        <div className="col-md-6">
                                            <button
                                                type="button"
                                                className={`${styles.defaultBtn} float-md-end`}
                                                onClick={handleModalShow}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="sub-page">
                                            <div className={styles.syllabus}>
                                                <div className="print-container responsibility-table"
                                                     ref={componentRef}>
                                                    <Box sx={{height: 500, width: '100%'}}>
                                                        <DataGrid
                                                            rows={responsibilityList}
                                                            columns={columns}
                                                            disableColumnFilter
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
                                                        />
                                                    </Box>
                                                </div>
                                                <div className="text-end my-2">
                                                    <ReactToPrint
                                                        trigger={() => <button
                                                            className="btn btn-primary primary">Print </button>}
                                                        content={() => componentRef.current}
                                                    />
                                                </div>
                                            </div>
                                            <div className="responsiblity-add mt-4">
                                                <Modal
                                                    show={addModalShow}
                                                    onHide={() => setAddModalShow(false)}
                                                    size="lg"
                                                >
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>
                                                            Add Department
                                                        </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                            <div className="row">
                                                                <div className="my-4">
                                                                    <label className="mb-2">Teacher/Staff ID</label>
                                                                    <input type="text" className="form-control"
                                                                           placeholder="Techer ID"
                                                                           name="teacher_staff"
                                                                           {...register("teacher_staff", {required: "Teacher ID is required"})}
                                                                    />
                                                                    <p className="text-danger">{errors.teacher_staff?.message}</p>
                                                                </div>
                                                                <div className="my-4">
                                                                    <label className="mb-2">Teacher/Staff
                                                                        Responsibility</label>
                                                                    <input type="text" className="form-control"
                                                                           placeholder="Responsiblity"
                                                                           name="responsibility"
                                                                           {...register("responsibility", {required: "Responsiblity is required"})}
                                                                    />
                                                                    <p className="text-danger">{errors.responsibility?.message}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <button className={styles.defaultBtn}>Save</button>
                                                            </div>
                                                        </form>
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
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
        </>
    )
};

export default TeacherAndStaffResponsibility;