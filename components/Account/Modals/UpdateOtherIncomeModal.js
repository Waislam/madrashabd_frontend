import styles from '../Account/Account.module.css'
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { BASE_URL } from '../../../pages/api/api';
import Modal from 'react-bootstrap/Modal';


const modalpage = (props) => {

    let preLoadedValues = {
        category: props.singleobjectdata.category?.id,
        sub_category: props.singleobjectdata.sub_category?.id,
        donar_name: props.singleobjectdata.donar_name,
        amount: props.singleobjectdata.amount,
        for_month: props.singleobjectdata.for_month,
        for_months: props.singleobjectdata.for_months,
        receipt_book_number: props.singleobjectdata.receipt_book_number,
        receipt_page_number: props.singleobjectdata.receipt_page_number,
    }

    const { handleSubmit, formState: { errors }, register, } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    });

    const onSubmit = (values) => {
        const current_id = props.singleobjectdata.id
        axios.put(`${BASE_URL}/transactions/other-income/${current_id}/`, values)
            .then((response)=>{
                console.log('this is database updatd response: ', response.data)
            })

        props.onHide()
    };


    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update This Income Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="form-group">
                                    <label className="mb-2">Category</label>
                                    <select className="form-control form-select"
                                        name="category"
                                        {...register("category", { required: "this field is required" })}
                                        onChange={(e) => props.setTransactionCategory(e.target.value)}
                                    >
                                        <option value={props.singleobjectdata.category?.id}>{props.singleobjectdata.category?.name}</option>
                                        {props.incomecategorylist && props.incomecategorylist?.map((category) => (
                                            category?.name !== "Student" && (
                                            <option value={category?.id} key={category?.name}>{category?.name}</option>
                                            )
                                        ))}
                                    </select>
                                    <p className="text-danger">{errors.category?.message}</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="form-group">
                                    <label className="mb-2">Sub-Category</label>
                                    <select className="form-control form-select"
                                        name="sub_category"
                                        {...register("sub_category", { required: "this field is required" })}
                                    >
                                        <option value={props.singleobjectdata.sub_category?.id}>{props.singleobjectdata.sub_category?.name}</option>
                                        {props.transactionSubCategory && props.transactionSubCategory.map((subCategory) => (
                                            <option value={subCategory?.id} key={subCategory?.name}>{subCategory?.name}</option>
                                        ))}
                                    </select>
                                    <p className="text-danger">{errors.sub_category?.message}</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Donar Name</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Donar Name"
                                    name="donar_name"
                                    {...register("donar_name", { required: "this field is required" })}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="form-group">
                                    <label className="mb-2">Amount</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="5000"
                                        name="amount"
                                        {...register("amount", { required: "this field is required" })}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="form-group">
                                    <label className="mb-2">For Month</label>
                                    <select className="form-control form-select"
                                        name="for_month"
                                        {...register("for_month")}
                                    >
                                        <option></option>
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
                                    className="form-control"
                                    placeholder="january - march"
                                    name="for_months"
                                    {...register("for_months")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Receipt book number</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="465564165r"
                                    name="receipt_book_number"
                                    {...register("receipt_book_number")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Receipt page number</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="21"
                                    name="receipt_page_number"
                                    {...register("receipt_page_number")}
                                />
                            </div>
                        </div>
                        <div className="mt-3">
                            <button className={`${styles.defaultBtn}`}>Save and print</button>
                            <button className={`${styles.defaultBtn} ms-3`}>Save</button>
                            <button className={`${styles.defaultBtn} ms-3 float-md-end`} onClick={props.onHide}>Cancel</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>

    );
}


export default modalpage;