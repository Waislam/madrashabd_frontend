import React from 'react';
import {useSession} from "next-auth/react"

export const OtherIncomeMoneyReceipt = React.forwardRef((props, ref) => {
    const {data: session} = useSession();

    return (
        <div ref={ref}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="moneyReceipt"
                             style={{borderRadius: 5, border: "10px solid #DDDDDD", padding: 10}}>
                             <h4 className="text-center text-capitalize mt-2">{session.user?.madrasha_name}</h4>
                            <h5 className="text-center mb-4">Address</h5>
                            <hr/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mx-2 text-capitalize">
                                        <p>Category : {props.other_income?.category.name}</p>
                                        <p>Sub Category : {props.other_income?.sub_category.name}</p>
                                        <p>Month : {props.other_income?.for_month}</p>
                                        <p>Amount : {props.other_income?.for_months}</p>
                                        <p>Receipt Book Number : {props.other_income?.receipt_book_number}</p>
                                        <p>Donar Name : {props.other_income?.donar_name}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mx-5">
                                        <div className="row">
                                            <div className="col">
                                                <div style={{float: "right"}}>
                                                    <p>{props.other_income?.receipt_number}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div style={{float: "right", marginTop: 160}}>
                                                    <h6 className="float-right">Approved by : Received Name</h6>
                                                    <p>Date : {props.other_income?.paid_date}</p>
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

