import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

import {StudentIncomeMoneyReceipt} from './StudentIncomeMoneyReceipt';

const StudentIncomeDetail = ({student_income}) => {
    const componentRef = useRef();

    return (
        <div>
            <div className="text-center">
                <ReactToPrint
                    trigger={() => <button className="btn btn-secondary mb-2">Print this out!</button>}
                    content={() => componentRef.current}
                />
            </div>
            <StudentIncomeMoneyReceipt ref={componentRef} student_income={student_income} />
        </div>
    );
};

export default StudentIncomeDetail;