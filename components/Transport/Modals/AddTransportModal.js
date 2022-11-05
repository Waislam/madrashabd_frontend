import {useRef, useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import api from "../../../pages/api/api";

const AddTransportModal = (props) => {
    const [vehicleList, setVehicleList] = useState(null);

    const {register, handleSubmit} = useForm({mode: 'all'});

    const getVehicleList = async () => {
        const list = await api.get("http://127.0.0.1:8086/transport/100/vehicle-info-list/");
        const data = list.data;
        setVehicleList(data);
    };

    useEffect(() => {
        getVehicleList()
    }, []);

    console.log(" vehicleList :", vehicleList);


    const onSubmit = (values) => {
        fetch("http://127.0.0.1:8086/transport/100/post-transport/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": 1,
                    "student_id": values.student_id,
                    "vehicle": values.vehicle,
                    "start_time": values.start_time,
                },
            )
        }).then((res) => res.json())
            .catch((err) => {
                console.log(err.message)
            });
        props.onHide()

    };

    return (
        <>
            <Modal {...props} size="lg">

                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Transport
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    placeholder="Student ID"
                                    className="form-control"
                                    name="student_id"
                                    {...register("student_id")}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <select className="form-select"
                                        name="vehicle"
                                        {...register("vehicle")}
                                >

                                    <option>Select Car</option>

                                    {
                                        vehicleList?.results && vehicleList.results.map((data) => (
                                            <option value={data?.id}>{data?.car_number}</option>
                                        ))
                                    }
                                </select>
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


export default AddTransportModal;