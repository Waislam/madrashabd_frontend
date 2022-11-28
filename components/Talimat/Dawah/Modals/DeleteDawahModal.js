import {useRef, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {useRouter} from "next/router";
import api, {BASE_URL} from "../../../../pages/api/api";

const DeleteDawahModal = (props) => {
    const router = useRouter();

    const deleteDawah = () => {
        fetch(`${BASE_URL}/talimat/dawah/detail/${props.delete_dawah}/`, {
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
                        Delete Dawah
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <h3>Do you want to delete this Dawah</h3>
                        <button className="brand-btn mx-2" onClick={() => deleteDawah()}>Yes</button>
                        <button className="brand-btn" onClick={(props.onHide)}>No</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default DeleteDawahModal;