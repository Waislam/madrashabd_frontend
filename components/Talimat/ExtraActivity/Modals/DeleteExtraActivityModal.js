import {useRef, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {useRouter} from "next/router";
import api, {BASE_URL} from "../../../../pages/api/api";

const DeleteExtraActivityModal = (props) => {
    const router = useRouter();

    const deleteExtraActivity = () => {
        fetch(`${BASE_URL}/talimat/extra-activity/detail/${props.extra_activity_delete_data}/`, {
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