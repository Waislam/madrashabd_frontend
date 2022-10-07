import React, { useEffect } from "react";
import { useState } from "react";

// StudentList Component
import OtherIncome from "../../components/Account/OtherIncome";
import Layout from "../../components/Layout/Layout";
// import api
import api from '../api/api'

const OtherIncomePage = () => {
    const [otherIncome, setOtherIncome] = useState(null)
    const [isloading, setIsLoading] = useState(false)

    const getOtherIncome=async()=>{
        const list = await api.get(`transactions/100/other-income/`)
        const data = list.data
        setOtherIncome(data)
    }

    useEffect(()=>{
        getOtherIncome()
    }, [])

    return (
        <>
            <OtherIncome 
                otherIncomeList={otherIncome}

            />
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