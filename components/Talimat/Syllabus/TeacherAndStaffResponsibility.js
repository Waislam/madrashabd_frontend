import styles from './TeacherAndStaffResponsibility.module.css';
import Talimat from '../Talimat';
import taliamatstyles from '../Talimat.module.css'
import SyllabusHeader from './SyllabusHeader'
import SyllabuSideMenu from './SyllabusSideMenu';
import api, { BASE_URL } from "../../../pages/api/api"
import { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const TeacherAndStaffResponsibility = ({ handlePutRequest, handleDeleteRequest, responsibilityList, madrasha_slug, madrasha_id }) => {

    const router = useRouter()

    const [addModalShow, setAddModalShow] = useState(false)

    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "all" })

    //handle post request
    const handleModalShow = (e) => {
        e.preventDefault()
        setAddModalShow(true)
    }


    const onSubmit = async (values) => {
        const data = {
            "madrasha": madrasha_id,
            "teacher_staff": values.teacher_staff,
            "responsibility": values.responsibility
        }
        await api.post(`/talimat/${madrasha_slug}/responsibility/`, data)
            .then((response) => (
                console.log(response.data)
            ))
        setAddModalShow(false)
        router.reload()
    }

    //get list to use in datagrid
    const columns = [
        {
            field: "teacher_staff.user",
            headerName: "Teacher Name",
            width: 200,
            valueGetter: (params) => {
//                console.log("params: ", params.row?.teacher_staff?.user?.first_name)
                return `${params.row?.teacher_staff?.user?.first_name} ${params.row?.teacher_staff?.user?.last_name}`
            }
        },
         {
             field: "teacher_staff.designation",
             headerName: "Designation",
             width: 200,
             valueGetter:(params)=>{
                return `${params?.row?.teacher_staff?.designation?.name}`
             }
         },
        {
            field: "responsibility",
            headerName: "Responsibility",
            width: 400
        },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell:(params)=>{
                return(
                        <div className="float-md-end">
                            <button className="btn btn-primary me-3"
                                onClick={(e) => handlePutRequest(e, params.id)}
                            >
                                Edit
                            </button>
                            <button className="btn btn-danger"
                                onClick={() => handleDeleteRequest(params.id)}
                            >
                                Remove
                            </button>
                        </div>
                    )
            }
        },
    ]

    return (
        <>
            <section className={taliamatstyles.talimatSection}>
                <div className="container-fluid">
                    <div className="row">
                        <SyllabuSideMenu />
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <SyllabusHeader />
                                        <hr />
                                        <div className="row">
                                            <div className="sub-page">
                                                <div className={styles.syllabus}>
                                                    {/* <h2>Teacher and taff Responsibility</h2> */}
                                                    <div className="search-table mt-2">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-md-5 my-3">
                                                                    {/* <input type="text" className="form-control" placeholder="input search item" /> */}
                                                                    <h2>Teacher and taff Responsibility</h2>
                                                                </div>
                                                                <div className="col-md-2 my-3">
                                                                    {/* <button type="submit" className={styles.searchButton}>Search</button> */}
                                                                </div>
                                                                <div className="col-md-5 my-3">
                                                                    <button
                                                                        type="button"
                                                                        className={`${styles.defaultBtn} float-md-end`}
                                                                        onClick={handleModalShow}
                                                                    >
                                                                        Add
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="responsibility-table">
                                                        <Box sx={{ height: 500, width: '100%' }}>
                                                            <DataGrid
                                                                rows={responsibilityList}
                                                                columns={columns}
                                                                disableColumnFilter
                                                                disableColumnSelector
                                                                disableDensitySelector
                                                                components={{ Toolbar: GridToolbar }}
                                                                // experimentalFeatures={{ newEditingApi: false }}
                                                                componentsProps={{
                                                                    toolbar: {
                                                                        showQuickFilter: true,
                                                                        quickFilterProps: { debounceMs: 500 },
                                                                    },
                                                                }}
                                                            />
                                                        </Box>
                                                        {/* <div className="table-responsive">
                                                            <table className="table table-striped">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Name</th>
                                                                        <th>Designation</th>
                                                                        <th>Responsiblity</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {responsibilityList && responsibilityList.map((data, index) => (
                                                                        <tr key={data.id}>
                                                                            <td>
                                                                                {data.teacher_staff?.user?.first_name} {data.teacher_staff?.user?.last_name}
                                                                            </td>
                                                                            <td>{data.teacher_staff?.designation?.name} </td>
                                                                            <td className="text-truncate" style={{ "maxWidth": 300 }}>
                                                                                {data.responsibility}
                                                                            </td>
                                                                            <td>
                                                                                <button className="btn btn-primary me-3"
                                                                                    onClick={(e) => handlePutRequest(e, data.id)}
                                                                                >
                                                                                    Edit
                                                                                </button>
                                                                                <button className="btn btn-danger"
                                                                                    onClick={() => handleDeleteRequest(data.id)}
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div> */}
                                                    </div>
                                                    <div>
                                                        <button type="button" className={styles.defaultBtn}>Download pdf</button>
                                                    </div>
                                                </div>
                                                {/* === add Responsibility start ====== */}
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
                                                                            {...register("teacher_staff", { required: "Teacher ID is required" })}
                                                                        />
                                                                        <p className="text-danger">{errors.teacher_staff?.message}</p>
                                                                    </div>
                                                                    <div className="my-4">
                                                                        <label className="mb-2">Teacher/Staff Responsibility</label>
                                                                        <input type="text" className="form-control"
                                                                            placeholder="Responsiblity"
                                                                            name="responsibility"
                                                                            {...register("responsibility", { required: "Responsiblity is required" })}
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
            </section>

        </>
    )
}

export default TeacherAndStaffResponsibility;