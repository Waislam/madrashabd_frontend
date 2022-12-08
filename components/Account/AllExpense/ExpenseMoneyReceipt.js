import React from 'react';

export const ExpenseMoneyReceipt = React.forwardRef((props, ref) => {

    return (
        <div ref={ref}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="moneyReceipt"
                             style={{borderRadius: 5, border: "10px solid #DDDDDD", padding: 10}}>
                            <h4 className="text-center">Institute Name</h4>
                            <h5 className="text-center mb-4">Address</h5>
                            <hr/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mx-2 text-capitalize">
                                        <p>Category : {props.expense_income?.category?.name}</p>
                                        <p>Sub Category : {props.expense_income?.sub_category?.name}</p>
                                        <p>Month  : {props.expense_income?.for_month}</p>
                                        <p>For months : {props.expense_income?.for_months}</p>
                                        <p>Amount : {props.expense_income?.amount}</p>
                                        <p>Description : {props.expense_income?.description}</p>
                                        <p>Expense By : {props.expense_income?.expense_by}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mx-5">
                                        <div className="row">
                                            <div className="col">
                                                <div style={{float: "right"}}>
                                                    <p>Receipt Number : {props.expense_income?.receipt_number}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div style={{float: "right", marginTop: 160}}>
                                                    <h6 className="float-right">Approved by : {props.expense_income?.approved_by}</h6>
                                                    <p>Date : {props.expense_income?.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

