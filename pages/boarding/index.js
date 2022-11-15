import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import api, {BASE_URL} from "../api/api";

import Boarding from "../../components/Boarding/Boarding";
import AddBazarListModal from "../../components/Boarding/Modals/AddBazarListModal";
import Layout from "../../components/Layout/Layout";


const BoardingPage = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [bazerList, setBazerList] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [searchBazerList, setSearchBazerList] = useState('');
    const [bazarListPageNum, setBazerListPageNum] = useState(1);
    const [bazarListRecords, setBazerListRecords] = useState('');

    const [addBazarListModal, setBazarListModal] = useState(false);

    const getAllBazarList = async () => {
        setLoading(true);

        api.get(`boarding/bazarlist/${session.user?.madrasha_slug}/?search=${searchBazerList && searchBazerList}&page=${bazarListPageNum}&records=${bazarListRecords && bazarListRecords}\``)
            .then((response) => {
                setBazerList(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
            })
    };

    useEffect(() => {
        getAllBazarList().then(() => {

        })
    }, [bazarListPageNum]);

    const handleBazarListPageNum = () => {
        setBazerListPageNum(bazarListPageNum + 1)
    };

    const handleSearchBtn = () => {
        getAllBazarList()
    };

    const nextPage = () => {
        setBazerListPageNum(bazarListPageNum + 1)
    };

    const prevPage = () => {
        setBazerListPageNum(bazarListPageNum - 1)
    };


    // Post Request
    const handleAddBazarListModal = () => {
        setBazarListModal(true)
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

    if (!bazerList) {
        return (
            <h2 className="text-center">No data found</h2>
        )
    }

    return (
        <>
            <Boarding
                bazerList={bazerList}
                handleBazarListPageNum={handleBazarListPageNum}
                setBazerListPageNum={setBazerListPageNum}
                setSearchBazerList={setSearchBazerList}
                setBazerListRecords={setBazerListRecords}
                nextPage={nextPage}
                prevPage={prevPage}
                handleSearchBtn={handleSearchBtn}
                bazarListPageNum={bazarListPageNum}

                handleAddBazarListModal={handleAddBazarListModal}
            />

            <AddBazarListModal
                show={addBazarListModal}
                onHide={() => setBazarListModal(false)}
            />
        </>
    )
};

export default BoardingPage;


BoardingPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};