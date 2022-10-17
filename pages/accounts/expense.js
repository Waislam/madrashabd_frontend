import { ApiError } from "next/dist/server/api-utils";
import React, { useEffect } from "react";
import { useState } from "react";

// Expense Component
import Expense from "../../components/Account/AllExpense";
import Layout from "../../components/Layout/Layout";

// import api
import api from '../api/api'

const ExpensePage = () =>{
    const [expenseList, setExpenseList] = useState(null)

    const getExpenseList = async() => {
        const list = await api.get(`transactions/100/expense/`)
        const data = list.data
        setExpenseList(data)
    }

    useEffect(()=>{
        getExpenseList()
    },[])

    return(
        <div>
            <Expense
                expenseList={expenseList}
                approved="waliul Islam"
            />
        </div>
    )
};

export default  ExpensePage;

ExpensePage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};