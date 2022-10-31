import {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';

const UpdateExtraActivityModal = (props) => {

     const old_data = {
        "category": props.extra_activity_old_data?.category,
        "duration": props.extra_activity_old_data?.duration,
        "start_time": props.extra_activity_old_data?.start_time,
        "place": props.extra_activity_old_data?.place,
        "date": props.extra_activity_old_data?.date,
        "managed_by": props.extra_activity_old_data?.managed_by,
    };
    const {register, handleSubmit} = useForm({mode: 'all', defaultValues:old_data});

    const onSubmit = (values) => {
        fetch(`http://127.0.0.1:8086/talimat/extra-activity/detail/${props.extra_activity_old_data.id}/`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": 1,
                    // "madrasha": props.extra_activity_old_data?.madrasha?.id,
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

        props.onHide()

    };

    return (
        <>
            <Modal {...props} size="lg">

                <Modal.Header closeButton>
                    <Modal.Title>
                        Update ExtraActivity
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Category"
                                    className="form-control"
                                    name="category"
                                    {...register("category")}
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


export default UpdateExtraActivityModal;