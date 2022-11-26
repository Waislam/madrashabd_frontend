import React, {useEffect, useState} from "react";
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";
import api from "../api/api";

// Dawah Component
import ExtraActivity from "../../components/Talimat/ExtraActivity/ExtraActivity";
import AddExtraActivityModal from "../../components/Talimat/ExtraActivity/Modals/AddExtraActivityModal";
import DeleteExtraActivityModal from "../../components/Talimat/ExtraActivity/Modals/DeleteExtraActivityModal";
import UpdateExtraActivityModal from "../../components/Talimat/ExtraActivity/Modals/UpdateExtraActivityModal";
import Layout from "../../components/Layout/Layout";


const ExtraActivityPage = (props) => {

    const router = useRouter();
    const {data: session, status} = getSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [isLoading, setLoading] = useState(false);
    const [extraActivityModal, setExtraActivityModal] = useState(false);
    const [extraDeleteActivityModal, setDeleteExtraActivityModal] = useState(false);
    const [extraActivityDeleteData, setExtraActivityDeleteData] = useState(null);

    const [updateExtraActivityModal, setUpdateExtraActivityModal] = useState(false);
    const [extraActivityUpdateOldData, setExtraActivityUpdateOldData] = useState(null);


    // //get Extra activity list list
    // const getExtraActivityData = async () => {
    //     const list = await api.get(`talimat/${session.user?.madrasha_slug}/extra-activity/`);
    //     const data = list.data;
    //     setExtraActivity(data);
    //     setLoading(false);
    // };
    //
    // useEffect(() => {
    //     getExtraActivityData()
    // }, []);


    // Add Post
    const handleAddExtraActivity = () => {
        setExtraActivityModal(true)
    };

    const handleDeleteExtraActivity = (id) => {
        setExtraActivityDeleteData(id);
        setDeleteExtraActivityModal(true)
    };


    // update Committee
    const handleUpdateExtraActivityModal = async (id) => {
        setLoading(true);
        const list = await api.get(`talimat/extra-activity/detail/${id}/`);
        const data = list.data;
        setExtraActivityUpdateOldData(data.data);
        setLoading(false);
        setUpdateExtraActivityModal(true)
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

    if (props.extra_activity) {
        return (
            <div>
                <ExtraActivity
                    extraActivity={props.extra_activity}
                    handleAddExtraActivity={handleAddExtraActivity}
                    handleDeleteExtraActivity={handleDeleteExtraActivity}
                    handleUpdateExtraActivityModal={handleUpdateExtraActivityModal}
                />

                <AddExtraActivityModal
                    session_data={props.session_data}
                    show={extraActivityModal}
                    onHide={() => setExtraActivityModal(false)}
                />


                {/*Update Modal*/}
                <DeleteExtraActivityModal
                    show={extraDeleteActivityModal}
                    onHide={() => setDeleteExtraActivityModal(false)}
                    extra_activity_delete_data={extraActivityDeleteData}
                />


                {isLoading ? " " :
                    <UpdateExtraActivityModal
                        show={updateExtraActivityModal}
                        onHide={() => setUpdateExtraActivityModal(false)}
                        extra_activity_old_data={extraActivityUpdateOldData}
                    />
                }

            </div>
        )
    }
    else {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">No Data Found !</span>
                </div>
            </div>
        )
    }
};


export async function getServerSideProps({req}) {

    const session_data = await getSession({req});
    const res = await api.get(`/talimat/${session_data.user?.madrasha_slug}/extra-activity/`);
    const extra_activity = await res.data;
    return {
        props: {
            extra_activity,
            session_data
        }
    }
}


export default ExtraActivityPage;


ExtraActivityPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

