// import React from "react";
//
// // Setting Component
// import PermanentMember from "../../components/Members/Permanentm"
// import Layout from "../../components/Layout/Layout";
//
//
// const PermanentMemberPage = () =>{
//     return(
//         <>
//             <PermanentMember/>
//         </>
//     )
// };
//
// export default PermanentMemberPage;
//
// PermanentMemberPage.getLayout=(page)=>{
//     return(
//         <>
//             <Layout>
//                 {page}
//             </Layout>
//         </>
//     )
// };


import React, {useEffect, useState} from "react";

// Setting Component
import PermanentMembers from "../../components/Members/PermanentMembers"
import Layout from "../../components/Layout/Layout";
import AddPermanentMemberModal from "../../components/Members/Modals/AddPermanentMemberModal"
import DeletePermanentMemberModal from "../../components/Members/Modals/DeletePermanentMemberModal"
import UpdatePermanentMemberModal from "../../components/Members/Modals/UpdatePermanentMemberModal"

import api from "../api/api";


const PermanentMemberPage = () => {

    const [isLoading, setLoading] = useState(null);

    // Add
    const [permanentMember, setPermanentMember] = useState(null);
    const [addPermanentMemberModal, setAddPermanentMemberModal] = useState(false);

    // Delete
    const [deletePermanentMemberModal, setDeleteOtherMemberModal] = useState(false);
    const [deletePermanentMemberData, setDeleteOtherMemberData] = useState(null);

     // Update
    const [updatePermanentMemberModal, setUpdatePermanentMemberModal] = useState(false);
    const [updatePermanentMemberOldData, setUpdatePermanentMemberOldData] = useState(null);


    //get PermanentMember List
    const getPermanentMember = async () => {
        const list = await api.get("http://127.0.0.1:8086/committee/100/permanent-members/");
        const data = list.data;
        setPermanentMember(data);
        setLoading(false);
    };

    useEffect(() => {
        getPermanentMember()
    }, []);


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
        const list = await api.get(`http://127.0.0.1:8086/committee/permanent-members/details/${id}/`);
        const data = list.data.data;
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

    if (!permanentMember) {
        return (
            <h2 className="text-center">No data found</h2>
        )
    }

    return (
        <>
            <PermanentMembers
                permanentMember={permanentMember}
                handleAddPermanentMemberModal={handleAddPermanentMemberModal}
                handleDeletePermanentMemberModal={handleDeletePermanentMemberModal}
                handleUpdatePermanentMemberModal={handleUpdatePermanentMemberModal}
            />

            <AddPermanentMemberModal
                show={addPermanentMemberModal}
                onHide={() => setAddPermanentMemberModal(false)}
            />

            { isLoading ? " " :
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