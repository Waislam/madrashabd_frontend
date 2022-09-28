import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout";


const AddBazarPage = () => {

    const [madrasha, setMadrasha] = useState('');
    const [date, setDate] = useState('');
    const [bazar_item_name, setBazarItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');
    const [consumption, setConsumption] = useState('');
    const [isPending, setPending] = useState(false);

    const onClickFormHandler = () => {
        let data = {madrasha, date, bazar_item_name, quantity, amount, consumption};
        setPending(true);
        fetch("http://127.0.0.1:8000/boarding/bazarlist/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then(() => {
                setDate('');
                setMadrasha('');
                setBazarItemName('');
                setQuantity('');
                setConsumption('');
                setPending(false);
            })
        })
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
                                <form action="#" method="POST">
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="text"
                                                placeholder="Date"
                                                className="form-control"
                                                name="madrasha"
                                                value={madrasha}
                                                onChange={(e) => {
                                                    setMadrasha(e.target.value)
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="text"
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
                                    {!isPending &&
                                    <button type="button" className="btn btn-primary" onClick={onClickFormHandler}>Add
                                        Contact</button>}
                                    {isPending &&
                                    <button type="button" className="btn btn-primary" disabled>Adding .......</button>}
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