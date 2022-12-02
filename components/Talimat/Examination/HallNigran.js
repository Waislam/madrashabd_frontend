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

const HallNigran = (props) => {
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
            field: "duty_date",
            headerName: 'Date',
            flex: 1,
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
                console.log("parama:", params)
                return (
                    < div className="float-md-end" >
                        <button className="btn btn-primary me-3"
                            onClick={() => handleHallNigranEdit(params.id)}
                        >
                            Edit
                        </button>
                        <button className="btn btn-danger me-3"
                            onClick={() => handleHallNigranDelete(params.id)}
                        >
                            Remove
                        </button>
                    </div >
                )
            }
        },

    ]

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
                                                        <Box sx={{ height: 500, width: '100%' }}>
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
                                                    <div>
                                                        <button type="button" className={styles.defaultBtn}>download
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
            </section>

            {/*modals*/}
            <HallNigranCreateModal
                show={hallNigranModalShow}
                handleClose={handleHallNigranModalClose}
            />

            <HallNigranDeleteModal
                show={hallNigranDeleteModalShow}
                handleClose={handleHallNigranDeleteModalClose}
                hallNigranId={hallNigranId}
            />

            {!loading && (
                <HallNigranEditModal
                    show={hallNigranEditModalShow}
                    handleClose={handleHallNigranEditModalClose}
                    hallNigranId={hallNigranId}
                    hallNigarData={hallNigarData}
                />
            )}


        </>
    )
}

export default HallNigran;