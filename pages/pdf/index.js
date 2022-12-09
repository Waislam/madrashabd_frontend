import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

const PDF = () => {
    const componentRef = useRef();

    return (
        <div>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="print-container" ref={componentRef}>
                            <div className="printBanner">
                                <div className="text-justify">
                                    <h5 className="text-capitalize text-center">PDF View</h5>
                                    <p className="text-center">Do something</p>
                                    <hr/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum et iure saepe
                                        tempore. Consequatur expedita illo, illum iusto, laboriosam necessitatibus nobis
                                        non nostrum placeat quibusdam, voluptate voluptatum. Adipisci corporis libero
                                        quia velit! Accusantium animi dolor, doloribus dolorum nesciunt nobis recusandae
                                        saepe sequi! Ab architecto deserunt doloremque eius eligendi eum iusto
                                        laboriosam nemo nisi obcaecati, quam saepe sequi, temporibus. Deleniti
                                        dignissimos dolorum itaque nam nesciunt numquam possimus, temporibus velit vitae
                                        voluptas? Assumenda culpa dignissimos eligendi eos et excepturi exercitationem,
                                        explicabo ipsum nemo obcaecati, officia, quidem rerum sed sunt voluptas? Cum
                                        dignissimos maiores perspiciatis quibusdam sapiente. Alias fugiat officia
                                        possimus sit veniam?`
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center my-2">
                            <ReactToPrint
                                trigger={() =>
                                    <button className="btn btn-primary primary">Print</button>}
                                content={() => componentRef.current}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PDF;