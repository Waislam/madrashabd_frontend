import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {useRouter} from "next/router";
import {BASE_URL} from '../../pages/api/api'

function DeleteAlertModal(props) {
    const router = useRouter();
    let bookUpdateIsAvailable = {is_available: true, name: props.bookName};

    const handleDeleteID = (event) => {
        event.preventDefault();
        axios.delete(`${BASE_URL}/library/book-distribution/delete/${props.deleteID}/`);


        axios.put(`${BASE_URL}/library/detail/${props.bookID}/`, bookUpdateIsAvailable)
            .then((response) => {
                console.log('this is database updated response: ', response.data)
            });

        props.onHide();
        router.reload();
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete This Book Distribution
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button type="button" className="btn btn-danger" onClick={handleDeleteID}>Okay</Button>
                <Button onClick={props.onHide} className="float-end">Cancel</Button>
            </Modal.Body>
        </Modal>
    );
}

export default DeleteAlertModal;