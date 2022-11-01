import {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../../../../pages/api/api';


const AddDawahModal = (props) => {
    const {register, handleSubmit} = useForm({mode: 'all'});

    const onSubmit = (values) => {
        fetch(`${BASE_URL}/talimat/100/dawah/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": 1,
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
                        Add Dawah
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


export default AddDawahModal;