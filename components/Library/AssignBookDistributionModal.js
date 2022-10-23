import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {BASE_URL} from '../../pages/api/api'
import {useForm} from 'react-hook-form'

const modalp = (props) => {

    const {handleSubmit, register,} = useForm({mode: "all"});

    const onSubmit = (values) => {
        console.log(values.student_roll_id);

        // const studentDeta = fetch("http://127.0.0.1:8086/students/detail/S102/")
        //         //     .then((response) => response.json())
        //         //     .then((data) => {
        //         //         console.log('Success:', data);
        //         //     });

        const student_roll = values.student_roll_id;
        const book_id = props.bookID;

        fetch(`http://127.0.0.1:8086/library/book-distribution-assign/${student_roll}/${book_id}/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "madrasha": 1,
                "book_number": props.bookID,
            })
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        props.onHide();

    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Assign Book Distribution
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            type="text"
                            placeholder="Student Roll ID"
                            className="form-control mb-3"
                            name="student_roll_id"
                            {...register("student_roll_id")}
                        />
                    </div>
                    <div>
                        <button className="btn btn-danger">Okay</button>
                        <button onClick={props.onHide} className="btn btn-primary float-end">Cancel</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default modalp;