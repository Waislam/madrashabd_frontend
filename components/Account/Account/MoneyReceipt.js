import React from 'react';

export const MoneyReceipt = React.forwardRef((props, ref) => {

    return (
        <div ref={ref}>
            <div className="container">
                <div className="moneyReceipt mt-5" style={{borderRadius: 5, border: "10px solid #DDDDDD", padding: 10}}>
                    <h4 className="text-center">Institute Name</h4>
                    <h5 className="text-center mb-4">Address</h5>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mx-5">
                                <p>Student ID :</p>
                                <p>Student Name :</p>
                                <p>Class :</p>
                                <p>Purpose :</p>
                                <p>Month :</p>
                                <p>Amount :</p>
                                <p>Status :</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mx-5">
                                <div className="row">
                                    <div className="col">
                                        <div style={{float: "right"}}>
                                            <p>Money receipt number, it will generate auto</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div style={{float: "right", marginTop: 160}}>
                                            <h6 className="float-right">Received by : Received Name</h6>
                                            <p>Date : 20-11-2022</p>
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

