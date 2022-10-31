import React, {useEffect, useState} from "react";

// Dawah Component
import Dawah from "../../components/Talimat/Dawah/Dawah";
import Layout from "../../components/Layout/Layout";
import AddDawahModal from "../../components/Talimat/Dawah/Modals/AddDawahModal"
import UpdateDawahModal from "../../components/Talimat/Dawah/Modals/UpdateDawahModal"
import DeleteDawahModal from "../../components/Talimat/Dawah/Modals/DeleteDawahModal"
import api from "../api/api";

const DawahPage = () => {

    const [isLoading, setLoading] = useState(false);
    const [dawah, setDawahList] = useState(null);
    const [dawahModal, setDawahModal] = useState(false);
    const [dawahDeleteModal, setDeleteDawahModal] = useState(false);
    const [deleteDawah, setDeleteDawah] = useState('');

    const [updateShowDawahModal, setUpdateShowDawahModal] = useState(false);
    const [oldDawahData, setOldDawahData] = useState(null);


    const getDawahList = async () => {
        setLoading(true);
        api.get(`http://127.0.0.1:8086/talimat/100/dawah/`)
            .then((response) => {
                setDawahList(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
            })
    };

    useEffect(() => {
        getDawahList().then(() => {

        })
    }, []);


    // Add Dawah
    const handleDawahModal = () => {
        setDawahModal(true)
    };


    // Delete Dawah
    const handleDeleteDawahModal = async (id) => {
        setDeleteDawah(id);
        setDeleteDawahModal(true)
    };


    // Update show modal
    const handleUpdateDawahModal = async (id) => {
        const list = await api.get(`http://127.0.0.1:8086/talimat/dawah/detail/${id}/`);
        const data = list.data;
        setOldDawahData(data);
        setUpdateShowDawahModal(true)
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

    if (!dawah) {
        return (
            <h2 className="text-center">No data found</h2>
        )
    }

    return (
        <div>
            <Dawah
                dawah={dawah}
                handleDawahModal={handleDawahModal}
                handleDeleteDawahModal={handleDeleteDawahModal}
                handleUpdateDawahModal={handleUpdateDawahModal}
            />

            {/*Post Modal*/}
            <AddDawahModal
                show={dawahModal}
                onHide={() => setDawahModal(false)}
            />

            {/*Update Modal*/}
            <DeleteDawahModal
                show={dawahDeleteModal}
                onHide={() => setDeleteDawahModal(false)}
                delete_dawah={deleteDawah}
            />

            {isLoading ? " " :
                <UpdateDawahModal
                    show={updateShowDawahModal}
                    onHide={() => setUpdateShowDawahModal(false)}
                    old_dawah_data={oldDawahData}
                />
            }

        </div>
    )
};


export default DawahPage;


DawahPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

