import React, { useEffect } from "react";
import { useState } from "react";

// StudentList Component
import Account from "../../components/Account/StudentIncome";
import Layout from "../../components/Layout/Layout";
import AddStudentIncomeModal from "../../components/Account/AddStudentIncomeModal"
 // import api
 import api from '../api/api'
import axios from "axios";

const Accounts = () => {
    const [studentIncome, setStudentIncome] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [transactioncategoryList, setTransactioncategoryList] = useState(null)
    const [transactionCaterory, setTransactionCaterory] = useState('');
    const [transactionSubCaterory, setTransactionSubCaterory] = useState('');

    console.log('transactionCaterory', transactionCaterory)
    

    const getTransactioCategory = async ()=> {
        const list = await axios.get(`http://192.168.0.108:8087/transactions/category/`)
        const category = list.data
        setTransactioncategoryList(category)
        console.log(transactioncategoryList)
    }

    const getTransactioSubCategory = async ()=> {
        const list = await axios.get(`http://192.168.0.108:8087/transactions/sub-category/${transactionCaterory}/`)
        const subCategory = list.data
        setTransactionSubCaterory(subCategory)
        console.log(transactionSubCaterory)
    }
    
    useEffect(() => {
        getTransactioCategory()
    }, [])

    useEffect(() => {
        console.log("call sub category")
        getTransactioSubCategory()
    }, [transactionCaterory])


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

    return (
        <>
            <Account
                studentIncomeList={studentIncome}
                addStudentIncomekModalShow={handleModalShow}
            />

            <AddStudentIncomeModal
                shown={showModal}
                close={handleModalClose}
                incomeCategoryList={transactioncategoryList}
                setTransactionCaterory={setTransactionCaterory}
                transactionSubCaterory={transactionSubCaterory}
            >

            </AddStudentIncomeModal>
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