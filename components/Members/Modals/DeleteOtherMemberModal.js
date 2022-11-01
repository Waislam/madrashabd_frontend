import {useRef, useState} from 'react';
import Modal from 'react-bootstrap/Modal';


const DeleteOtherMemberModal = (props) => {

    const deleteOtherMember = () => {
        fetch(`http://127.0.0.1:8086/committee/other-member/details/${props.delete_other_member_data}/`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }).then((remove) => console.log("removed :", remove))
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
                        Delete Other Member
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <h3>Do you want to delete this Delete Other Member</h3>
                        <button className="btn btn-primary mx-2" onClick={() => deleteOtherMember()}>Yes</button>
                        <button className="btn btn-danger">No</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default DeleteOtherMemberModal;