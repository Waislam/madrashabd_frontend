import React, {useEffect, useState} from "react";

// third party
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";

// Transport Component
import GariList from "../../components/Transport/GariList"
import AddGariListModal from "../../components/Transport/Modals/AddGariListModal"
import UpdateGariModal from "../../components/Transport/Modals/UpdateGariModal"
import DeleteGariModal from "../../components/Transport/Modals/DeleteGariModal"
import Layout from "../../components/Layout/Layout";

// api
import api from "../api/api";

const GariPage = (props) => {
    const router = useRouter();
    const {data: session, status} = getSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [isLoading, setLoading] = useState(false);

    // Add Post Request
    const [addGariModal, setAddGariList] = useState(false);


    // Update
    const [updateGariModal, setUpdateGariModal] = useState(false);
    const [updateGariList, setUpdateGariList] = useState(null);

    // Delete
    const [deleteGariModal, setDeleteGariModal] = useState(false);
    const [deleteGariList, setDeleteGariList] = useState('');


    // Add Post Request
    const handleAddGari = () => {
        setAddGariList(true);
    };

    // update OtherMember
    const handleGariUpdate = async (id) => {
        setLoading(true);
        const list = await api.get(`/transport/vehicle-info/details/${id}/`);
        const data = list.data;
        setUpdateGariList(data);
        setLoading(false);
        setUpdateGariModal(true)
    };

    // Delete GariList
    const handleGariDelete = (id) => {
        setDeleteGariList(id);
        setDeleteGariModal(true)
    };

    // Loading
    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (props.gari_list) {
        return (
            <>
                <GariList
                    gariList={props.gari_list.results}
                    handleAddGari={handleAddGari}
                    handleGariUpdate={handleGariUpdate}
                    handleGariDelete={handleGariDelete}
                />

                <AddGariListModal
                    session_data={props.session_data}
                    show={addGariModal}
                    onHide={() => setAddGariList(false)}
                />

                {/*UpdateGariModal*/}
                {isLoading ? " " :
                    <UpdateGariModal
                        show={updateGariModal}
                        onHide={() => setUpdateGariModal(false)}
                        update_gari_list={updateGariList}
                    />
                }

                {/*DeleteOtherMemberModal*/}
                <DeleteGariModal
                    show={deleteGariModal}
                    onHide={() => setDeleteGariModal(false)}
                    delete_gari_list={deleteGariList}
                />

            </>
        )
    }
    else {
        return (
            <>
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">No Data Found !</span>
                    </div>
                </div>
            </>
        )
    }
};


export async function getServerSideProps({req}) {

    const session_data = await getSession({req});
    const res = await api.get(`/transport/${session_data.user?.madrasha_slug}/vehicle-info-list/`);
    const gari_list = await res.data;

    return {
        props: {
            gari_list,
            session_data
        }
    }
}

export default GariPage;

GariPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};