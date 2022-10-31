import {useRef, useState} from 'react';
import Modal from 'react-bootstrap/Modal';


const DeleteExtraActivityModal = (props) => {

    const deleteExtraActivity = () => {
        fetch(`http://127.0.0.1:8086/talimat/extra-activity/detail/${props.extra_activity_delete_data}/`, {
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
                        Delete ExtraActivity
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <h3>Do you want to delete this ExtraActivity</h3>
                        <button className="btn btn-primary mx-2" onClick={() => deleteExtraActivity()}>Yes</button>
                        <button className="btn btn-danger">No</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default DeleteExtraActivityModal;