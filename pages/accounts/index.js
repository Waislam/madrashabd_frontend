import React, { useEffect } from "react";
import { useState } from "react";

// StudentList Component
import Account from "../../components/Account/StudentIncome";
import Layout from "../../components/Layout/Layout";
import AddStudentIncomeModal from "../../components/Account/AddStudentIncomeModal"
 // import api
 import api from '../api/api'

const Accounts = () => {
    const [studentIncome, setStudentIncome] = useState(null);
    const [showModal, setShowModal] = useState(false);



    const getStudentIncomeData= async()=>{
        const list = await api.get(`transactions/100/student-income/`);
        const data = list.data;
        setStudentIncome(data)
    };

    useEffect(()=>{
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