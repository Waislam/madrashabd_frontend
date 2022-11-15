import {useRef, useState} from 'react';
import {useRouter} from "next/router";
import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import {BASE_URL} from '../../../../pages/api/api';

const AddExtraActivityModal = (props) => {
    const router = useRouter();

    const {register, handleSubmit} = useForm({mode: 'all'});

    const onSubmit = (values) => {
        fetch(`${BASE_URL}/talimat/${props.session_data.user?.madrasha_slug}/extra-activity/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": 1,
                    "category": values.category,
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


        props.onHide();
        router.reload();

    };

    return (
        <>
            <Modal {...props} size="lg">

                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Extra Activity
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Programe Name</label>
                                <input
                                    type="text"
                                    placeholder="Category"
                                    className="form-control"
                                    name="category"
                                    {...register("category")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Duration</label>
                                <input
                                    type="text"
                                    placeholder="Duration"
                                    className="form-control"
                                    name="duration"
                                    {...register("duration")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Start Time</label>
                                <input
                                    type="text"
                                    placeholder="Start Time"
                                    className="form-control"
                                    onFocus={(e) => {
                                        e.target.type = "time"
                                    }}
                                    name="start_time"
                                    {...register("start_time")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Programe Place</label>
                                <input
                                    type="text"
                                    placeholder="Place"
                                    className="form-control"
                                    name="place"
                                    {...register("place")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Programe Date</label>
                                <input
                                    type="text"
                                    placeholder="Date"
                                    className="form-control"
                                    onFocus={(e) => {
                                        e.target.type = "date"
                                    }}
                                    name="date"
                                    {...register("date")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Managed by</label>
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


export default AddExtraActivityModal;