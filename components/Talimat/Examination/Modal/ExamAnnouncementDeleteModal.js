import React, {useState} from 'react';
import Router from 'next/router'
import {useRouter} from 'next/router'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import api from "../../../../pages/api/api";


const ExamAnnouncementDeleteModal = (props) => {
    const [deleteLoading, setDeleteLoading] = useState(false)
    const router = useRouter()
    // console.log("examAnnouncementId", props.examAnnouncementId)

    const handleExamAnnouncementDelete = () => {
        setDeleteLoading(true)

        api.delete(`talimat/exam-announcement/detail/${props.examAnnouncementId}/`)
            .then((response) => {
                console.log("response", response.data)
                props.handleClose()
                setDeleteLoading(true)
                router.reload()
            })
            .catch((error) => {
                console.log("Error", error)
            })

    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    {
                        !deleteLoading ?
                            <Button variant="primary" onClick={handleExamAnnouncementDelete}>
                                Delete
                            </Button>
                            :
                            <Button variant="primary">
                                Loading...
                            </Button>

                    }

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ExamAnnouncementDeleteModal