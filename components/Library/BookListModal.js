import styles from './BookList.module.css'
import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from 'axios';
import {BASE_URL} from '../../pages/api/api';


const modalpage = ({close, shown, session}) => {
    const router = useRouter();

    const {handleSubmit, formState: {errors}, register,} = useForm({
        mode: "all",
        // defaultValues: newData
    });

    const onSubmit = async (values) => {

        let newBookData = {
            "madrasha": 1,
            "number": values.number,
            "name": values.name,
            "part": values.part,
            "category": values.category,
            "book_for_class": values.book_for_class,
            "translator": values.translator,
            "publication": values.publication,
            "original_writer": values.original_writer,
            "language": values.language
        };


        await axios.post(`${BASE_URL}/library/${session.user?.madrasha_slug}/`, newBookData)
            .then((response) => {
                console.log('Success Response: ', response.data)
            })
            .catch((error) => {
                console.log('Error Message: ', error)
            });

        close()

    };


    return shown ? (
        <>
            <div className={styles.modalBody}>
                <div className={styles.modalContent}>
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">Add New Book Here</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label className="mb-2">Book Number</label>
                                        <input type="text"
                                               name="number"
                                               className="form-control"
                                               placeholder="Book Number"
                                               {...register("number", {required: "this field is required"})}
                                        />
                                        <p className="text-danger">{errors.number?.message}</p>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="mb-2">Book Name</label>
                                        <input type="text"
                                               name="name"
                                               className="form-control"
                                               placeholder="Book Name"
                                               {...register("name", {required: "this field is required"})}
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
                                            {...register("part")}
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="mb-2">Category</label>
                                        <div className="input-group">
                                            <select className="form-select"
                                                    name="category"
                                                    {...register("category", {required: "this field is required"})}
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
                                            {...register("book_for_class")}
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="mb-2">Book Translator</label>
                                        <input
                                            type="text"
                                            name="translator"
                                            className="form-control"
                                            placeholder="Book Translator"
                                            {...register("translator")}
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="mb-2">Book Publication</label>
                                        <input
                                            type="text"
                                            name="publication"
                                            className="form-control"
                                            placeholder="Book Publication"
                                            {...register("publication")}
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="mb-2">Book Origianl writter</label>
                                        <input
                                            type="text"
                                            name="original_writer"
                                            className="form-control"
                                            placeholder="Book writter"
                                            {...register("original_writer")}
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="mb-2">Book Language</label>
                                        <input
                                            type="text"
                                            name="language"
                                            className="form-control"
                                            placeholder="Book Language"
                                            {...register("language")}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className={`${styles.modalBtn}`}>Save</button>
                                        {/* <button type="submit" className={`${styles.defaultBtn} ms-3`} onClick={()=> router.push("/library")}>Cancel</button> */}
                                        <button type="button" className={`${styles.modalBtn} ms-3`}
                                                onClick={close}>Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    ) : null;
};


export default modalpage;