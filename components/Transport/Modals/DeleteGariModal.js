import {useRef, useState} from 'react';
import {useRouter} from "next/router";
import Modal from 'react-bootstrap/Modal';
import api, {BASE_URL} from "../../../pages/api/api";


const DeleteGariModal = (props) => {
    const router = useRouter();
    const deleteGariList = () => {
        fetch(`${BASE_URL}/transport/vehicle-info/details/${props.delete_gari_list}/`, {
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
                        Delete Gari
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <h3>Do you want to delete this Gari</h3>
                        <button className="brand-btn mx-2" onClick={() => deleteGariList()}>Yes</button>
                        <button className="brand-btn" onClick={(props.onHide)}>No</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default DeleteGariModal;