import {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';

const UpdateGariModal = (props) => {

    const old_data = {
        "car_number": props.update_gari_list?.car_number,
        "driver_name": props.update_gari_list?.driver_name,
        "driver_number": props.update_gari_list?.driver_number,
        "route": props.update_gari_list?.route,
        "start_time": props.update_gari_list?.start_time,
    };
    const {register, handleSubmit} = useForm({mode: 'all', defaultValues: old_data});

    const onSubmit = (values) => {
        fetch(`http://127.0.0.1:8086/transport/vehicle-info/details/${props.update_gari_list.id}/`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": props.update_gari_list?.madrasha?.id,
                    "car_number": values.car_number,
                    "driver_name": values.driver_name,
                    "driver_number": values.driver_number,
                    "route": values.route,
                    "start_time": values.start_time,
                },
            )
        }).then((res) => res.json())
            .catch((err) => {
                console.log(err.message)
            });
        props.onHide()

    };

    return (
        <>
            <Modal {...props} size="lg">

                <Modal.Header closeButton>
                    <Modal.Title>
                        Update Gari List
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Car Number"
                                    className="form-control"
                                    name="car_number"
                                    {...register("car_number")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Driver Name"
                                    className="form-control"

                                    name="driver_name"
                                    {...register("driver_name")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Driver Number"
                                    className="form-control"
                                    name="driver_number"
                                    {...register("driver_number")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Route"
                                    className="form-control"
                                    name="route"
                                    {...register("route")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="time"
                                    placeholder="Start Time"
                                    className="form-control"
                                    name="start_time"
                                    {...register("start_time")}
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


export default UpdateGariModal;