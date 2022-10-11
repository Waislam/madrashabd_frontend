import styles from './BookList.module.css'
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useForm } from "react-hook-form";


const modalpage=({shown, close, onChange, post, submit})=>{

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
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
                         <form action="#" method="POST">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Number</label>
                                    <input type="text" name="number" defaultValue={post.number} key={post.number} className="form-control" placeholder="Book Number" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Name</label>
                                    <input type="text" name="name" defaultValue={post.name} key={post.name} className="form-control" placeholder="Book Name" onChange={onChange}/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book part</label>
                                    <input type="text" name="part" defaultValue={post.part} key={post.part} className="form-control" placeholder="Book part" onChange={onChange}/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Category</label>
                                    <div className="input-group">
                                        <select className="form-select">
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book for class</label>
                                    <input type="text" name="book_for_class" defaultValue={post.book_for_class} key={post.book_for_class} className="form-control" placeholder="class Name" onChange={onChange}/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Translator</label>
                                    <input type="text" name="translator" defaultValue={post.translator} key={post.translator} className="form-control" placeholder="Book Translator" onChange={onChange}/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Publication</label>
                                    <input type="text" name="publication" defaultValue={post.publication} key={post.publication} className="form-control" placeholder="Book Publication" onChange={onChange}/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Origianl writter</label>
                                    <input type="text" name="original_writer" defaultValue={post.original_writer} key={post.original_writer} className="form-control" placeholder="Book writter" onChange={onChange}/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Language</label>
                                    <input type="text" name="language" defaultValue={post.language} key={post.language} className="form-control" placeholder="Book Language" onChange={onChange}/>
                                </div>
                                <div className="mt-3">
                                    <button type="submit" className={`${styles.defaultBtn}`} onClick={submit}>Save</button>
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