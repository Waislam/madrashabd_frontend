import {useEffect, useState} from "react";
// Setting Component
import Committee from "../../components/Members/Committee"
import AddCommitteeModal from "../../components/Members/Modals/AddCommitteeModal"
import UpdateCommitteeModal from "../../components/Members/Modals/UpdateCommitteeModal"
import Layout from "../../components/Layout/Layout";
import api from "../api/api";


const CommitteePage = () => {
    const [isLoading, setLoading] = useState(null);
    const [committee, setCommittee] = useState(null);
    const [addCommitteeModal, setCommitteeModal] = useState(false);
    const [updateCommitteeModal, setUpdateCommitteeModal] = useState(false);
    const [committeeOldData, setCommitteeOldData] = useState(null);
    const [loader, setLoader] = useState(false);

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


    // update Committee
    const handleUpdateCommitteeModal = async (id) => {
        setLoader(true);
        const list = await api.get(`http://127.0.0.1:8086/committee/details/${id}/`);
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
                handleUpdateCommitteeModal={handleUpdateCommitteeModal}
            />

            <AddCommitteeModal
                show={addCommitteeModal}
                onHide={() => setCommitteeModal(false)}
            />

            { loader ? " " :
                <UpdateCommitteeModal
                    show={updateCommitteeModal}
                    onHide={() => setUpdateCommitteeModal(false)}
                    committee_old_data={committeeOldData}
                />
            }
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