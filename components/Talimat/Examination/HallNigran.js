import SideMenu from './ExamSideMenu';
import taliamatstyles from '../Talimat.module.css'
import ExamHeader from './ExamHeader'
import styles from './Examination.module.css'
import HallNigranCreateModal from "./HallNigranModal/HallNigranCreateModal";
import {useState} from "react";
import HallNigranDeleteModal from "./HallNigranModal/HallNigranDeleteModal";
import HallNigranEditModal from "./HallNigranModal/HallNigranEditModal";
import api from "../../../pages/api/api";

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
        setHallNigranId(hallNigranIdValue)
        handleHallNigranDeleteModalShow()
    }

    // edit modal
    const getHallNigar = (hallNigranIdValue) => {
        setLoading(true)
        api.get(`talimat/hall-duty/detail/${hallNigranIdValue}/`)
            .then((response) => {
                console.log("response", response.data)
                setHallNigarData(response.data.data)
                setLoading(false)
            }).catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }

    const handleHallNigranEditModalClose = () => setHallNigranEditModalShow(false);
    const handleHallNigranEditModalShow = () => setHallNigranEditModalShow(true);

    const handleHallNigranEdit = (hallNigranIdValue) => {
        console.log("hallNigranIdValue", hallNigranIdValue)
        setHallNigranId(hallNigranIdValue)
        getHallNigar(hallNigranIdValue)
        handleHallNigranEditModalShow()
    }

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
                                                        <div className="table-responsive">
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
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" className={styles.defaultBtn}>download
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="add-hall-nigran mt-5">
                                                    <form action="#" method="POST">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <input type="text" className="form-control"
                                                                       placeholder="date"/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Chief of Nigran Name"/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Assitant Nigran/s"/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Room/Hall number"/>
                                                            </div>
                                                            <div className="mt-3">
                                                                <button type="submit"
                                                                        className={styles.defaultBtn}>Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
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

            // modals
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