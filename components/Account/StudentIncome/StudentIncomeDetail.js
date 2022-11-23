import React, {useRef, useSate} from 'react';
import ReactToPrint from 'react-to-print';
import {MoneyReceipt} from './MoneyReceipt';


const StudentIncomeDetail = ({student_income}) => {
    const componentRef = useRef();

    return (
        <div>
            <div className="container">
                <h4 className="text-center">Student Income Details</h4>
                <hr/>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <table className="table table-bordered">
                            <thead>
                            <tr className="text-center">
                                <th scope="col">Date</th>
                                <th scope="col">Student ID</th>
                                <th scope="col">Category</th>
                                <th scope="col">Sub Category</th>
                                <th scope="col">Fees</th>
                                <th scope="col">Amount</th>
                                <th scope="col">For Month</th>
                                <th scope="col">For Months</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="text-center text-capitalize">
                                <th scope="row">{student_income?.paid_date}</th>
                                <td>{student_income?.student_id}</td>
                                <td>{student_income?.category?.name}</td>
                                <td>{student_income?.sub_category?.name}</td>
                                <td>{student_income?.amount?.name}</td>
                                <td>{student_income?.amount?.amount}</td>
                                <td>{student_income?.for_month}</td>
                                <td>{student_income?.for_months}</td>
                            </tr>
                            </tbody>
                        </table>
                        <hr/>

                        <div className="text-center">
                            <ReactToPrint
                                trigger={() => <button className="btn btn-primary">Print this out!</button>}
                                content={() => componentRef.current}
                            />
                            <MoneyReceipt ref={componentRef}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StudentIncomeDetail;