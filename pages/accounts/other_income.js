import React, { useEffect } from "react";
import { useState } from "react";
import api, { BASE_URL } from '../api/api'
import axios from "axios";

// StudentList Component
import OtherIncome from "../../components/Account/OtherIncome";
import Layout from "../../components/Layout/Layout";

//post and put modal import
import AddOtherIncomeModal from "../../components/Account/Modals/AddOtherIncomeModal"
import UpdateOtherIncomeModal from "../../components/Account/Modals/UpdateOtherIncomeModal"


const OtherIncomePage = () => {
    const [otherIncome, setOtherIncome] = useState(null)
    const [isloading, setIsLoading] = useState(false)
    const [postRequestModal, setPostRequestModal] = useState(false)

    const [transactioncategoryList, setTransactioncategoryList] = useState(null)
    const [transactionCaterory, setTransactionCaterory] = useState('');
    const [transactionSubCaterory, setTransactionSubCaterory] = useState('');

    const [putRequestModal, setPutRequestModal] = useState(false)
    const [singleObjectData, setSingleObjectData] = useState({})

    // get income category, subCategory
    const getTransactioCategory = async () => {
        const list = await axios.get(`${BASE_URL}/transactions/category/`)
        const category = list.data
        setTransactioncategoryList(category)
    }

    const getTransactioSubCategory = async () => {
        const list = await axios.get(`${BASE_URL}/transactions/sub-category/${transactionCaterory}/`)
        const subCategory = list.data
        setTransactionSubCaterory(subCategory)
    }

    useEffect(() => {
        getTransactioCategory()
    }, [])

    useEffect(() => {
        getTransactioSubCategory()
    }, [transactionCaterory])


    // get Other Income list
    const getOtherIncome = async () => {
        const list = await api.get(`transactions/100/other-income/`)
        const data = list.data
        setOtherIncome(data)
    }

    useEffect(() => {
        getOtherIncome()
    }, [])

    //handle Post request Modals open
    const openPostRequestModal = (e) => {
        e.preventDefault()
        setPostRequestModal(true)
    }

    //handle put request modal open and pass id
    const passOtherIncomeId = async (income_id) => {
        setIsLoading(true)
        const list = await axios.get(`${BASE_URL}/transactions/other-income/${income_id}/`)
        const data = list.data
        setSingleObjectData(data.data)
        setIsLoading(false)
        setPutRequestModal(true)
    }

    return (
        <>
            <OtherIncome
                otherIncomeList={otherIncome}
                openPostRequestModal={openPostRequestModal}
                passOtherIncomeId={passOtherIncomeId}

            />
            <AddOtherIncomeModal
                show={postRequestModal}
                onHide={() => setPostRequestModal(false)}
                incomecategorylist={transactioncategoryList}
                setTransactionCategory={setTransactionCaterory}
                transactionSubCategory={transactionSubCaterory}
            >
            </AddOtherIncomeModal>
            {isloading ? <h1></h1> :
                <UpdateOtherIncomeModal
                    show={putRequestModal}
                    onHide={() => setPutRequestModal(false)}
                    incomecategorylist={transactioncategoryList}
                    setTransactionCategory={setTransactionCaterory}
                    transactionSubCategory={transactionSubCaterory}
                    singleobjectdata={singleObjectData}
                >
                </UpdateOtherIncomeModal>
            }
        </>
    )
};


export default OtherIncomePage;


OtherIncomePage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};