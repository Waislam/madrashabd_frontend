import React from 'react';

const AccountExpense = ({expense_income}) => {
    return (
        <div>
            <div className="container">
                <h4 className="text-center">Expense Details</h4>
                <hr/>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <table className="table table-bordered">
                            <thead>
                            <tr className="text-center">
                                <th scope="col">Date</th>
                                <th scope="col">Category</th>
                                <th scope="col">Sub Category</th>
                                <th scope="col">Description</th>
                                <th scope="col">For Month</th>
                                <th scope="col">For Months</th>
                                <th scope="col">Expense By</th>
                                <th scope="col">Approved By</th>
                                <th scope="col">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="text-center text-capitalize">
                                <th scope="row">{expense_income?.date}</th>
                                <td>{expense_income?.category?.name}</td>
                                <td>{expense_income?.sub_category?.name}</td>
                                <td>{expense_income?.description}</td>
                                <td>{expense_income?.for_month}</td>
                                <td>{expense_income?.for_months}</td>
                                <td>{expense_income?.expense_by}</td>
                                <td>{expense_income?.approved_by}</td>
                                <td>{expense_income?.amount}</td>
                            </tr>
                            </tbody>
                        </table>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AccountExpense;