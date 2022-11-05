import Modal from "react-bootstrap/Modal"
import styles from "../Syllabus.module.css";
import axios from "axios";
import { BASE_URL } from "../../../../pages/api/api";
import { useForm } from "react-hook-form"
import { useRouter } from "next/router";


const ResponsibilityDeleteModal = (props) => {

    const router = useRouter()

    const current_id = props.delete_id

    const { handleSubmit } = useForm()

    const onSubmit = () => {
        axios.delete(`${BASE_URL}/talimat/responsibility/detail/${current_id}/`)
            .then((response) => {
                if (response) {
                    console.log("your object has been deleted")
                }
            })
        props.onHide()
        router.reload()

    }

    return (
        <>

            <Modal {...props}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Delete Data
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="my-4">
                                <p className="text-danger">would you really like to delete?</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className={styles.defaultBtn}>ok</button>
                            <button className={`${styles.defaultBtn} float-end`} onClick={() => props.onHide()}>Cancel</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ResponsibilityDeleteModal;