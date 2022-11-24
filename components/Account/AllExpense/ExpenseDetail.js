import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

import {ExpenseMoneyReceipt} from './ExpenseMoneyReceipt';

const ExpenseDetail = ({expense_income}) => {
    console.log("expense_income : 2", expense_income);
    const componentRef = useRef();

    return (
        <div>
            <div className="text-center">
                <ReactToPrint
                    trigger={() => <button className="btn btn-secondary mb-2">Print this out!</button>}
                    content={() => componentRef.current}
                />
            </div>
            <ExpenseMoneyReceipt ref={componentRef} expense_income={expense_income} />
        </div>
    );
};

export default ExpenseDetail;