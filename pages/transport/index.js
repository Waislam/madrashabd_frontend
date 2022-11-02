import React, {useEffect, useState} from "react";

// Transport Component
import Transport from "../../components/Transport/Transport"
import Layout from "../../components/Layout/Layout";
import AddTransportModal from "../../components/Transport/Modals/AddTransportModal"
import api from "../api/api";


const TransportPage = () => {

    const [isLoading, setLoading] = useState(null);

    // Add
    const [transport, setTransport] = useState(null);
    const [addTransportModal, setTransportModal] = useState(false);


    // Get Transport
    const getTransport = async () => {
        const list = await api.get("http://127.0.0.1:8086/transport/100/transport-list/");
        const data = list.data;
        setTransport(data);
        setLoading(false);
    };

    useEffect(() => {
        getTransport()
    }, []);


    // Add TransportModal
    const handleAddTransportModal = () => {
        setTransportModal(true)
    };


    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (!transport) {
        return (
            <h2 className="text-center">No data found</h2>
        )
    }

    return (
        <>
            <Transport
                transport={transport}
                handleAddTransportModal={handleAddTransportModal}
            />

            <AddTransportModal
                show={addTransportModal}
                onHide={() => setTransportModal(false)}
            />

        </>
    )
};

export default TransportPage;

TransportPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};