import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import { useRouter } from "next/router";
import api, { BASE_URL } from "../../../pages/api/api";
import styles from '../Boarding.module.css'
import { PropaneSharp } from '@mui/icons-material';


const AddBazarListModal = (props) => {
    // console.log("bazar_old_data: ", props.bazar_old_data)

    const oldData = {
        "bazar_item_name": props?.bazar_old_data?.bazar_item_name,
        "quantity": props?.bazar_old_data?.quantity,
        "measurement": props?.bazar_old_data?.measurement,
        "amount": props?.bazar_old_data?.amount,
        "consumption": props?.bazar_old_data?.consumption,
        "total_stock": props?.bazar_old_data?.total_stock,
        "date": props?.bazar_old_data?.date,
        // "madrasha": props?.madrasha_id
    }

    const router = useRouter();
    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'all',
        defaultValues: oldData,
    });

    const onSubmit = async (values) => {
        const data = {
            "bazar_item_name": values?.bazar_item_name,
            "quantity": values?.quantity,
            "measurement": values?.measurement,
            "amount": values?.amount,
            "consumption": values?.consumption,
            "total_stock": values?.total_stock,
            "date": values?.date,
            "madrasha": props?.madrasha_id
        }
        await api.put(`/boarding/bazarlist/detail/${props.bazarid}/`, data)
            // .then((response) => (
            //     console.log(response.data)
            // )).catch((errors) => {
            //     console.log("errors: ", errors)
            // })
        props.onHide()
        router.reload()
    };

    return (
        <>
            <Modal {...props} size="lg">

                <Modal.Header closeButton>
                    <Modal.Title>
                        Update Bazar List
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="my-4 col-md-4">
                                <label className="mb-2">Date</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="input Date"
                                    onFocus={(e) => e.target.type = "date"}
                                    name="date"
                                    {...register("date", { required: "Date is required" })}
                                    readOnly
                                />
                                <p className="text-danger">{errors?.dat?.message}</p>
                            </div>
                            <div className="my-4 col-md-4">
                                <label className="mb-2">Item Name</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Item name"
                                    name="bazar_item_name"
                                    {...register("bazar_item_name", { required: "Item Name is required" })}
                                />
                                <p className="text-danger">{errors?.bazar_item_name?.message}</p>
                            </div>
                            <div className="my-4 col-md-4">
                                <label className="mb-2">Qunatity</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Quantity"
                                    name="quantity"
                                    {...register("quantity", { required: "Item Quantity is required" })}
                                />
                                <p className="text-danger">{errors?.quantity?.message}</p>
                            </div>
                            <div className="my-4 col-md-4">
                                <label className="mb-2">Taka</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Amount"
                                    name="amount"
                                    {...register("amount", { required: "Amount is required" })}
                                />
                                <p className="text-danger">{errors?.amount?.message}</p>
                            </div>
                            <div className="my-4 col-md-4">
                                <label className="mb-2">Measurement</label>
                                <select
                                    className="form-select"
                                    name="measurement"
                                    {...register("measurement", { required: "Amount is required" })}
                                >
                                    <option>Select One</option>
                                    <option value="litre">Kg</option>
                                    <option value="gm">Litre</option>
                                    <option value="kg">Gm</option>
                                </select>
                                <p className="text-danger">{errors?.measurement?.message}</p>
                            </div>
                            <div className="my-4 col-md-4">
                                <label className="mb-2">Consumption</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="20 kg"
                                    name="consumption"
                                    {...register("consumption", { required: "Consumption Amount is required" })}
                                />
                                <p className="text-danger">{errors?.consumption?.message}</p>
                            </div>
                            <div className="my-4">
                                <label className="mb-2">Current Stock</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="30 kg"
                                    name="total_stock"
                                    {...register("total_stock")}
                                />
                                <p className="text-danger">{errors?.total_stock?.message}</p>
                            </div>


                            <div className="col-md-4">
                                <button className={styles.defaultBtn}>Save</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>

    );
};


export default AddBazarListModal;