import {useRef, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {useRouter} from "next/router";
import api, {BASE_URL} from "../../../pages/api/api";

const DeletePermanentMemberModal = (props) => {
    const router = useRouter();

    const deletePermanentMember = () => {
        fetch(`${BASE_URL}/committee/permanent-members/details/${props.permant_member_old_data}/`, {
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
                        Delete Permanent Members
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center mb-4">
                        <h5 className="mb-4">Do you want to delete this Delete Permanent Members</h5>
                        <button className="brand-btn mx-2" onClick={() => deletePermanentMember()}>Yes</button>
                        <button className="brand-btn" onClick={(props.onHide)}>No</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default DeletePermanentMemberModal;