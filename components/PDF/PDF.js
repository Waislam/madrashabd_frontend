// import React, {useRef} from 'react';
// import {useReactToPrint} from 'react-to-print';
//
// import ComponentToPrint from './ComponentToPrint';
//
// const PDF = () => {
//     const componentRef = useRef();
//     const handlePrint = useReactToPrint({
//         content: () => componentRef.current,
//     });
//
//     return (
//         <div>
//             <ComponentToPrint ref={componentRef}/>
//             <button onClick={handlePrint}>Print this out!</button>
//         </div>
//     );
// };
//
// export default PDF;


// import React, { useRef } from 'react';
// import ReactToPrint from 'react-to-print';
//
// import  ComponentToPrint  from './ComponentToPrint';
//
// const PDF = () => {
//   const componentRef = useRef();
//
//   return (
//     <div>
//       <ReactToPrint
//         trigger={() => <button>Print this out!</button>}
//         content={() => componentRef.current}
//       />
//       <ComponentToPrint ref={componentRef} />
//     </div>
//   );
// };
//
// export default PDF;


import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

import {ComponentToPrint} from './ComponentToPrint';

const PDF = () => {
    const componentRef = useRef();

    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
            <ComponentToPrint ref={componentRef}/>
        </div>
    );
};

export default PDF;