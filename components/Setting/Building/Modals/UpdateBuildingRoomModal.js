import styles from "../../Setting.module.css";
import axios from "axios";
import api, {BASE_URL} from "../../../../pages/api/api"
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Modal from "react-bootstrap/Modal";
import {useForm} from "react-hook-form";


const UpdateBuildingRoomModal = (props) => {
    const router = useRouter();

    const old_data = {
        "building": props.room_old_data?.building?.id,
        "room_name": props.room_old_data?.room_name,
        "total_seat": props.room_old_data?.total_seat,
        "floor": props.room_old_data?.floor
    };
    const {register, handleSubmit} = useForm({mode: 'all', defaultValues: old_data});

    const onSubmit = (values) => {
        fetch(`${BASE_URL}/settings/room/detail/${props.room_old_data.id}/`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": props.room_old_data?.madrasha?.id,
                    "building": values.building,
                    "room_name": values.room_name,
                    "total_seat": values.total_seat,
                    "floor": values.floor
                },
            )
        }).then((res) => res.json())
            .catch((err) => {
                console.log(err.message)
            });

        props.onHide();
        router.reload();

    };

    return (
        <>
            <div className="update-class">
                <Modal {...props}
                       size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                       dialogClassName={`${styles.customDialog}`}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Update Building
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        placeholder="Room Name"
                                        className="form-control"
                                        name="room_name"
                                        {...register("room_name")}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="number"
                                        placeholder="Total Seat"
                                        className="form-control"
                                        name="total_seat"
                                        {...register("total_seat")}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="number"
                                        placeholder="Floor"
                                        className="form-control"
                                        name="floor"
                                        {...register("floor")}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <select className="form-select" name="building" {...register("building")}>
                                        {

                                            props.buildingList?.map((data) => (
                                                <option key={data.id} value={data.id}>{data?.building_name}</option>
                                            ))
                                        }

                                    </select>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
};

export default UpdateBuildingRoomModal;