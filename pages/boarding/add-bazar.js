import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import api, {BASE_URL} from "../../pages/api/api";


const AddBazarPage = () => {

    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [madrasha, setMadrasha] = useState('');
    const [bazar_item_name, setBazarItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [measurement, setMeasurement] = useState('');
    const [amount, setAmount] = useState('');
    const [consumption, setConsumption] = useState('');
    const [date, setDate] = useState('');

    const handleBazarListForm = (event) => {
        event.preventDefault();

        fetch(`${BASE_URL}/boarding/bazarlist/${session.user?.madrasha_slug}/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "madrasha": 1,
                    "item": {
                        "madrasha": 1,
                        "bazar_item_name": bazar_item_name,
                        "quantity": quantity,
                        "measurement": measurement,
                        "amount": amount,
                        "consumption": consumption,
                    },
                    "date": date
                },
            )
        }).then((res) => res.json())
            .catch((err) => {
                console.log(err.message)
            });


    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h3>Add New Bazar</h3>
                                <hr/>
                                <form method="POST">
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="number"
                                                placeholder="Madrasha"
                                                className="form-control"
                                                name="madrasha"
                                                onChange={(e) => {
                                                    setMadrasha(e.target.value)
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="date"
                                                placeholder="Date"
                                                className="form-control"
                                                name="date"
                                                value={date}
                                                onChange={(e) => {
                                                    setDate(e.target.value)
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="text"
                                                placeholder="Bazar item Name"
                                                className="form-control"

                                                name="bazar_item_name"
                                                value={bazar_item_name}
                                                onChange={(e) => {
                                                    setBazarItemName(e.target.value)
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="text"
                                                placeholder="Quantity "
                                                className="form-control"
                                                name="quantity"
                                                value={quantity}
                                                onChange={(e) => {
                                                    setQuantity(e.target.value)
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="text"
                                                placeholder="Amount"
                                                className="form-control"

                                                name="amount"
                                                value={amount}
                                                onChange={(e) => {
                                                    setAmount(e.target.value)
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <select className="form-select" name="measurement" onChange={(e) => {
                                                setMeasurement(e.target.value)
                                            }}>
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
                                                value={consumption}
                                                onChange={(e) => {
                                                    setConsumption(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>


                                    <button
                                        className="btn btn-primary"
                                        onClick={handleBazarListForm}>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddBazarPage;


AddBazarPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};