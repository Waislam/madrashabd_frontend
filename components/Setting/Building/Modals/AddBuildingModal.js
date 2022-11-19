import {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useRouter} from "next/router";
import Modal from 'react-bootstrap/Modal';
import api, {BASE_URL} from "../../../../pages/api/api";

const AddBuildingModal = (props) => {

    const router = useRouter();
    const {register, handleSubmit} = useForm({mode: 'all'});
    
    const onSubmit = (values) => {
        fetch(`${BASE_URL}/settings/${props.session_data.user?.madrasha_slug}/building/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": props.session_data.user?.madrasha_id,
                    "building_name": values.building_name,
                    "total_floor": values.total_floor,
                    "total_room": values.total_room
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
                        Add Building
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Building Name"
                                    className="form-control"
                                    name="building_name"
                                    {...register("building_name")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="number"
                                    placeholder="Total Floor"
                                    className="form-control"
                                    name="total_floor"
                                    {...register("total_floor")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="number"
                                    placeholder="Total Room"
                                    className="form-control"
                                    name="total_room"
                                    {...register("total_room")}
                                />
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


export default AddBuildingModal;