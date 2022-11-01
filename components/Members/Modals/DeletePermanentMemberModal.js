import {useRef, useState} from 'react';
import Modal from 'react-bootstrap/Modal';


const DeletePermanentMemberModal = (props) => {

    const deletePermanentMember = () => {
        fetch(`http://127.0.0.1:8086/committee/permanent-members/details/${props.permant_member_old_data}/`, {
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
                        Delete Permanent Members
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <h3>Do you want to delete this Delete Permanent Members</h3>
                        <button className="btn btn-primary mx-2" onClick={() => deletePermanentMember()}>Yes</button>
                        <button className="btn btn-danger">No</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default DeletePermanentMemberModal;