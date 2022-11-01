import {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../../../../pages/api/api';

const UpdateDawahModal = (props) => {

    const old_data = {
        "program_name": props.old_dawah_data?.program_name,
        "duration": props.old_dawah_data?.duration,
        "start_time": props.old_dawah_data?.start_time,
        "place": props.old_dawah_data?.place,
        "date": props.old_dawah_data?.date,
        "managed_by": props.old_dawah_data?.managed_by,
    };

    const {register, handleSubmit} = useForm({mode: 'all', defaultValues:old_data});

    const onSubmit = (values) => {
        fetch(`${BASE_URL}/talimat/dawah/detail/${props.old_dawah_data.id}/`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    // "madrasha": 1,
                    "madrasha": props.old_dawah_data?.madrasha?.id,
                    "program_name": values.program_name,
                    "duration": values.duration,
                    "start_time": values.start_time,
                    "place": values.place,
                    "date": values.date,
                    "managed_by": values.managed_by,
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
                        Update Dawah Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Program Name"
                                    className="form-control"
                                    name="program_name"
                                    {...register("program_name")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Duration"
                                    className="form-control"
                                    name="duration"
                                    {...register("duration")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Start Time"
                                    className="form-control"
                                    onFocus={(e)=>{e.target.type="time"}}
                                    name="start_time"
                                    {...register("start_time")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Place"
                                    className="form-control"
                                    name="place"
                                    {...register("place")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Date"
                                    className="form-control"
                                    onFocus={(e)=>{e.target.type="date"}}
                                    name="date"
                                    {...register("date")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Managed by"
                                    className="form-control"
                                    name="managed_by"
                                    {...register("managed_by")}
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


export default UpdateDawahModal;