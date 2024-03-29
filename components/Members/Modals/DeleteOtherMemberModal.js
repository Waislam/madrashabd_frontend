import {useRef, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {useRouter} from "next/router";
import api, {BASE_URL} from "../../../pages/api/api";


const DeleteOtherMemberModal = (props) => {
    const router = useRouter();
    const deleteOtherMember = () => {
        fetch(`${BASE_URL}/committee/other-member/details/${props.other_member_old_data}/`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }).then((remove) => console.log("removed :", remove))
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
                        Delete Other Member
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center mb-4">
                        <h5 className="mb-4">Do you want to delete this Delete Other Member</h5>
                        <button className="btn btn-primary mx-2" onClick={() => deleteOtherMember()}>Yes</button>
                        <button className="btn btn-danger">No</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default DeleteOtherMemberModal;