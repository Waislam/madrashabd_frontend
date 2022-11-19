import styles from "../../Setting.module.css";
import axios from "axios";
import api, {BASE_URL} from "../../../../pages/api/api"
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Modal from "react-bootstrap/Modal";
import {useForm} from "react-hook-form";


const UpdateBuildingModal = (props) => {

    console.log("buildingOldData :", props.building_old_data);
    const router = useRouter();

    const old_data = {
        "building_name": props.building_old_data?.building_name,
        "total_floor": props.building_old_data?.total_floor,
        "total_room": props.building_old_data?.total_room
    };
    const {register, handleSubmit} = useForm({mode: 'all', defaultValues: old_data});

    const onSubmit = (values) => {
        fetch(`${BASE_URL}/settings/building/detail/${props.building_old_data.id}/`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": props.building_old_data?.madrasha?.id,
                    "building_name": values.building_name,
                    "total_floor": values.total_floor,
                    "total_room": values.total_room
                },
            )
        }).then((res) => res.json())
            .catch((err) => {
                console.log(err.message)
            });

        props.onHide();
        router.reload();

    };


    return (
        <>
            <div className="update-class">
                <Modal {...props}
                       size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                       dialogClassName={`${styles.customDialog}`}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Update Building
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <input
                                        type="text"
                                        placeholder="Building Name"
                                        className="form-control"
                                        name="building_name"
                                        {...register("building_name")}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <input
                                        type="number"
                                        placeholder="Total Floor"
                                        className="form-control"
                                        name="total_floor"
                                        {...register("total_floor")}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <input
                                        type="number"
                                        placeholder="Total Room"
                                        className="form-control"
                                        name="total_room"
                                        {...register("total_room")}
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
            </div>
        </>
    )
};

export default UpdateBuildingModal;