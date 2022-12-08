// Using a class component, everything works without issue
import React from 'react';
import {useSession} from "next-auth/react"

export const StudentIncomeMoneyReceipt = React.forwardRef((props, ref) => {
    const {data: session} = useSession();

    return (
        <div ref={ref}>
            <div className="container mb-5">
                <div className="moneyReceipt" style={{borderRadius: 5, border: "10px solid #DDDDDD", padding: 10}}>
                    <h4 className="text-center text-capitalize mt-2">{session.user?.madrasha_name}</h4>
                    <h5 className="text-center mb-4 text-center">Address</h5>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mx-2">
                                <p>
                                    Student ID :
                                    <span className="mx-3">
                                        {props.student_income?.student_id}
                                    </span>
                                </p>
                                <p>
                                    Category :
                                    <span className="mx-3">
                                        {props.student_income?.category?.name}
                                    </span>
                                </p>
                                <p>
                                    Sub Category :
                                    <span className="mx-3">
                                        {props.student_income?.sub_category?.name}
                                    </span>
                                </p>
                                <p>
                                    Fees :
                                    <span className="mx-3">
                                        {props.student_income?.amount?.name}
                                    </span>
                                </p>
                                <p>
                                    Amount :
                                    <span className="mx-3">
                                        {props.student_income?.amount?.amount}
                                    </span>
                                </p>
                                <p>
                                    For Month :
                                    <span className="mx-3 text-capitalize">
                                        {props.student_income?.for_month}
                                    </span>
                                </p>
                                <p>
                                    For Months :
                                    <span className="mx-3 text-capitalize">
                                        {props.student_income?.for_months}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mx-5">
                                <div className="row">
                                    <div className="col">
                                        <div style={{float: "right"}}>
                                            <h5>{props.student_income?.receipt_number}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div style={{float: "right", marginTop: 160}}>
                                            <h6 className="float-right">Received by : Received Name</h6>
                                            <p>Date : {props.student_income?.paid_date}</p>
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

