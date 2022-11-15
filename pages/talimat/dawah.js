import React, {useEffect, useState} from "react";
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";

// Dawah Component
import Dawah from "../../components/Talimat/Dawah/Dawah";
import Layout from "../../components/Layout/Layout";
import AddDawahModal from "../../components/Talimat/Dawah/Modals/AddDawahModal"
import UpdateDawahModal from "../../components/Talimat/Dawah/Modals/UpdateDawahModal"
import DeleteDawahModal from "../../components/Talimat/Dawah/Modals/DeleteDawahModal"
import api, {BASE_URL} from "../../pages/api/api";

const DawahPage = (props) => {

    const router = useRouter();
    const {data: session, status} = getSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [isLoading, setLoading] = useState(false);
    const [dawahModal, setDawahModal] = useState(false);
    const [dawahDeleteModal, setDeleteDawahModal] = useState(false);
    const [deleteDawah, setDeleteDawah] = useState('');

    const [updateShowDawahModal, setUpdateShowDawahModal] = useState(false);
    const [oldDawahData, setOldDawahData] = useState(null);


    // Add Dawah
    const handleDawahModal = () => {
        setDawahModal(true)
    };

    // Delete Dawah
    const handleDeleteDawahModal = async (id) => {
        setDeleteDawah(id);
        setDeleteDawahModal(true)
    };

    // update Committee
    const handleUpdateDawahModal = async (id) => {
        setLoading(true);
        const list = await api.get(`/talimat/dawah/detail/${id}/`);
        const data = list.data;
        setOldDawahData(data.data);
        setLoading(false);
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


    if (props.dawah_list) {

        return (
            <div>
                <Dawah
                    dawah={props.dawah_list}
                    handleDawahModal={handleDawahModal}
                    handleDeleteDawahModal={handleDeleteDawahModal}
                    handleUpdateDawahModal={handleUpdateDawahModal}
                />

                {/*Post Modal*/}
                <AddDawahModal
                    session_data={props.session_data}
                    show={dawahModal}
                    onHide={() => setDawahModal(false)}
                />

                {isLoading ? " " :
                    <UpdateDawahModal
                        show={updateShowDawahModal}
                        onHide={() => setUpdateShowDawahModal(false)}
                        old_dawah_data={oldDawahData}
                    />
                }

                {/*Update Modal*/}
                <DeleteDawahModal
                    show={dawahDeleteModal}
                    onHide={() => setDeleteDawahModal(false)}
                    delete_dawah={deleteDawah}
                />

            </div>
        )
    }
    else {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">No Data Found</span>
                </div>
            </div>
        )
    }
};

export async function getServerSideProps({req}) {

    const session_data = await getSession({req});
    const res = await api.get(`/talimat/${session_data.user?.madrasha_slug}/dawah/`);
    const dawah_list = await res.data;

    return {
        props: {
            dawah_list,
            session_data
        }
    }
}


export default DawahPage;


DawahPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

