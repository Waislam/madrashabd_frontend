import styles from './BookList.module.css'
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { BASE_URL } from '../../pages/api/api';


const modalpage=({shown, close})=>{
    // const [newBook, setNewBook] = useState(null)

    const {handleSubmit, formState: { errors }, register,} = useForm({
        mode: "all",
        // defaultValues: newData
    });

    const onSubmit = async (values) =>{
        console.log("form data : ", values)
        

        let newBookData = {
            "madrasha": 1,
            "number": values.number,
            "name": values.name,
            "part": values.part,
            "category": "nesabi",
            "book_for_class": values.book_for_class,
            "translator": values.translator,
            "publication": values.publication,
            "original_writer": values.original_writer,
            "language": values.language
        }
        

        // setNewBook(newBookData)

        // const data = newBook;
        // console.log('book full data: ', data)
        console.log('data to be shown', newBookData)
        await axios.post(`${BASE_URL}/library/100/`, newBookData)
        .then((response)=>{
            console.log('Success Response: ', response.data)
        })
        .catch((error)=>{
            console.log('Error Message: ', error)
        })
        
        close()  

    }
    
    
    
    const router = useRouter()

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
                                        {...register("number", {required:"this field is required"})}
                                    />
                                    <p className="text-danger">{errors.number?.message}</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Name</label>
                                    <input type="text" 
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
                                        {...register("part")}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Category</label>
                                    <div className="input-group">
                                        <select className="form-select" name="category" {...register("book_category", {required:"this field is required"})}>
                                            <option value="nesabi">Nesabi</option>
                                            <option value="2">Hadis/Usolehadis</option>
                                            <option value="3">Fekah/Usolefekhan</option>
                                            <option value="3">Tafsir</option>
                                            <option value="3">Mantek</option>
                                            <option value="3">Quran</option>
                                            <option value="3">Akida</option>
                                            <option value="3">Etihash</option>
                                            <option value="3">Orthoniti</option>
                                            <option value="3">Vugol</option>
                                            <option value="3">Arbi shahitto</option>
                                            <option value="3">Nahu</option>
                                            <option value="3">Sorof</option>
                                            <option value="3">Sirat</option>
                                            <option value="3">Eslah</option>
                                            <option value="3">Ovidhan</option>
                                            <option value="3">Golpo shahitto</option>
                                            <option value="3">Fatwa</option>
                                            <option value="3">Balagad</option>
                                            <option value="3">Rasayel</option>
                                            <option value="3">Other</option>
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
                                <div className="mt-3">
                                    <button type="submit" className={`${styles.defaultBtn}`}>Save</button>
                                    {/* <button type="submit" className={`${styles.defaultBtn} ms-3`} onClick={()=> router.push("/library")}>Cancel</button> */}
                                    <button type="button" className={`${styles.defaultBtn} ms-3`} onClick={close}>Cancel</button>
                                </div>
                            </div>
                         </form>
                    </div>
                </div>
                </div>
            </div>
        </>
        
    ) : null;
}
 

export default modalpage;