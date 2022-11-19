import React, {useEffect, useState} from "react";
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";

// Transport Component
import Transport from "../../components/Transport/Transport"
import Layout from "../../components/Layout/Layout";
import AddTransportModal from "../../components/Transport/Modals/AddTransportModal"
import UpdateTransportModal from "../../components/Transport/Modals/UpdateTransportModal"
import DeleteTransportModel from "../../components/Transport/Modals/DeleteTransportModel"

// api
import api from "../api/api";


const TransportPage = (props) => {

    const router = useRouter();
    const {data: session, status} = getSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    const [isLoading, setLoading] = useState(null);

    // Add
    const [addTransportModal, setTransportModal] = useState(false);


    // Update
    const [updateTransportModal, setUpdateTransportModal] = useState(false);
    const [updateTransport, setUpdateTransport] = useState(null);

    // Delete Transport
    const [deleteTransportModal, setDeleteTransportModal] = useState(false);
    const [deleteTransportList, setDeleteTransportList] = useState(null);


    // Add TransportModal
    const handleAddTransportModal = () => {
        setTransportModal(true)
    };

    // update Transport
    const handleTransportUpdate = async (id) => {
        setLoading(true);
        const list = await api.get(`/transport/details/${id}/`);
        const data = list.data;
        setUpdateTransport(data);
        setLoading(false);
        setUpdateTransportModal(true)
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


    if (props.transport_list) {
        return (
            <>
                <Transport
                    transport={props.transport_list.results}
                    handleAddTransportModal={handleAddTransportModal}
                    handleTransportUpdate={handleTransportUpdate}
                    handleDeleteTransportModel={handleDeleteTransportModel}
                />

                <AddTransportModal
                    session_data={props.session_data}
                    show={addTransportModal}
                    onHide={() => setTransportModal(false)}
                />

                {isLoading ? " " :
                    <UpdateTransportModal
                        show={updateTransportModal}
                        onHide={() => setUpdateTransportModal(false)}
                        update_transport={updateTransport}
                    />
                }

                <DeleteTransportModel
                    show={deleteTransportModal}
                    onHide={() => setDeleteTransportModal(false)}
                    delete_transport_list={deleteTransportList}
                />

            </>
        )
    }
    else {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">No data found...</span>
                </div>
            </div>
        )
    }
};


export async function getServerSideProps({req}) {

    const session_data = await getSession({req});
    const res = await api.get(`/transport/${session_data.user?.madrasha_slug}/transport-list/`);
    const transport_list = await res.data;

    return {
        props: {
            transport_list,
            session_data
        }
    }
}

export default TransportPage;

TransportPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};