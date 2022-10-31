import React, {useEffect, useState} from "react";
import Boarding from "../../components/Boarding/Boarding";
import AddBazarListModal from "../../components/Boarding/Modals/AddBazarListModal";
import Layout from "../../components/Layout/Layout";
// Call base urls
import api, {BASE_URL} from "../api/api";

const BoardingPage = () => {

    const [bazerList, setBazerList] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [searchBazerList, setSearchBazerList] = useState('');
    const [bazarListPageNum, setBazerListPageNum] = useState(1);
    const [bazarListRecords, setBazerListRecords] = useState('');

    const [addBazarListModal, setBazarListModal] = useState(false);

    const getAllBazarList = async () => {
        setLoading(true);
        // console.log(`boarding/bazarlist/?search=${searchBazerList && searchBazerList}&page=${bazarListPageNum}&records=${bazarListRecords && bazarListRecords}`);

        api.get(`boarding/bazarlist/100/?search=${searchBazerList && searchBazerList}&page=${bazarListPageNum}&records=${bazarListRecords && bazarListRecords}\``)
        // api.get(`boarding/bazarlist/`)
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
    const handleAddBazarListModal = () =>{
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