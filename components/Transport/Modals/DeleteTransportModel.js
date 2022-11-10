import {useRef, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import api, {BASE_URL} from "../../../pages/api/api";
import {useRouter} from "next/router";

const DeleteTransportModel = (props) => {
    const router = useRouter();
    const deleteTransport = () => {
        fetch(`${BASE_URL}/transport/details/${props.delete_transport_list}/`, {
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