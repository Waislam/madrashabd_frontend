import React from 'react';

const PaymentDetail = () => {
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
                                <th scope="row">1</th>
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

export default PaymentDetail;