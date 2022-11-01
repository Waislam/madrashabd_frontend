import {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';

const AddCommitteeModal = (props) => {

    const {register, handleSubmit} = useForm({mode: 'all'});

    const onSubmit = (values) => {
        fetch("http://127.0.0.1:8086/committee/list/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": 1,
                    "member_name": values.member_name,
                    "member_designation": values.member_designation,
                    "phone_number": values.phone_number
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
                        Add Committee List
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Member Name"
                                    className="form-control"
                                    name="member_name"
                                    {...register("member_name")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Designation"
                                    className="form-control"

                                    name="member_designation"
                                    {...register("member_designation")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Phone Number "
                                    className="form-control"
                                    name="phone_number"
                                    {...register("phone_number")}
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


export default AddCommitteeModal;