import React from "react";
import Image from "next/image";
import DarulEkmaNav from './DarulEkmaNav'
import styles from './DarulEkam.module.css'
import studentLogo from '../../public/assets/admission/students.png'
import { useState } from "react";
import api from '../../pages/api/api'
import { useSession } from "next-auth/react"
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { set } from "react-hook-form";


const SeatBooking = ({ buildings, getRoomList, room_list, building_id }) => {

    const { data: session, status } = useSession()
    const madrasha_slug = session?.user.madrasha_slug
    const madrasha_id = session?.user.madrasha_id
    // console.log('...session vlaue: ', session)

    const [seat_list, setSeatList] = useState(null)
    const [studentAssignModal, setStudentAssignModal] = useState(false)
    const [seatId, setSeatId] = useState('')
    const [roomId, setRoomId] = useState('')
    const [floorNumber, setFloorNumber] = useState('')
    const [seatNumber, setSeatNumber] = useState('')
    const [errorResponse, setErrorResponse] = useState('')


    //handle SeatList of a selected room
    const getSeatList = async (e) => {
        const room_vlaue = e.target.value
        const list = await api.get(`/settings/${madrasha_slug}/seat/${room_vlaue}/`)
        const seatList = list.data
        setSeatList(seatList)
    }

    //handle student assignment
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "all" })

    const handdleModalShow = (seat_id, room_id, floor_number, seat_number) => {
        setFloorNumber(floor_number)
        setRoomId(room_id)
        setSeatId(seat_id)
        setSeatNumber(seat_number)
        setStudentAssignModal(true)
    }


    const onSubmit = async (values) => {
        // console.log("studnet_id: ", values.students)
        // console.log('madrasha: ', madrasha_id)
        // console.log('building_id: ', building_id)
        // console.log('floorNumber: ', floorNumber)
        // console.log('roomId: ', roomId)
        // console.log('seatId: ', seatId)

        const data = {
            "floor": floorNumber,
            "is_active": true,
            "madrasha": madrasha_id,
            "students": values.students,
            "building": building_id,
            "room": roomId,
            "seat": seatId
        }
        api.post(`/darul-ekama/100/seat-booking/`, data)
            .then((response) => {
                const res = response.status
                if (res == 201) {
                    const seat_status = {
                        "madrasha": madrasha_id,
                        "room": roomId,
                        'seat_number': seatNumber,
                        'is_available': false
                    }
                    api.put(`/settings/seat/detail/${seatId}/`, seat_status)
                        .then((res) => {
                            const update_status = res.status
                            if (update_status == 200) {
                                const list = api.get(`/settings/${madrasha_slug}/seat/${roomId}/`)
                                    .then((res) => {
                                        const seatList = res.data
                                        alert("Seat has been booked successfully")
                                        setSeatList(seatList)
                                    })
                            }
                        })
                }
            }).catch((error) => {
                const errorResponse = error.request.responseText
                setErrorResponse(errorResponse)
                setStudentAssignModal(true)
            })
        setStudentAssignModal(false)

    }


    return (
        <>
            <section className={styles.darulEkamSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className={`${styles.customCard} card shadow`}>
                                <div className={`${styles.customCardHeader} card-header`}>
                                    <Image src={studentLogo} className="img-responsive"
                                        alt="Logo missing" height={40} width={40} />
                                </div>
                                {/* DarulEkma Nav*/}
                                <DarulEkmaNav />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="seatBooking">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="seatBookingForm mb-4">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            onChange={getRoomList}
                                                        >
                                                            <option>Select Building</option>
                                                            {buildings && buildings.map((building) => (
                                                                <option value={building.id} key={building.building_name}>{building.building_name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <select className="form-select"
                                                            aria-label="Default select example"
                                                            onChange={getSeatList}
                                                        >
                                                            <option>Select Floor and Room</option>
                                                            {room_list && room_list.map((room) => (
                                                                <option value={room.id} key={room.room_name}> Floor:{room.floor} Room:{room.room_name}</option>
                                                            ))}

                                                        </select>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <button className={styles.defaultBtn}>Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="seatNumber">
                                            <form action="#">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="mb-4 text-center">Seat Booking</h4>
                                                        {/* <p>Total Seat:</p>
                                                        <p>Booked Seat:</p>
                                                        <p>Blank Seat:</p> */}
                                                        <hr />
                                                        <div className="row">
                                                            {seat_list && seat_list.map((seat) => (
                                                                <div className="col-md-1 mb-4"
                                                                    key={seat.seat_number}
                                                                    value={seat.id}
                                                                >
                                                                    {seat.is_available ?
                                                                        <button type="button"
                                                                            className={`${styles.seatBookingBox}`}
                                                                            onClick={() => handdleModalShow(seat.id, seat.room?.id, seat.room?.floor, seat.seat_number)}
                                                                        >
                                                                            {seat.seat_number}
                                                                        </button>
                                                                        :
                                                                        <button type="button"
                                                                            className={`${styles.seatBookingBoxSuccess} btn-success`}
                                                                        >
                                                                            {seat.seat_number}
                                                                        </button>
                                                                    }

                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* studnet id input modal */}
                            <div className="add-student-darulekama">
                                <Modal show={studentAssignModal} onHide={() => setStudentAssignModal(false)}
                                    dialogClassName={`${styles.customDialog}`}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            Input Student Id
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            {/* <form> */}
                                            <div className="row">
                                                <div className="my-4">
                                                    <input type="text" className="form-control"
                                                        name="students"
                                                        {...register("students", { required: "Student Id is required" })}
                                                    />
                                                    <p className="text-danger">{errors.students?.message}</p>
                                                    <p className="text-danger">{errorResponse}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 float-end">
                                                <button className={styles.defaultBtn}>Assign</button>
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


export default SeatBooking;




