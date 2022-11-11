import React, {useEffect, useState} from "react";
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";

// Setting Component
import OtherMember from "../../components/Members/OtherMembers"
import Layout from "../../components/Layout/Layout";
import AddOtherMemberModal from "../../components/Members/Modals/AddOtherMemberModal"
import DeleteOtherMemberModal from "../../components/Members/Modals/DeleteOtherMemberModal"
import UpdateOtherMemberModel from "../../components/Members/Modals/UpdateOtherMemberModel"

import api from "../api/api";


const OtherMemberPage = (props) => {

    const router = useRouter();
    const {data: session, status} = getSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [isLoading, setLoading] = useState(null);
    const [addOtherMemberModal, setOtherMemberModal] = useState(false);

    // Delete
    const [addDeleteOtherMemberModal, setDeleteOtherMemberModal] = useState(false);
    const [deleteOtherMemberData, setDeleteOtherMemberData] = useState(null);

    // Update
    const [updateOtherMemberModal, setUpdateOtherMemberModal] = useState(false);
    const [updateOtherMemberOldData, setUpdateOtherMemberOldData] = useState(null);


    // Add OtherMember
    const handleAddOtherMemberModal = () => {
        setOtherMemberModal(true)
    };

    // Delete OtherMember
    const handleDeleteOtherMemberModal = (id) => {
        setDeleteOtherMemberData(id);
        setDeleteOtherMemberModal(true)
    };

    // update OtherMember
    const handleUpdateOtherMemberModal = async (e, id) => {
        console.log("ID :", id);
        // e.preventDefault();
        setLoading(true);
        e.preventDefault();
        const list = await api.get(`/committee/other-member/details/${id}/`);
        const data = list.data;
        console.log("Data :", data);
        setUpdateOtherMemberOldData(data);
        setLoading(false);
        setUpdateOtherMemberModal(true)
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

    if (props.other_members) {
        return (
            <>
                <OtherMember
                    otherMember={props.other_members.results}
                    handleAddOtherMemberModal={handleAddOtherMemberModal}
                    handleDeleteOtherMemberModal={handleDeleteOtherMemberModal}
                    handleUpdateOtherMemberModal={handleUpdateOtherMemberModal}
                />

                <AddOtherMemberModal
                    session={props.session_data}
                    show={addOtherMemberModal}
                    onHide={() => setOtherMemberModal(false)}
                />

                {isLoading ? " " :
                    <UpdateOtherMemberModel
                        show={updateOtherMemberModal}
                        onHide={() => setUpdateOtherMemberModal(false)}
                        update_other_member_old_data={updateOtherMemberOldData}
                    />
                }

                {/*DeleteOtherMemberModal*/}
                <DeleteOtherMemberModal
                    show={addDeleteOtherMemberModal}
                    onHide={() => setDeleteOtherMemberModal(false)}
                    other_member_old_data={deleteOtherMemberData}
                />
            </>
        )
    }
    else {
        return (
            <h2 className="text-center">No data found</h2>
        )
    }

};



export async function getServerSideProps({req}) {

    const session_data = await getSession({req});
    const res = await api.get(`/committee/${session_data.user?.madrasha_slug}/other-members/`);
    const other_members = await res.data;
    console.log("Hi ", other_members);

    return {
        props: {
            other_members,
            session_data
        }
    }
}


export default OtherMemberPage;


OtherMemberPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
};