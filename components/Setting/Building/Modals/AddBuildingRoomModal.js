import {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useRouter} from "next/router";
import Modal from 'react-bootstrap/Modal';
import api, {BASE_URL} from "../../../../pages/api/api";

const AddBuildingRoomModal = (props) => {


    console.log("buildingList :", props.buildingList)

    const router = useRouter();
    const {register, handleSubmit} = useForm({mode: 'all'});

    const onSubmit = (values) => {
        fetch(`${BASE_URL}/settings/${props.session_data.user?.madrasha_slug}/room/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": props.session_data.user?.madrasha_id,
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
            <Modal {...props} size="lg">

                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Building Room
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
        </>

    );
};


export default AddBuildingRoomModal;