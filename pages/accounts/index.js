import React, { useEffect } from "react";
import { useState } from "react";
import api, {BASE_URL} from '../api/api'
import axios from "axios";

// StudentList Component
import Account from "../../components/Account/StudentIncome";
import Layout from "../../components/Layout/Layout";
// import component modals
import AddStudentIncomeModal from "../../components/Account/Modals/AddStudentIncomeModal"
import StudentIncomeUpdateModal from "../../components/Account/Modals/UpdateStudentIncomeModal"




const Accounts = () => {
    const [loader, setLoader] = useState(false)
    const [studentIncome, setStudentIncome] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [transactioncategoryList, setTransactioncategoryList] = useState(null)
    const [transactionCaterory, setTransactionCaterory] = useState('');
    const [transactionSubCaterory, setTransactionSubCaterory] = useState('');
    const [studentFees, setStudentFees] = useState('')
    const [studetnIncomeUpdateModalShow, setStudentIncomeUpdateModalShow] = useState(false)
    const [studentIncomePreValue, setStudentIncomePreValue] = useState({})

    // get income category, subCategory and student income amount
    const getTransactioCategory = async ()=> {
        const list = await axios.get(`${BASE_URL}/transactions/category/`)
        const category = list.data
        setTransactioncategoryList(category)
        console.log(transactioncategoryList)
    }

    const getTransactioSubCategory = async ()=> {
        const list = await axios.get(`${BASE_URL}/transactions/sub-category/${transactionCaterory}/`)
        const subCategory = list.data
        setTransactionSubCaterory(subCategory)
        console.log(transactionSubCaterory)
    }

    const getStudentFeesAmount = async () => {
        const list = await axios.get(`${BASE_URL}/settings/100/fees/`)
        const data = list.data
        setStudentFees(data)
    }

    useEffect(() => {
        getTransactioCategory()
        getStudentFeesAmount()
    }, [])

    useEffect(() => {
        console.log("call sub category")
        getTransactioSubCategory()
    }, [transactionCaterory])


    //Get Student income Data as list
    const getStudentIncomeData = async ()=> {
        const list = await api.get(`transactions/100/student-income/`);
        const data = list.data;
        setStudentIncome(data)
    };

    useEffect(() => {
        getStudentIncomeData()
    },[]);

    const handleModalShow = () => {
        setShowModal(true)
    }

    const handleModalClose=(event)=>{
        setShowModal(false)
    }
    //student Income update functionality
    const getStudentIncomeIndividualData = async (stincome_id) => {
        console.log(stincome_id)
        setLoader(true)
        const data = await axios.get(`${BASE_URL}/transactions/student-income/${stincome_id}/`)
        const res = data.data
        setStudentIncomePreValue(res.data)
        setLoader(false)
        setStudentIncomeUpdateModalShow(true)
    }
    return (
        <>
            <Account
                studentIncomeList={studentIncome}
                addStudentIncomekModalShow={handleModalShow}
                handleModalShowandId={getStudentIncomeIndividualData}
            />

            <AddStudentIncomeModal
                shown={showModal}
                close={handleModalClose}
                incomeCategoryList={transactioncategoryList}
                setTransactionCaterory={setTransactionCaterory}
                transactionSubCaterory={transactionSubCaterory}
                studentFees={studentFees}
            >

            </AddStudentIncomeModal>

            {     loader? <h1></h1> :
                <StudentIncomeUpdateModal
                    show={studetnIncomeUpdateModalShow}
                    onHide={()=>setStudentIncomeUpdateModalShow(false)}
                    incomeCategoryList={transactioncategoryList}
                    setTransactionCaterory={setTransactionCaterory}
                    transactionSubCaterory={transactionSubCaterory}
                    studentFees={studentFees}
                    studentIncomePreValue={studentIncomePreValue}
                >
                </StudentIncomeUpdateModal>
            }
        </>
    )
};


export default Accounts;


Accounts.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};