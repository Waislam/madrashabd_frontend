import { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import api, { BASE_URL } from "../../../pages/api/api";
import { useRouter } from 'next/router';

const AddTransportModal = (props) => {
    const router = useRouter();
    const [vehicleList, setVehicleList] = useState(null);

    const { register, handleSubmit } = useForm({ mode: 'all' });

    const getVehicleList = async () => {
        const list = await api.get(`/transport/${props.session_data.user?.madrasha_slug}/vehicle-info-list/`);
        const data = list.data;
        setVehicleList(data);
    };

    useEffect(() => {
        getVehicleList()
    }, []);


    const onSubmit = (values) => {
        let student_id = values.student_id;

        fetch(`${BASE_URL}/transport/${props.session_data.user?.madrasha_slug}/post-transport/${student_id}/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": 1,
                    "vehicle": values.vehicle
                },
            )
        }).then((res) => res.json())
        .then ((res)=>{
            console.log(res)
        })
            .catch((err) => {
                console.log(err.message)
            });
        props.onHide();
        router.reload();

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