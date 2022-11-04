import React, {useEffect, useState} from "react";


// Transport Component
import GariList from "../../components/Transport/GariList"
import AddGariListModal from "../../components/Transport/Modals/AddGariListModal"
import UpdateGariModal from "../../components/Transport/Modals/UpdateGariModal"
import DeleteGariModal from "../../components/Transport/Modals/DeleteGariModal"
import Layout from "../../components/Layout/Layout";
import api from "../api/api";

const GariPage = () => {
    const [isLoading, setLoading] = useState(false);
    const [gariList, setGariList] = useState(null);

    // Add Post Request
    const [addGariModal, setAddGariList] = useState(false);


    // Update
    const [updateGariModal, setUpdateGariModal] = useState(false);
    const [updateGariList, setUpdateGariList] = useState(null);

    // Delete
    const [deleteGariModal, setDeleteGariModal] = useState(false);
    const [deleteGariList, setDeleteGariList] = useState(null);

    // Get GariList
    const getGariList = async () => {
        setLoading(true);
        const list = await api.get("http://127.0.0.1:8086/transport/100/vehicle-info-list/");
        const data = list.data;
        setGariList(data);
        setLoading(false);
    };

    // Add Post Request
    const handleAddGari = () => {
        setAddGariList(true);

    };

    // Update GariList
    const handleGariUpdate = (id) => {
        setDeleteGariList(id);
        setUpdateGariModal(true)
    };

    // Delete GariList
    const handleGariDelete = (id) => {
        setDeleteGariModal(true)

    };

    useEffect(() => {
        getGariList()
    }, []);


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

    //
    if (gariList) {
        return (
            <>
                <GariList
                    gariList={gariList}
                    handleAddGari={handleAddGari}
                    handleGariUpdate={handleGariUpdate}
                    handleGariDelete={handleGariDelete}
                />

                <AddGariListModal
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

export default GariPage;

GariPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};