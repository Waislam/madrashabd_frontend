import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

import {StudentIncomeMoneyReceipt} from './StudentIncomeMoneyReceipt';

const StudentIncomeDetail = ({student_income, madrasha_name}) => {
    const componentRef = useRef();

    return (
        <div>
            <div className="text-center">
                <ReactToPrint
                    trigger={() => <button className="brand-btn mb-2">Print this out!</button>}
                    content={() => componentRef.current}
                />
            </div>
            <StudentIncomeMoneyReceipt
                ref={componentRef}
                student_income={student_income}
                madrasha_name={madrasha_name}
            />
        </div>
    );
};

export default StudentIncomeDetail;