import {useRef, useState} from 'react';
import Modal from 'react-bootstrap/Modal';


const DeleteTransportModel = (props) => {

    const deleteTransport = () => {
        fetch(`http://127.0.0.1:8086/transport/details/${props.delete_transport_list}/`, {
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
                        Delete Transport
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <h3>Do you want to delete this Transport</h3>
                        <button className="btn btn-primary mx-2" onClick={() => deleteTransport()}>Yes</button>
                        <button className="btn btn-danger">No</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default DeleteTransportModel;