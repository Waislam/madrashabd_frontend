import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
const ModalPage = (props) => {
    const { handleSubmit, register, formState: { errors } } = useForm({ mode: "all" })

    const onSubmit = async (values) => {
        let data = {
            "madrasha": 1,
            "category": values.category,
        }
        await axios.post(`${BASE_URL}/transactions/100/expense/`, expenseData)
            .then((response) => {
                console.log('Success Response: ', response.data)
            })
            .catch((error) => {
                console.log('Error Message: ', error.response.data.number)
            })
        props.onHide()
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default ModalPage;