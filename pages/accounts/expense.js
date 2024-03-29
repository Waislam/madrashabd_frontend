import {ApiError} from "next/dist/server/api-utils";
import React, {useEffect, useState} from "react";
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";
import api, {BASE_URL} from '../api/api'
import axios from "axios";

// Expense Component
import Expense from "../../components/Account/AllExpense";
import Layout from "../../components/Layout/Layout";
import AddExpenseModal from "../../components/Account/Modals/AddExpenseModal"
import UpdateExpenseModal from "../../components/Account/Modals/UpdateExpenseModal"


const ExpensePage = (props) => {

    const router = useRouter();
    const {data: session, status} = getSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    const [loader, setLoader] = useState(false);
    const [expenseList, setExpenseList] = useState(null);

    const [expenseCategoryList, setExpenseCategoryList] = useState(null);
    const [expenseCategoryValue, setExpenseCategoryValue] = useState('');
    const [expenseSubCategoryList, setExpenseSubCategoryList] = useState(null);

    const [addExpenseModal, setAddExpenseModal] = useState(false);

    const [individualExpenseData, setIndividualExpenseData] = useState(null);
    const [updateExpenseModal, setUpdateExpenseModal] = useState(false);

    //get expense category and sub-category
    const getExpenseCategory = async () => {
        const list = await axios.get(`${BASE_URL}/transactions/expense/category/`);
        const data = list.data;
        setExpenseCategoryList(data)
    };
    const getExpenseSubCategory = async () => {
        const list = await axios.get(`${BASE_URL}/transactions/expense/sub-category/${expenseCategoryValue}/`);
        const data = list.data;
        setExpenseSubCategoryList(data)
    };

    useEffect(() => {
        getExpenseCategory()
    }, []);

    useEffect(() => {
        getExpenseSubCategory()
    }, [expenseCategoryValue]);


    // Post request handling for expense
    const handleAddExpenseModal = (e) => {
        e.preventDefault();
        setAddExpenseModal(true)
    };

    //Put request handling section
    const handleIndividualObj = async (expense_id) => {
        setLoader(true);
        const list = await axios.get(`${BASE_URL}/transactions/expense/${expense_id}/`);
        const data = list.data;
        setIndividualExpenseData(data.data);
        setLoader(false);
        setUpdateExpenseModal(true)
    };

    return (
        <div>
            <Expense
                expenseList={props.expense_list.results}
                approved="waliul Islam"
                handleAddExpenseModal={handleAddExpenseModal}
                handleIndividualObj={handleIndividualObj}
            />
            <AddExpenseModal
                session={session}
                show={addExpenseModal}
                onHide={() => setAddExpenseModal(false)}
                expensecategorylist={expenseCategoryList}
                setExpenseCategoryValue={setExpenseCategoryValue}
                expenseSubCategoryList={expenseSubCategoryList}
            >
            </AddExpenseModal>

            {loader ? <h1></h1> :
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


export async function getServerSideProps({req}) {

    const session_data = await getSession({req});
    const res = await api.get(`/transactions/${session_data.user?.madrasha_slug}/expense/`);
    const expense_list = await res.data;

    return {
        props: {
            expense_list,
            session_data
        }
    }
}


export default ExpensePage;

ExpensePage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};