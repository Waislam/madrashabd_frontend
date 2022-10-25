import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./BookList.module.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { BASE_URL } from '../../pages/api/api';
import axios from 'axios';


const LibraryBookUpdateModal = (props) => {
    const preLoadedValues = {
        number: props.library.number,
        name: props.library.name,
        part: props.library.part,
        category: props.library.category,
        book_for_class: props.library.book_for_class,
        translator: props.library.translator,
        publication: props.library.publication,
        original_writer: props.library.original_writer,
        language: props.library.language

    };

    const {handleSubmit, formState: { errors }, register,} = useForm({
                                                                mode: "onChange",
                                                                defaultValues: preLoadedValues
                                                            });


    const onSubmit = (values) => {
        const current_id = props.library.id;
        axios.put(`${BASE_URL}/library/detail/${current_id}/`, values)
            .then((response)=>{
                console.log('this is database updatd response: ', response.data)
            });
        
        props.onHide()
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book Number</label>
                            <input
                                type="text"
                                name="number"
                                className="form-control"
                                placeholder="Book Number"
                                {...register("number", {required:"this field is required"})}
                            />
                            <p className="text-danger">{errors.number?.message}</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Book Name"
                                {...register("name", {required:"this field is required"})}
                            />
                            <p className="text-danger">{errors.name?.message}</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book part</label>
                            <input
                                type="text"
                                name="book_part"
                                className="form-control"
                                placeholder="Book part"
                                {...register("part", {required:"this field is required"})}
                            />
                            <p className="text-danger">{errors.part?.message}</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Category</label>
                            <div className="input-group">
                                <select className="form-select"
                                    name="category"
//                                    defaultValue={preLoadedValues.category}
                                    {...register("category", {required:"this field is required"})}
                                >
                                    <option value="nesabi">Nesabi</option>
                                    <option value="hadis/usolehadis">Hadis/Usolehadis</option>
                                    <option value="fekah/usolefekhan">Fekah/Usolefekhan</option>
                                    <option value="tafsir">Tafsir</option>
                                    <option value="mantek">Mantek</option>
                                    <option value="quran">Quran</option>
                                    <option value="akida">Akida</option>
                                    <option value="etihash">Etihash</option>
                                    <option value="orthoniti">Orthoniti</option>
                                    <option value="vugol">Vugol</option>
                                    <option value="arbi shahitto">Arbi shahitto</option>
                                    <option value="nahu">Nahu</option>
                                    <option value="sorof">Sorof</option>
                                    <option value="sirat">Sirat</option>
                                    <option value="eslah">Eslah</option>
                                    <option value="ovidhan">Ovidhan</option>
                                    <option value="golpo shahitto">Golpo shahitto</option>
                                    <option value="fatwa">Fatwa</option>
                                    <option value="balagad">Balagad</option>
                                    <option value="rasayel">Rasayel</option>
                                    <option value="other">Other</option>
                                </select>
                                <p className="text-danger">{errors.category?.message}</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book for class</label>
                            <input
                                type="text"
                                name="book_for_class"
                                className="form-control"
                                placeholder="class Name"
                                {...register("book_for_class", {required:"this field is required"})}
                            />
                            <p className="text-danger">{errors.book_for_class?.message}</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book Translator</label>
                            <input
                                type="text"
                                name="translator"
                                className="form-control"
                                placeholder="Book Translator"
                                {...register("translator", {required:"this field is required"})}
                            />
                            <p className="text-danger">{errors.translator?.message}</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book Publication</label>
                            <input
                                type="text"
                                name="publication"
                                className="form-control"
                                placeholder="Book Publication"
                                {...register("publication", {required:"this field is required"})}
                            />
                             <p className="text-danger">{errors.publication?.message}</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book Origianl writter</label>
                            <input
                                type="text"
                                name="original_writer"
                                className="form-control"
                                placeholder="Book writter"
                                {...register("original_writer", {required:"this field is required"})}
                            />
                            <p className="text-danger">{errors.original_writer?.message}</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mb-2">Book Language</label>
                            <input
                                type="text"
                                name="language"
                                className="form-control"
                                placeholder="Book Language"
                                {...register("language", {required:"this field is required"})}
                            />
                            <p className="text-danger">{errors.language?.message}</p>
                        </div>
                    </div>
                    <button type="submit" className={`${styles.modalBtn}`}>Save</button>
                    <button type="button" className={`${styles.modalBtn} ms-3`} onClick={props.onHide}>Cancel</button>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default LibraryBookUpdateModal
