import styles from '../Account.module.css'
import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from 'axios';
import {BASE_URL} from '../../../pages/api/api';
import Modal from 'react-bootstrap/Modal';


const modalpage = (props) => {
    const router = useRouter();

    const {handleSubmit, formState: {errors}, register,} = useForm({
        mode: "all",
        // defaultValues: newData
    });

    const onSubmit = async (values) => {

        let expenseData = {
            "madrasha": 1,
            "category": values.category,
            "sub_category": values.sub_category,
            "expense_by": values.expense_by,
            "for_month": values.for_month,
            "for_months": values.for_months,
            "description": values.description,
            "approved_by": values.approved_by,
            "amount": values.amount,
            "date": values.date

        };

        await axios.post(`${BASE_URL}/transactions/${props.session.user?.madrasha_slug}/expense/`, expenseData)
            .then((response) => {
                console.log('Success Response: ', response.data)
            })
            .catch((error) => {
                console.log('Error Message: ', error.response.data.number)
            });

        props.onHide();
        router.reload();

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
                    <Modal.Title>Add Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="form-group">
                                    <label className="mb-2">Category</label>
                                    <select className="form-control form-select"
                                            name="category"
                                            {...register("category", {required: "this field is required"})}
                                            onChange={(e) => props.setExpenseCategoryValue(e.target.value)}
                                        // onChange={(e) => props.setTransactionCategory(e.target.value)}
                                    >
                                        {props.expensecategorylist && props.expensecategorylist.map((category) => (
                                            <option value={category?.id} key={category?.name}>{category?.name}</option>
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
                                            {...register("sub_category", {required: "this field is requied"})}
                                    >
                                        {props.expenseSubCategoryList && props.expenseSubCategoryList.map((subcategory) => (
                                            <option value={subcategory?.id}
                                                    key={subcategory?.name}>{subcategory?.name}</option>
                                        ))}
                                    </select>
                                    <p className="text-danger">{errors.sub_category?.message}</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Expense By</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Expense By"
                                       name="expense_by"
                                       {...register("expense_by", {required: "this field is required"})}
                                />
                                <p className="text-danger">{errors.expense_by?.message}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Amount</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="5000"
                                       name="amount"
                                       {...register("amount", {required: "this field is required"})}
                                />
                                <p className="text-danger">{errors.amount?.message}</p>

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
                                    <p className="text-danger">{errors.for_month?.message}</p>
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
                                <p className="text-danger">{errors.for_months?.message}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Description</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Building construction"
                                       name="description"
                                       {...register("description", {required: "this field is required"})}
                                />
                                <p className="text-danger">{errors.description?.message}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mb-2">Approved By</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="approved_by"
                                       name="approved_by"
                                       {...register("approved_by", {required: "this field is required"})}
                                />
                                <p className="text-danger">{errors.approved_by?.message}</p>
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
                                    {...register("date", {required: "this field is required"})}
                                />
                            </div>
                        </div>
                        <div>
                            <button className={`${styles.defaultBtn}`}>Save and print</button>
                            <button className={`${styles.defaultBtn} ms-3 float-md-end`} onClick={props.onHide}>Cancel
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>

    );
}


export default modalpage;