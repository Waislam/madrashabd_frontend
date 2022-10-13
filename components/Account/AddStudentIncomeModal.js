import styles from './Account.module.css'
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { BASE_URL } from '../../pages/api/api';


const modalpage=({shown, close})=>{

    const {handleSubmit, formState: { errors }, register,} = useForm({
        mode: "all",
        // defaultValues: newData
    });

    const onSubmit = async (values) =>{
        console.log("form data : ", values)
        

        let newBookData = {
            "madrasha": 1,
            "category": values.category,
            "sub_category": values.sub_category,
            "student_class_id": values.student_class_id,
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
                        <h1 className="text-center">Add New Student Income</h1>
                    </div>
                    <div className="card-body">
                         <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className="form-group">
                                        <label className="mb-2">Category</label>
                                        <select className="form-control form-select" name="category" {...register("category", {required:"this field is required"})} >
                                            <option>Category one</option>
                                            <option>Category two</option>
                                            <option>Category three</option>
                                        </select>
                                        <p className="text-danger">{errors.category?.message}</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="form-group">
                                        <label className="mb-2">Sub-Category</label>
                                        <select className="form-control form-select" name="sub_category" {...register("sub_category", {required:"this field is required"})} >
                                            <option>Sub_Category one</option>
                                            <option>Sub_Category two</option>
                                            <option>Sub_Category three</option>
                                        </select>
                                        <p className="text-danger">{errors.sub_category?.message}</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Student Id</label>
                                    <input type="text" 
                                        name="student_class_id" 
                                        className="form-control"
                                        placeholder="student id"
                                        {...register("student_class_id", {required:"this field is required"})}
                                    />
                                     <p className="text-danger">{errors.student_class_id?.message}</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="form-group">
                                        <label className="mb-2">Amount</label>
                                        <select className="form-control form-select" 
                                            name="amount"
                                            defaultValue={`DEFAULT`} 
                                            {...register("amount", {required:"this field is required"})} 
                                        >
                                            <option value="DFAULT">500</option>
                                            <option>700</option>
                                            <option>400</option>
                                        </select>
                                        <p className="text-danger">{errors.amount?.message}</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="form-group">
                                        <label className="mb-2">For Month</label>
                                        <select className="form-control form-select" 
                                            name="for_month"
                                            defaultValue={`DEFAULT`} 
                                            {...register("for_month")} 
                                        >   
                                            <option value="DFAULT"></option>
                                            <option value="january">January</option>
                                            <option value="february">February</option>
                                            <option value="march">March</option>
                                            <option value="april">April</option>
                                            <option value="may">May</option>
                                            <option value="june">June</option>
                                            <option value="july">July</option>
                                            <option value="august">August</option>
                                            <option value="september">September</option>
                                            <option value="october">October</option>
                                            <option value="november">November</option>
                                            <option value="december">December</option> 
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">For Months</label>
                                    <input type="text" 
                                        name="for_months" 
                                        className="form-control"
                                        placeholder="january-march"
                                        {...register("for_months")}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Date</label>
                                        <input
                                            type="text"
                                            name="date"
                                            placeholder="date"
                                            onFocus={(e) => (e.target.type = "date")}
                                            onBlur={(e) => (e.target.type = "text")}
                                            className="form-control"
                                            {...register("date", {required:"this field is required"})}
                                        />
                                        <p className="text-danger">{errors.date?.message}</p>
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