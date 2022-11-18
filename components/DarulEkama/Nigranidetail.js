import React from "react";
import Image from "next/image";
import DarulEkmaNav from './DarulEkmaNav'
import styles from './DarulEkam.module.css'
import studentLogo from '../../public/assets/admission/students.png'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { AmPm } from "../Utils/utils"
import Modal from 'react-bootstrap/Modal';

const Nigranidetail = ({ nigran_list, handlePostRequest, nigranaddModalShow, setNigranAddModalShow }) => {
    // console.log("nigran list: ", nigran_list)

    const columns = [
        {
            field: "teacher",
            headerName: "Teacher Name",
            valueGetter: (params) => {
                // console.log("teacher name: ", params.value.user.first_name)
                return `${params.value.user.first_name} ${params.value.user.last_name}`
            },
            width: 150
        },
        {
            field: "building",
            headerName: "Building",
            valueGetter: (params) => {
                return params.value.building_name
            },
            width: 150
        },
        {
            field: "floor",
            headerName: "Floor",
            width: 50
        },
        {
            field: "room",
            headerName: "Room",
            valueGetter: (params) => {
                return params.value.room_name
            },
            width: 100
        },
        {
            field: "class_nigran",
            headerName: "Jamat",
            valueGetter: (params) => {
                return params.value.name
            },
            width: 100
        },
        {
            field: "start_time",
            headerName: "Start Time",
            valueFormatter: (params) => {
                const timmeformate = AmPm(params.value)
                return timmeformate
            }
        },
        {
            field: "end_time",
            headerName: "End Time",
            valueFormatter: (params) => {
                const timmeformate = AmPm(params.value)
                return timmeformate
            }
        },

    ]


    return (
        <>
            <section className={styles.darulEkamSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className={styles.darulEkamRightSide}>
                                <div className={`${styles.customCard} card shadow`}>
                                    <div className={`${styles.customCardHeader} card-header`}>
                                        ss <Image src={studentLogo} className="img-responsive"
                                            alt="Logo missing" height={40} width={40} />
                                    </div>
                                    {/* DarulEkma Nav*/}
                                    <DarulEkmaNav />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="darulEkam">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Nigrani Detail</h4>
                                        <hr />
                                        <div className="search mb-5">
                                            <form action="#">
                                                <div className="row">
                                                    {/* <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-3 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="teacher_name"
                                                                    placeholder="Teacher Name"
                                                                    className="form-control"

                                                                />
                                                            </div>

                                                            <div className="col-sm-12 col-md-3 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="building"
                                                                    placeholder="Building"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-sm-12 col-md-3 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="floor"
                                                                    placeholder="Floor"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-sm-12 col-md-3 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="room"
                                                                    placeholder="Room"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-sm-12 col-md-3 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="jamat"
                                                                    placeholder="Jamat"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-sm-12 col-md-3 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="class"
                                                                    placeholder="Start Date"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-3 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="present"
                                                                    placeholder="End Date"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2">
                                                        <button className={styles.defaultBtn}>Search</button>
                                                    </div>
                                                    <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2">
                                                        <button className={styles.defaultBtn}
                                                            onClick={handlePostRequest}
                                                        >
                                                            Add
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="darulEkamTable">
                                            <div className="row">
                                                <div className="col">
                                                    <Box sx={{ height: 500, width: '100%' }}>
                                                        <DataGrid
                                                            rows={nigran_list}
                                                            columns={columns}
                                                            components={{ Toolbar: GridToolbar }}
                                                            componentsProps={{
                                                                toolbar: {
                                                                    showQuickFilter: true,
                                                                    quickFilterProps: { debounceMs: 500 },
                                                                },
                                                            }}
                                                        >
                                                        </DataGrid>
                                                    </Box>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Add nigran section */}
                            <div className="add-nigran">
                                <Modal
                                    show={nigranaddModalShow}
                                    onHide={() => setNigranAddModalShow(false)}
                                    dialogClassName={`${styles.customDialog}`}
                                    size="lg"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            Add Nigran Duty
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-4 mb-2">
                                                    <label className="mb-2">Building</label>
                                                    <select
                                                        className="form-select"
                                                        name="building"
                                                    >
                                                        <option>building</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <label className="mb-2">Floor and Room</label>
                                                    <select
                                                        className="form-select"
                                                        name="room"
                                                    >
                                                        <option>rooom</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <label className="mb-2">Class</label>
                                                    <select
                                                        className="form-select"
                                                        name="class_nigran"
                                                    >
                                                        <option>class</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <label className="mb-2">Start Time</label>
                                                    <input type="text"
                                                    className="form-control"
                                                    onFocus={(e)=>(e.target.type="time")}
                                                    onBlur={(e) => (e.target.type = "text")}
                                                    />
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <label className="mb-2">End Time</label>
                                                    <input type="text"
                                                    className="form-control"
                                                    onFocus={(e)=>(e.target.type="time")}
                                                    onBlur={(e) => (e.target.type = "text")}
                                                    />
                                                </div>

                                                <div className="col-md-4 mb-2">
                                                    <label className="mb-2">Teacher ID</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Teacher ID"
                                                        name="teacher"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <button type="submit" className={styles.defaultBtn}>Save</button>
                                            </div>
                                        </form>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )


};


export default Nigranidetail;




