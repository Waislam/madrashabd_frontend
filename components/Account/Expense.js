import React from "react";
import styles from './Expense.module.css'
import AccountSideBar from './AccountSidebar'

const Expense = () => {
    return (
        <div>
            <section className={styles.expenseListSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <AccountSideBar/>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="card">
                                <div className="card-body">
                                    <div className="expense mb-4">
                                        <form action="#">
                                            <h4>Add Expense</h4>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="category"
                                                        placeholder="Category"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="subcategory"
                                                        placeholder="Sub Category"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="amount"
                                                        placeholder="Amount"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="amount"
                                                        placeholder="Date"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="purpose"
                                                        placeholder="Purpose"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="description"
                                                        placeholder="Description"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="expense"
                                                        placeholder="Expense by"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="number"
                                                        placeholder="Number"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <button type="submit" className={styles.defaultBtn}>Print</button>
                                        </form>
                                    </div>
                                    {/*instituteName*/}
                                    <div className={`${styles.instituteName} mb-5`}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <ul className="list-unstyled">
                                                    <li className="mb-2">Category :</li>
                                                    <li className="mb-2">Sub Category :</li>
                                                    <li className="mb-2">Description :</li>
                                                    <li className="mb-2">Expense By :</li>
                                                    <li className="mb-2">Month :</li>
                                                    <li className="mb-2">Amount :</li>
                                                    <li className="mb-2">Status :</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <div className={styles.instituteAddress}>
                                                    <h4>Institute Name</h4>
                                                    <p>Address</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className={styles.instituteSign}>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    <div className={styles.approved}>
                                                        <ul className="list-unstyled">
                                                            <li>Approved By : Masuk</li>
                                                            <li>Date : 09-09-22</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*getSummary*/}
                                    <div className={`${styles.getSummary} mb-5`}>
                                        <h4>Get Summary</h4>
                                        <hr/>
                                        <form action="#">
                                            <div className="row">
                                                <div className="row">
                                                    <div className="col-md-2 mb-3">
                                                        <input
                                                            type="text"
                                                            name="category"
                                                            placeholder="Category"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-md-2 mb-3">
                                                        <input
                                                            type="text"
                                                            name="subcategory"
                                                            placeholder="Sub Category"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-md-2 mb-3">
                                                        <input
                                                            type="text"
                                                            name="expense_by"
                                                            placeholder="Expense By"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-md-2 mb-3">
                                                        <input
                                                            type="text"
                                                            name="from_date"
                                                            placeholder="From date"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-md-2 mb-3">
                                                        <input
                                                            type="text"
                                                            name="to_date"
                                                            placeholder="To date"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-md-2 mb-3">
                                                        <button className={styles.defaultBtn}>Search</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/*instituteName*/}
                                    <div className={`${styles.instituteNameAndForm} mb-5`}>
                                        <div className="text-center mb-5">
                                            <h4 className="mb-3">Institute Name</h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2">From date - to date</li>
                                                <li className="mb-2">Category :</li>
                                                <li className="mb-2">Expense By : Masuk</li>
                                                <li className="mb-2">Total Amount : 2000 Taka</li>
                                            </ul>
                                        </div>
                                        <form action="#" method="POST">
                                            <div className="row">
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="category"
                                                        placeholder="Category"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="amount"
                                                        placeholder="Amount"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="description"
                                                        placeholder="Description"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="to_date"
                                                        placeholder="To Date"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="category"
                                                        placeholder=""
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="amount"
                                                        placeholder=""
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="description"
                                                        placeholder=""
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="to_date"
                                                        placeholder=""
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="category"
                                                        placeholder=""
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="amount"
                                                        placeholder=""
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="description"
                                                        placeholder=""
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <input
                                                        type="text"
                                                        name="to_date"
                                                        placeholder=""
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div style={{float: "right"}}>
                                                <button type="type" className={styles.defaultBtn}>Print as PDF</button>
                                            </div>
                                            <br/>
                                        </form>
                                    </div>

                                    {/*list-output*/}
                                    <div className="get-list mb-4">
                                        <h4>Get List</h4>
                                        <hr/>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <div className="row">
                                                        <div className="col-md-3 mb-3">
                                                            <input
                                                                type="text"
                                                                name="category"
                                                                placeholder="Category"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <input
                                                                type="text"
                                                                name="subcategory"
                                                                placeholder="Sub Category"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <input
                                                                type="text"
                                                                name="from_date"
                                                                placeholder="From date"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <input
                                                                type="text"
                                                                name="expense"
                                                                placeholder="Expense"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <button className={styles.defaultBtn}>Search</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="get-list mt-4">
                                            <div className="table-responsive">
                                                <table className="table table-striped table-bordered">
                                                    <thead className="bg-gray text-dark">
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Description</th>
                                                        <th scope="col">Total amount (tk)</th>
                                                        <th scope="col">Expense By</th>
                                                        <th scope="col">Date</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Expense;