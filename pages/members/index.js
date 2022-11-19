import React, {useEffect, useState} from "react";
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";


// Setting Component
import Committee from "../../components/Members/Committee"
import AddCommitteeModal from "../../components/Members/Modals/AddCommitteeModal"
import UpdateCommitteeModal from "../../components/Members/Modals/UpdateCommitteeModal"
import Layout from "../../components/Layout/Layout";
import api from "../api/api";


const CommitteePage = (props) => {

    const router = useRouter();
    const {data: session, status} = getSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [isLoading, setLoading] = useState(null);
    const [addCommitteeModal, setCommitteeModal] = useState(false);
    const [updateCommitteeModal, setUpdateCommitteeModal] = useState(false);
    const [committeeOldData, setCommitteeOldData] = useState(null);
    const [loader, setLoader] = useState(false);

    // committee
    const handleCommitteeModal = () => {
        setCommitteeModal(true)
    };


    // update Committee
    const handleUpdateCommitteeModal = async (id) => {
        setLoader(true);
        const list = await api.get(`committee/details/${id}/`);
        const data = list.data;
        setCommitteeOldData(data);
        setLoader(false);
        setUpdateCommitteeModal(true)
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

    if (props.committee_list) {
        return (
            <div>
                <Committee
                    committee={props.committee_list.results}
                    handleCommitteeModal={handleCommitteeModal}
                    handleUpdateCommitteeModal={handleUpdateCommitteeModal}
                />

                <AddCommitteeModal
                    session={props.session_data}
                    show={addCommitteeModal}
                    onHide={() => setCommitteeModal(false)}
                />

                {loader ? " " :
                    <UpdateCommitteeModal
                        show={updateCommitteeModal}
                        onHide={() => setUpdateCommitteeModal(false)}
                        committee_old_data={committeeOldData}
                    />
                }
            </div>
        )
    }
    else {
        return (
            <div>
                <h3 className="text-center">No Data Found</h3>
            </div>
        )
    }
};

export async function getServerSideProps({req}) {

    const session_data = await getSession({req});
    const res = await api.get(`/committee/${session_data.user?.madrasha_slug}/list/`);
    const committee_list = await res.data;

    return {
        props: {
            committee_list,
            session_data
        }
    }
}


export default CommitteePage;


CommitteePage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};