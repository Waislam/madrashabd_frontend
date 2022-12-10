import SideMenu from './ExamSideMenu';
import taliamatstyles from '../Talimat.module.css'
import ExamHeader from './ExamHeader'
import styles from './Examination.module.css'
import HallNigranCreateModal from "./HallNigranModal/HallNigranCreateModal";
import { useState } from "react";
import HallNigranDeleteModal from "./HallNigranModal/HallNigranDeleteModal";
import HallNigranEditModal from "./HallNigranModal/HallNigranEditModal";
import api from "../../../pages/api/api";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import PrintBanner from '../../PrintBanner/PrintBanner'
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { AmPm } from "../../Utils/utils"


const HallNigran = (props) => {
    const componentRef = useRef();

    const [hallNigranId, setHallNigranId] = useState(null);
    const [hallNigarData, setHallNigarData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hallNigranModalShow, setHallNigranModalShow] = useState(false);
    const [hallNigranDeleteModalShow, setHallNigranDeleteModalShow] = useState(false);
    const [hallNigranEditModalShow, setHallNigranEditModalShow] = useState(false);

    const handleHallNigranModalClose = () => setHallNigranModalShow(false);
    const handleHallNigranModalShow = () => setHallNigranModalShow(true);

    // delete modal
    const handleHallNigranDeleteModalClose = () => setHallNigranDeleteModalShow(false);
    const handleHallNigranDeleteModalShow = () => setHallNigranDeleteModalShow(true);

    const handleHallNigranDelete = (hallNigranIdValue) => {
        setHallNigranId(hallNigranIdValue);
        handleHallNigranDeleteModalShow()
    };

    // edit modal
    const getHallNigar = (hallNigranIdValue) => {
        setLoading(true);
        api.get(`talimat/hall-duty/detail/${hallNigranIdValue}/`)
            .then((response) => {
                console.log("response", response.data);
                setHallNigarData(response.data.data);
                setLoading(false)
            }).catch((error) => {
                setLoading(false)
            })
    };

    const handleHallNigranEditModalClose = () => setHallNigranEditModalShow(false);
    const handleHallNigranEditModalShow = () => setHallNigranEditModalShow(true);

    const handleHallNigranEdit = (hallNigranIdValue) => {
        // console.log("hallNigranIdValue", hallNigranIdValue)
        setHallNigranId(hallNigranIdValue);
        getHallNigar(hallNigranIdValue);
        handleHallNigranEditModalShow()
    };

    // handle get request

    const columns = [
        {
            field: "date",
            headerName: 'Date',
            flex: 1,
        },
        {
            field: "start_time",
            headerName: 'Start Time',
            flex: 1,
            maxWidth: 100,
            valueGetter: (params) => {
                return(
                    AmPm(`${params.value}`)
                )  
            }
        },
        {
            field: "end_time",
            headerName: 'End Time',
            flex: 1,
            maxWidth: 100,
            valueGetter: (params) => {
                return(
                    AmPm(`${params.value}`)
                )  
            }
        },
        {
            field: "chief_of_hall",
            headerName: 'Chief of Nigran',
            flex: 1,
        },
        {
            field: "assistant_of_hall",
            headerName: 'Assistant Nigran',
            flex: 1,
        },
        {
            field: "room_no",
            headerName: 'Room / Hall',
            flex: 1,
        },
        {
            field: "action",
            headerName: 'Action',
            flex: 1,
            renderCell: (params) => {
                console.log("parama:", params);
                return (
                    < div className="float-md-end">
                        <button className="btn btn-primary primary me-3"
                            onClick={() => handleHallNigranEdit(params.id)}
                        >
                            Edit
                        </button>
                        <button className="btn btn-primary primary me-3"
                            onClick={() => handleHallNigranDelete(params.id)}
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
                                                        <h2 className="col-md-6"><u>Hall Nigranir Detail</u></h2>
                                                        <div className="col-md-6">
                                                            <button
                                                                type="button"
                                                                className={`${styles.defaultBtn} float-md-end`}
                                                                onClick={handleHallNigranModalShow}
                                                            >
                                                                Add
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="nigrani-table mt-4">

                                                        {/* <div className="table-responsive">
                                                            <table className="table table-striped">
                                                                <thead>
                                                                <tr>
                                                                    <th>Date</th>
                                                                    <th>Chief of Nigran</th>
                                                                    <th>Assistant Nigran</th>
                                                                    <th>Room/Hall</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                {
                                                                    props.hallDutyList.map((duty) => (
                                                                        <tr key={duty.id}>
                                                                            <td className="text-sm">{duty.duty_date}</td>
                                                                            <td className="text-sm">{duty.chief_of_hall}</td>
                                                                            <td className="text-sm">{duty.assistant_of_hall}</td>
                                                                            <td className="text-sm">{duty.room_no}</td>
                                                                            <td>
                                                                                <button
                                                                                    type='button'
                                                                                    className="btn btn-primary"
                                                                                    onClick={() => handleHallNigranEdit(duty.id)}
                                                                                >
                                                                                    Edit
                                                                                </button>
                                                                                <button
                                                                                    type='button'
                                                                                    className="btn btn-danger ms-2"
                                                                                    onClick={() => handleHallNigranDelete(duty.id)}
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                                </tbody>
                                                            </table>
                                                        </div> */}
                                                        <Box sx={{ height: 500, width: '100%' }} ref={componentRef}>
                                                            <div className="print-container">
                                                                <div className="print-banner">
                                                                    <PrintBanner data="Hall Nigranir Detail" />
                                                                </div>
                                                            </div>
                                                            <DataGrid
                                                                rows={props.hallDutyList}
                                                                columns={columns}
                                                                // pageSize={5}
                                                                // rowsPerPageOptions={[5]}
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
                                                        </Box>
                                                    </div>
                                                    <div className="text-end my-2">
                                                        <ReactToPrint
                                                            trigger={() => <button
                                                                className="btn btn-primary primary">Print</button>}
                                                            content={() => componentRef.current}
                                                        />
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

            {/*modals*/}
            <HallNigranCreateModal
                show={hallNigranModalShow}
                handleClose={handleHallNigranModalClose}
                session_data={props.session_data}
            />

            <HallNigranDeleteModal
                show={hallNigranDeleteModalShow}
                handleClose={handleHallNigranDeleteModalClose}
                hallNigranId={hallNigranId}
                session_data={props.session_data}
            />

            {!loading && (
                <HallNigranEditModal
                    show={hallNigranEditModalShow}
                    onHide={handleHallNigranEditModalClose}
                    hallNigranId={hallNigranId}
                    hallNigarData={hallNigarData}
                    session_data={props.session_data}
                />
            )}


        </>
    )
}

export default HallNigran;