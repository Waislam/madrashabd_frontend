import {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useRouter} from "next/router";
import Modal from 'react-bootstrap/Modal';
import api, {BASE_URL} from "../../../pages/api/api";


const AddOtherMemberModal = (props) => {
    const router = useRouter();
    const {register, handleSubmit} = useForm({mode: 'all'});

    const onSubmit = (values) => {
        fetch(`${BASE_URL}/committee/${props.session.user?.madrasha_slug}/other-members/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": props.session.user?.madrasha?.id,
                    "member_name": values.member_name,
                    "address": values.address,
                    "phone_number": values.phone_number
                },
            )
        }).then((res) => res.json())
            .then((res) => {
                router.reload();
            })
            .catch((err) => {
                console.log(err.message)
            });
        props.onHide();
    };

    return (
        <>
            <Modal {...props} size="lg">

                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Other Member
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
                                    placeholder="Address"
                                    className="form-control"
                                    name="address"
                                    {...register("address")}
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
                        <button className="brand-btn">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default AddOtherMemberModal;