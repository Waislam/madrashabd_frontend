import {useEffect, useState} from "react";
// Setting Component
import Committee from "../../components/Members/Committee"
import AddCommitteeModal from "../../components/Members/Modals/AddCommitteeModal"
import Layout from "../../components/Layout/Layout";
import api from "../api/api";


const CommitteePage = () => {
    const [isLoading, setLoading] = useState(null);
    const [committee, setCommittee] = useState(null);
    const [addCommitteeModal, setCommitteeModal] = useState(false);

    //get committee list
    const getCommittee = async () => {
        const list = await api.get("http://127.0.0.1:8086/committee/list/");
        const data = list.data;
        setCommittee(data);
        setLoading(false);
    };

    useEffect(() => {
        getCommittee()
    }, []);


    // committee
    const handleCommitteeModal = () => {
        setCommitteeModal(true)
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


    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (!committee) {
        return (
            <h2 className="text-center">No data found</h2>
        )
    }

    return (
        <div>
            <Committee
                committee={committee}
                handleCommitteeModal={handleCommitteeModal}
            />

            <AddCommitteeModal
                show={addCommitteeModal}
                onHide={() => setCommitteeModal(false)}
            />
        </div>
    )
};

export default CommitteePage;


CommitteePage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};