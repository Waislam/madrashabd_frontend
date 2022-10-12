import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./BookList.module.css";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";


const LibraryBookUpdateModal = (props) => {
    console.log("LibraryBookUpdateModal(): props.library", props.library)

    const preLoadedValues = {
        "book_number": props.library.number,
        "book_name": props.library.name,

    }


    const {
        handleSubmit,
        formState: {errors},
        register,
    } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    });

    const onSubmit = (values) => {
        console.log("values", values)
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
                    Update Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book Number</label>
                            <input
                                type="text"
                                name="book_number"
                                className="form-control"
                                placeholder="Book Number"
                                {...register("book_number")}
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book Name</label>
                            <input
                                type="text"
                                name="book_name"
                                defaultValue=''
                                className="form-control"
                                placeholder="Book Name"
                                {...register("book_name")}
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book part</label>
                            <input
                                type="text"
                                name="book_part"
                                defaultValue=''
                                className="form-control"
                                placeholder="Book part"
                                {...register("book_part")}
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Category</label>
                            <div className="input-group">
                                <select
                                    className="form-select"
                                    name="book_category"
                                    {...register("book_category")}
                                >
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book for class</label>
                            <input
                                type="text"
                                name="book_for_class"
                                defaultValue=''
                                className="form-control"
                                placeholder="class Name"
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book Translator</label>
                            <input
                                type="text"
                                name="translator"
                                defaultValue=''
                                className="form-control"
                                placeholder="Book Translator"
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book Publication</label>
                            <input
                                type="text"
                                name="publication"
                                defaultValue=''
                                className="form-control"
                                placeholder="Book Publication"
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book Origianl writter</label>
                            <input
                                type="text"
                                name="original_writer"
                                defaultValue=''
                                className="form-control"
                                placeholder="Book writter"
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book Language</label>
                            <input
                                type="text"
                                name="language"
                                defaultValue=''
                                className="form-control"
                                placeholder="Book Language"
                            />
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LibraryBookUpdateModal
