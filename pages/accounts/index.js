import React, { useEffect } from "react";
import { useState } from "react";

// StudentList Component
import Account from "../../components/Account/StudentIncome";
import Layout from "../../components/Layout/Layout";
 // import api
 import api from '../api/api'

const Accounts = () => {
    const [studentIncome, setStudentIncome] = useState(null);
    

    const getStudentIncomeData= async()=>{
        const list = await api.get(`transactions/100/student-income/`);
        const data = list.data;
        setStudentIncome(data)
    };

    useEffect(()=>{
        getStudentIncomeData()
    },[]);


    return (
        <>
            <Account
                studentIncomeList={studentIncome}
            />
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