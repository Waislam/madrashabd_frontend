import React, {useEffect, useState} from "react";
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";

// Setting Component
import PermanentMembers from "../../components/Members/PermanentMembers"
import Layout from "../../components/Layout/Layout";
import AddPermanentMemberModal from "../../components/Members/Modals/AddPermanentMemberModal"
import DeletePermanentMemberModal from "../../components/Members/Modals/DeletePermanentMemberModal"
import UpdatePermanentMemberModal from "../../components/Members/Modals/UpdatePermanentMemberModal"

import api from "../api/api";


const PermanentMemberPage = (props) => {

    const router = useRouter();
    const {data: session, status} = getSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [isLoading, setLoading] = useState(null);
    const [addPermanentMemberModal, setAddPermanentMemberModal] = useState(false);

    // Delete
    const [deletePermanentMemberModal, setDeleteOtherMemberModal] = useState(false);
    const [deletePermanentMemberData, setDeleteOtherMemberData] = useState(null);

    // Update
    const [updatePermanentMemberModal, setUpdatePermanentMemberModal] = useState(false);
    const [updatePermanentMemberOldData, setUpdatePermanentMemberOldData] = useState(null);


    // Add OtherMember
    const handleAddPermanentMemberModal = () => {
        setAddPermanentMemberModal(true)
    };

    // Delete OtherMember
    const handleDeletePermanentMemberModal = (id) => {
        setDeleteOtherMemberData(id);
        setDeleteOtherMemberModal(true)
    };

    // update OtherMember
    const handleUpdatePermanentMemberModal = async (id) => {
        setLoading(true);
        const list = await api.get(`/committee/permanent-members/details/${id}/`);
        const data = list.data;
        setUpdatePermanentMemberOldData(data);
        setLoading(false);
        setUpdatePermanentMemberModal(true)
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

    return (
        <>
            <PermanentMembers
                permanentMember={props.permanent_members.results}
                handleAddPermanentMemberModal={handleAddPermanentMemberModal}
                handleDeletePermanentMemberModal={handleDeletePermanentMemberModal}
                handleUpdatePermanentMemberModal={handleUpdatePermanentMemberModal}
            />

            <AddPermanentMemberModal
                session_data={props.session_data}
                show={addPermanentMemberModal}
                onHide={() => setAddPermanentMemberModal(false)}
            />

            {isLoading ? " " :
                <UpdatePermanentMemberModal
                    show={updatePermanentMemberModal}
                    onHide={() => setUpdatePermanentMemberModal(false)}
                    update_permanent_member_old_data={updatePermanentMemberOldData}
                />
            }

            {/*DeleteOtherMemberModal*/}
            <DeletePermanentMemberModal
                show={deletePermanentMemberModal}
                onHide={() => setDeleteOtherMemberModal(false)}
                permant_member_old_data={deletePermanentMemberData}
            />
        </>
    )
};

export async function getServerSideProps({req}) {

    const session_data = await getSession({req});
    const res = await api.get(`/committee/${session_data.user?.madrasha_slug}/permanent-members/`);

    const permanent_members = await res.data;
    return {
        props: {
            permanent_members,
            session_data
        }
    }
}

export default PermanentMemberPage;

PermanentMemberPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
};