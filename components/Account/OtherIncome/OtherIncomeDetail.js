import React from 'react';

const OtherIncomeDetail = ({other_income}) => {
    return (
        <div>
            <div className="container">
                <h4 className="text-center">Others Income</h4>
                <hr/>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <table className="table table-bordered">
                            <thead>
                            <tr className="text-center">
                                <th scope="col">Date</th>
                                <th scope="col">Category</th>
                                <th scope="col">Sub Category</th>
                                <th scope="col">For Month</th>
                                <th scope="col">For Months</th>
                                <th scope="col">Receipt B.Number</th>
                                <th scope="col">Donar Name</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="text-center text-capitalize">
                                <th scope="row">{other_income?.paid_date}</th>
                                <td>{other_income?.category.name}</td>
                                <td>{other_income?.sub_category.name}</td>
                                <td>{other_income?.for_month}</td>
                                <td>{other_income?.for_months}</td>
                                <td>{other_income?.receipt_book_number}</td>
                                <td>{other_income?.donar_name}</td>
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

export default OtherIncomeDetail;