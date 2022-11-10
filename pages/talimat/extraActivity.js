import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import api from "../api/api";

// Dawah Component
import ExtraActivity from "../../components/Talimat/ExtraActivity/ExtraActivity";
import AddExtraActivityModal from "../../components/Talimat/ExtraActivity/Modals/AddExtraActivityModal";
import DeleteExtraActivityModal from "../../components/Talimat/ExtraActivity/Modals/DeleteExtraActivityModal";
import UpdateExtraActivityModal from "../../components/Talimat/ExtraActivity/Modals/UpdateExtraActivityModal";
import Layout from "../../components/Layout/Layout";


const ExtraActivityPage = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [isLoading, setLoading] = useState(false);
    const [extraActivity, setExtraActivity] = useState(null);
    const [extraActivityModal, setExtraActivityModal] = useState(false);
    const [extraDeleteActivityModal, setDeleteExtraActivityModal] = useState(false);
    const [extraActivityDeleteData, setExtraActivityDeleteData] = useState(null);

    const [updateExtraActivityModal, setUpdateExtraActivityModal] = useState(false);
    const [extraActivityUpdateOldData, setExtraActivityUpdateOldData] = useState(null);

    //get Extra activity list list
    const getExtraActivityData = async () => {
        const list = await api.get(`talimat/${session.user?.madrasha_slug}/extra-activity/`);
        const data = list.data;
        setExtraActivity(data);
        setLoading(false);
    };

    useEffect(() => {
        getExtraActivityData()
    }, []);


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

    if (!extraActivity) {
        return (
            <h2 className="text-center">No data found</h2>
        )
    }

    return (
        <div>
            <ExtraActivity
                extraActivity={extraActivity}
                handleAddExtraActivity={handleAddExtraActivity}
                handleDeleteExtraActivity={handleDeleteExtraActivity}
                handleUpdateExtraActivityModal={handleUpdateExtraActivityModal}
            />

            <AddExtraActivityModal
                session={session}
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


};


export default ExtraActivityPage;


ExtraActivityPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

