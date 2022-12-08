import React from "react";
import Image from "next/image";
import DarulEkmaNav from './DarulEkmaNav'
import styles from './DarulEkam.module.css'
import studentLogo from '../../public/assets/admission/students.png'
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {BASE_URL} from "../../pages/api/api";
import {useRouter} from "next/router";
// import { idID } from "@mui/material/locale";


const DarulEkam = ({distributed_seatList}) => {
    const dodid = distributed_seatList;

    const router = useRouter();


    const columns = [
        {
            field: "students.user",
            headerName: "Name",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) => {
                return `${params.row.students?.user?.first_name} ${params.row.students?.user?.last_name}`
            }
        },
        {
            field: "building",
            headerName: "Building",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) =>
                `${params.value?.building_name || ''}`,
        },
        {
            field: "floor",
            headerName: "Floor",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            field: "room",
            headerName: "Room",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) =>
                `${params.value?.room_name || ''}`

        },
        {
            field: "seat",
            headerName: "Seat",
            width: 50,
            valueGetter: (params) =>
                `${params.value?.seat_number || ''}`
        },
        {
            field: "students",
            headerName: "Class",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) =>
                `${params.value?.admitted_class?.name || ''}`
        },
        {
            headerName: 'Action',
            field: 'Action',
            headerAlign: 'center',
            align: 'center',
            width: 160,
            renderCell: (params) => {
                return (
                    <div>
                        <button className="brand-btn ms-2"
                                onClick={() => handleSeatDelete(params.row.id)}>Delete
                        </button>
                    </div>
                );
            }
        },
    ];

    const handleSeatDelete = (seat_id) => {
        let requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch(`${BASE_URL}/darul-ekama/seat-booking-detail/${seat_id}/`, requestOptions)
            .then(response => response.text())
            .then((result) => {
                console.log(result);
                router.reload()
            })
            .catch(error => console.log('error', error));
    };

    return (
        <>
            <section className={styles.darulEkamSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-3">
                            <div className={styles.darulEkamRightSide}>
                                <div className={`${styles.customCard} card shadow`}>
                                    <div className={`${styles.customCardHeader} card-header`}>
                                        <Image
                                            src={studentLogo}
                                            className="img-responsive"
                                            alt="Logo missing"
                                            height={40}
                                            width={40}
                                        />
                                    </div>
                                    <DarulEkmaNav/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="darulEkam">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="darulEkamTable">
                                            <div className="row">
                                                <div className="col">
                                                    <Box sx={{height: 500, width: '100%'}}>
                                                        <DataGrid
                                                            rows={distributed_seatList}
                                                            columns={columns}
                                                            // disableColumnFilter
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
                                                        >
                                                        </DataGrid>
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
            </section>
        </>
    )


};


export default DarulEkam;




