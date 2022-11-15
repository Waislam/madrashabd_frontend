import {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useRouter} from "next/router";
import Modal from 'react-bootstrap/Modal';

const UpdateTransportModal = (props) => {


    return (
        <>
            <Modal {...props} size="lg">

                <Modal.Header closeButton>
                    <Modal.Title>
                        Update Gari List
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Hello</h4>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default UpdateTransportModal;