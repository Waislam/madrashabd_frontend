import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

import {OtherIncomeMoneyReceipt} from './OtherIncomeMoneyReceipt';

const OtherIncomeDetail = ({other_income}) => {
    const componentRef = useRef();

    return (
        <div>
            <div className="text-center">
                <ReactToPrint
                    trigger={() => <button className="brand-btn mb-2">Print this out!</button>}
                    content={() => componentRef.current}
                />
            </div>
            <OtherIncomeMoneyReceipt ref={componentRef} other_income={other_income} />
        </div>
    );
};

export default OtherIncomeDetail;


