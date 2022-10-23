import { ApiError } from "next/dist/server/api-utils";
import React, { useEffect } from "react";
import { useState } from "react";
import api, { BASE_URL } from '../api/api'
import axios from "axios";

// Expense Component
import Expense from "../../components/Account/AllExpense";
import Layout from "../../components/Layout/Layout";
// Modals import
import AddExpenseModal from "../../components/Account/Modals/AddExpenseModal"
import UpdateExpenseModal from "../../components/Account/Modals/UpdateExpenseModal"





const ExpensePage = () => {
    const [loader, setLoader] = useState(false)
    const [expenseList, setExpenseList] = useState(null)

    const [expenseCategoryList, setExpenseCategoryList] = useState(null)
    const [expenseCategoryValue, setExpenseCategoryValue] = useState('')
    const [expenseSubCategoryList, setExpenseSubCategoryList] = useState(null)

    const [addExpenseModal, setAddExpenseModal] = useState(false)

    const [individualExpenseData, setIndividualExpenseData] = useState(null)
    const [updateExpenseModal, setUpdateExpenseModal] = useState(false)

    //get expense category and sub-category
    const getExpenseCategory = async () => {
        const list = await axios.get(`${BASE_URL}/transactions/expense/category/`)
        const data = list.data
        setExpenseCategoryList(data)
    }
    const getExpenseSubCategory = async () => {
        const list = await axios.get(`${BASE_URL}/transactions/expense/sub-category/${expenseCategoryValue}/`)
        const data = list.data
        setExpenseSubCategoryList(data)
    }

    useEffect(() => {
        getExpenseCategory()
    }, [])

    useEffect(() => {
        getExpenseSubCategory()
    }, [expenseCategoryValue])


    // handle get exepense list data
    const getExpenseList = async () => {
        const list = await api.get(`transactions/100/expense/`)
        const data = list.data
        setExpenseList(data)
    }

    useEffect(() => {
        getExpenseList()
    }, [])

    // Post request handling for expense
    const handleAddExpenseModal = (e) => {
        e.preventDefault()
        setAddExpenseModal(true)
    }

    //Put request handling section
    const handleIndividualObj = async (expense_id) => { 
        setLoader(true)
        const list = await axios.get(`${BASE_URL}/transactions/expense/${expense_id}/`)
        const data = list.data
        setIndividualExpenseData(data.data)
        setLoader(false)
        setUpdateExpenseModal(true)

    }

    return (
        <div>
            <Expense
                expenseList={expenseList}
                approved="waliul Islam"
                handleAddExpenseModal={handleAddExpenseModal}
                handleIndividualObj={handleIndividualObj}
            />
            <AddExpenseModal
                show={addExpenseModal}
                onHide={() => setAddExpenseModal(false)}
                expensecategorylist={expenseCategoryList}
                setExpenseCategoryValue={setExpenseCategoryValue}
                expenseSubCategoryList={expenseSubCategoryList}
            >
            </AddExpenseModal>

            { loader? <h1></h1>:
                <UpdateExpenseModal
                show={updateExpenseModal}
                onHide={() => setUpdateExpenseModal(false)}
                individualExpenseData={individualExpenseData}
                expensecategorylist={expenseCategoryList}
                setExpenseCategoryValue={setExpenseCategoryValue}
                expenseSubCategoryList={expenseSubCategoryList}
                >
                </UpdateExpenseModal>
            }
        </div>
    )
};

export default ExpensePage;

ExpensePage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};