import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import styles from "Pdf.module.css"

import { ComponentToPrint } from './ComponentToPrint';

const PDF = () => {
    const componentRef = useRef();

    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
            <ComponentToPrint ref={componentRef} />
        </div>
    );
};

export default PDF;