import React from "react";

// Expense Component
import Expense from "../../components/Account/Expense";
import Layout from "../../components/Layout/Layout";

const expense = () =>{
    return(
        <div>
            <Expense/>
        </div>
    )
};

export default  expense;

expense.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};