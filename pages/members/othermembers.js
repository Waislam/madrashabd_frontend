import React, {useEffect, useState} from "react";

// Setting Component
import OtherMember from "../../components/Members/OtherMembers"
import Layout from "../../components/Layout/Layout";
import AddOtherMemberModal from "../../components/Members/Modals/AddOtherMemberModal"
import DeleteOtherMemberModal from "../../components/Members/Modals/DeleteOtherMemberModal"
import UpdateOtherMemberModel from "../../components/Members/Modals/UpdateOtherMemberModel"

import api from "../api/api";


const OtherMemberPage = () => {

    const [isLoading, setLoading] = useState(null);

    // Add
    const [otherMember, setOtherMember] = useState(null);
    const [addOtherMemberModal, setOtherMemberModal] = useState(false);

    // Delete
    const [addDeleteOtherMemberModal, setDeleteOtherMemberModal] = useState(false);
    const [deleteOtherMemberData, setDeleteOtherMemberData] = useState(null);

     // Update
    const [updateOtherMemberModal, setUpdateOtherMemberModal] = useState(false);
    const [updateOtherMemberOldData, setUpdateOtherMemberOldData] = useState(null);


    //get committee list
    const getOtherMember = async () => {
        const list = await api.get("http://127.0.0.1:8086/committee/100/other-members/");
        const data = list.data;
        setOtherMember(data);
        setLoading(false);
    };

    useEffect(() => {
        getOtherMember()
    }, []);


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
    const handleUpdateOtherMemberModal = async (id) => {
        setLoading(true);
        const list = await api.get(`http://127.0.0.1:8086/committee/other-member/details/${id}/`);
        const data = list.data.data;
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

    if (!otherMember) {
        return (
            <h2 className="text-center">No data found</h2>
        )
    }

    return (
        <>
            <OtherMember
                otherMember={otherMember}
                handleAddOtherMemberModal={handleAddOtherMemberModal}
                handleDeleteOtherMemberModal={handleDeleteOtherMemberModal}
                handleUpdateOtherMemberModal={handleUpdateOtherMemberModal}
            />

            <AddOtherMemberModal
                show={addOtherMemberModal}
                onHide={() => setOtherMemberModal(false)}
            />

            { isLoading ? " " :
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
};

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