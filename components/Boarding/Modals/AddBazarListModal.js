import {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import {useRouter} from "next/router";
import api, {BASE_URL} from "../../../pages/api/api";


const AddBazarListModal = (props) => {
    const router = useRouter();
    const {register, handleSubmit} = useForm({mode: 'all'});

    const onSubmit = (values) => {
        // fetch("http://127.0.0.1:8086/boarding/bazarlist/100/", {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(
        //         {
        //             "madrasha": 1,
        //             "item": {
        //                 "madrasha": 1,
        //                 "bazar_item_name": values.bazar_item_name,
        //                 "quantity": values.quantity,
        //                 "measurement": values.measurement,
        //                 "amount": values.amount,
        //                 "consumption": values.consumption,
        //             },
        //             "date": values.date
        //         },
        //     )
        // }).then((res) => res.json())
        //     .catch((err) => {
        //         console.log(err.message)
        //     });


        props.onHide();
        router.reload();


    };

    return (
        <>
            <Modal {...props} size="lg">

                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Bazar List
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <input
                                    type="date"
                                    placeholder="Date"
                                    className="form-control"
                                    name="date"
                                    {...register("date")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Bazar item Name"
                                    className="form-control"

                                    name="bazar_item_name"
                                    {...register("bazar_item_name")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Quantity "
                                    className="form-control"
                                    name="quantity"
                                    {...register("quantity")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Amount"
                                    className="form-control"

                                    name="amount"
                                    {...register("amount")}

                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <select className="form-select" name="measurement"
                                        {...register("measurement")}>
                                    <option value="kg">Kg</option>
                                    <option value="litre">Litre</option>
                                    <option value="gm">Gm</option>
                                </select>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Consumption"
                                    className="form-control"

                                    name="consumption"
                                    {...register("consumption")}
                                />
                            </div>
                        </div>
                        <button
                            className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default AddBazarListModal;