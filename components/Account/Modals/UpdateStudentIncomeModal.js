import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "../Account.module.css";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {BASE_URL} from '../../../pages/api/api';
import axios from 'axios';


const StudentIncomeUpdate = (props) => {
    console.log('inside update frame', props.studentIncomePreValue.amount?.amount)
    const preLoadedValues = {
        category: props.studentIncomePreValue.category?.id,
        sub_category: props.studentIncomePreValue.sub_category?.id,
        student_class_id: props.studentIncomePreValue.student_class_id,
        amount: props.studentIncomePreValue.amount?.id,
        for_month: props.studentIncomePreValue.for_month,
        for_months: props.studentIncomePreValue.for_months,
    }
    console.log("preloaded vlaue consoled: ", preLoadedValues)

    const {
        handleSubmit, formState: {errors}, register,
    } = useForm({
        mode: "onChange",
        defaultValues: preLoadedValues
    });


    const onSubmit = (values) => {
        const current_id = props.studentIncomePreValue.id
        axios.put(`${BASE_URL}/transactions/student-income/${current_id}/`, values)
            .then((response) => {
                console.log('this is database updatd response: ', response.data)
            })

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
                            <div className="form-group">
                                <label className="mb-2">Category</label>
                                <select
                                    className="form-control form-select"
                                    defaultValue={props.studentIncomePreValue.category}
                                    name="category"
                                    {...register("category", {required: "this field is required"})}
                                    onChange={(event) => props.setTransactionCaterory(event.target.value)}
                                >
                                    // <option>{props.studentIncomePreValue.category?.name}</option>
                                    {props.incomeCategoryList && props.incomeCategoryList.map((category) => (
                                        <option value={category.id} key={category.name}>{category.name}</option>
                                    ))}
                                </select>
                                <p className="text-danger">{errors.category?.message}</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="form-group">
                                <label className="mb-2">Sub-Category</label>

                                <select
                                    className="form-control form-select"
                                    name="sub_category" {...register("sub_category", {required: "this field is required"})}
                                >
                                    <option>Select sub category</option>
                                    {props.transactionSubCaterory && props.transactionSubCaterory.map((subCategory) => (
                                        <option value={subCategory.id}
                                                key={subCategory?.name}>{subCategory?.name}</option>
                                    ))}
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
                                   {...register("student_class_id", {required: "this field is required"})}
                            />
                            <p className="text-danger">{errors.student_class_id?.message}</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="form-group">
                                <label className="mb-2">Amount</label>
                                <select className="form-control form-select"
                                        name="amount"
                                        {...register("amount", {required: "this field is required"})}
                                >
                                    <option>{props.studentIncomePreValue.amount?.amount}</option>
                                    {props.studentFees && props.studentFees.map((fees) => (
                                        <option value={fees.id} key={fees?.amount}>{fees.amount}</option>
                                    ))}
                                </select>
                                <p className="text-danger">{errors.amount?.message}</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="form-group">
                                <label className="mb-2">For Month</label>
                                <select className="form-control form-select"
                                        name="for_month"
                                        {...register("for_month")}
                                >
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
                        <div className="mt-3">
                            <button className={`${styles.defaultBtn}`}>Save</button>
                            {/* <button type="submit" className={`${styles.defaultBtn} ms-3`} onClick={()=> router.push("/library")}>Cancel</button> */}
                            <button type="button" className={`${styles.defaultBtn} ms-3`}
                                    onClick={props.onHide}>Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default StudentIncomeUpdate
