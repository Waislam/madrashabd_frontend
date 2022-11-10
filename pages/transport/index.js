import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

// Transport Component
import Transport from "../../components/Transport/Transport"
import Layout from "../../components/Layout/Layout";
import AddTransportModal from "../../components/Transport/Modals/AddTransportModal"
import DeleteTransportModel from "../../components/Transport/Modals/DeleteTransportModel"
import api from "../api/api";


const TransportPage = () => {

    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [isLoading, setLoading] = useState(null);

    // Add
    const [transport, setTransport] = useState(null);
    const [addTransportModal, setTransportModal] = useState(false);

    // Delete Transport
    const [deleteTransportModal, setDeleteTransportModal] = useState(false);
    const [deleteTransportList, setDeleteTransportList] = useState(null);


    // Get Transport
    const getTransport = async () => {
        const list = await api.get(`/transport/${session.user?.madrasha_slug}/transport-list/`);
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

    // Delete Transport
    const handleDeleteTransportModel = (id) => {
        setDeleteTransportList(id);
        setDeleteTransportModal(true)
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
                handleDeleteTransportModel={handleDeleteTransportModel}
            />

            <AddTransportModal
                session={session}
                show={addTransportModal}
                onHide={() => setTransportModal(false)}
            />

            <DeleteTransportModel
                show={deleteTransportModal}
                onHide={() => setDeleteTransportModal(false)}
                delete_transport_list={deleteTransportList}
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