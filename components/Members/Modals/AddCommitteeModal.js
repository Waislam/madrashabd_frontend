import {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useRouter} from "next/router";
import Modal from 'react-bootstrap/Modal';
import api, {BASE_URL} from "../../../pages/api/api";

const AddCommitteeModal = (props) => {
    const router = useRouter();
    const {register, handleSubmit} = useForm({mode: 'all'});

    const onSubmit = (values) => {
        fetch(`${BASE_URL}/committee/${props.session.user?.madrasha_slug}/list/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": props.session.user?.madrasha?.id,
                    "member_name": values.member_name,
                    "member_designation": values.member_designation,
                    "phone_number": values.phone_number
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
                        <button className="brand-btn">
                            Submit
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default AddCommitteeModal;