import React from "react";
import Image from "next/image";
import styles from './Account.module.css'
import Header from './IncomeHeader'
import studentLogo from '../../public/assets/admission/students.png'
import Link from "next/link";

const StudentIncome = ({
    otherIncomeList

}) => {
    
    if(!otherIncomeList){
        return(

            <>
                <h1>Loading... please refresh your page</h1>
            </>
        )
    }
    return (
        <div>
            <section className={styles.accountListSection}>
                <div className="container-fluid">
                    {/* <h3 className={styles.accountListTitle}>Accounts</h3> */}
                    <hr/>
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                            <div className={styles.listRightSide}>
                                <div className="card">
                                    <h4 className="text-center mt-3">
                                        <Image src={studentLogo} className="img-responsive"
                                            alt="Logo missing" height={40} width={40}/>
                                    </h4>
                                    <hr/>
                                    <div className="card-body p-0">
                                        <div className={`${styles.activeLink}`}>
                                            <Link href="/accounts/other_income">
                                                <a className="text-left ps-4">Income</a>
                                            </Link>
                                        </div>

                                        <div className={`${styles.inActiveLink}`}>
                                            <Link href="/accounts/expense">
                                                <a className="text-left ps-4">Expense</a>
                                            </Link>
                                        </div>
                                        <div className={`${styles.inActiveLink}`}>
                                            <Link href="/accounts/payment">
                                                <a className="text-left ps-4">Payment</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                            <div className="income">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="receiveMoney mb-4">
                                            <Header/>
                                            <hr/>
                                        </div>
                                        {/*Get List*/}
                                        <div className="get-list">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <h4>Income From Others</h4>
                                                </div>
                                                <div className="col-md-4">
                                                    <button type="button" className={`${styles.defaultBtn} ms-2`}>Get Summary</button>
                                                    <button type="button" className={`${styles.defaultBtn} float-md-end`}>Add Income</button>
                                                </div>
                                            </div>
                                            <hr/>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <div className="row">
                                                            <div className="col-md-3 mb-3">
                                                                <div className="input-group">
                                                                    <input
                                                                        type="text"
                                                                        name="category"
                                                                        placeholder="Category"
                                                                        className="form-control"
                                                                    />
                                                                    <button type="text" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item">category one</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item">category two</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 mb-3">
                                                                <div className="input-group">
                                                                    <input
                                                                        type="text"
                                                                        name="subcategory"
                                                                        placeholder="Sub Category"
                                                                        className="form-control"
                                                                    />
                                                                    <button type="text" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item">category one</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item">category two</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 mb-3">
                                                                <input
                                                                    type="text"
                                                                    name="from_date"
                                                                    placeholder="From date"
                                                                    onChange={(e) => console.log(e.target.value)}
                                                                    onFocus={(e) => (e.target.type = "date")}
                                                                    onBlur={(e) => (e.target.type = "text")}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-md-3 mb-3">
                                                                <input
                                                                    type="text"
                                                                    name="from_date"
                                                                    placeholder="To date"
                                                                    onChange={(e) => console.log(e.target.value)}
                                                                    onFocus={(e) => (e.target.type = "date")}
                                                                    onBlur={(e) => (e.target.type = "text")}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <button className={styles.searchButton}>Search</button>
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
                                                            <th scope="col">Sub_Category</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Donor</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Receipt page</th>
                                                            <th scope="col">Receipt Book</th>
                                                            <th scope="col">Taken By</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            {otherIncomeList && otherIncomeList.results.map((otherincome)=>(
                                                            <tr key={otherincome.id}>
                                                                <th scope="row">
                                                                    <Link href="" style={{color:"#5CBD67"}}>
                                                                        {otherincome.id}
                                                                    </Link>
                                                                </th>
                                                                <td>{otherincome.category.name}</td>
                                                                <td>{otherincome.sub_category.name}</td>
                                                                <td>{otherincome.amount}</td>
                                                                <td>{otherincome.donar_name}</td>
                                                                <td>{otherincome.paid_date}</td>
                                                                <td>{otherincome.receipt_page_number}</td>
                                                                <td>{otherincome.receipt_book_number}</td>
                                                                <td>Dev Team</td>
                                                            </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-7">
                                                        <button className={styles.searchButton}>Download PDF</button>
                                                    </div>
                                                    <div className="pagination-class col-md-4">
                                                        <nav aria-label="page navigation" className="">
                                                            <ul className="pagination float-end">
                                                                <li className="page-item">
                                                                    <a className="page-link" href="">Previous</a>
                                                                </li>
                                                                <li className="page-item">
                                                                    <a className="page-link" href="">1</a>
                                                                </li>
                                                                <li className="page-item">
                                                                    <a className="page-link" href="">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                    <div className="page-size col-md-1">
                                                        <div className="float-end" style={{width:80}}>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder="10"/>
                                                                <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <span className="visually-hidden">Toggle dropdown</span>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item">10</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item">20</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Add form */}
                                        <div className="other-income-form my-4">
                                            <form action="" method="post">
                                                <div className="row">
                                                    <div className="col-md-4 mb-3">
                                                        <div className="form-group">
                                                            <label className="mb-2">Category</label>
                                                            <select class="form-control form-select">
                                                                <option>Category one</option>
                                                                <option>Category two</option>
                                                                <option>Category three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <div className="form-group">
                                                            <label className="mb-2">Sub-Category</label>
                                                            <select class="form-control form-select">
                                                                <option>sub-Category one</option>
                                                                <option>sub-Category two</option>
                                                                <option>sub-Category three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label className="mb-2">Donar Name</label>
                                                        <input type="text" className="form-control" placeholder="Donar Name" />
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <div className="form-group">
                                                            <label className="mb-2">Amount</label>
                                                            <select className="form-control form-select" defaultValue={`DEFAULT`}>
                                                                <option value="DEFAULT">500</option>
                                                                <option>700</option>
                                                                <option>200</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <div className="form-group">
                                                            <label className="mb-2">For Month</label>
                                                            <select className="form-control form-select" defaultValue={'DEFAULT'}>
                                                                <option value="DEFAULT" disabled>Select Month</option>
                                                                <option>January</option>
                                                                <option>February</option>
                                                                <option>March</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label className="mb-2">For Months</label>
                                                        <input type="text" className="form-control" placeholder="january - march" />
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label className="mb-2">Receipt book number</label>
                                                        <input type="text" className="form-control" placeholder="465564165r" />
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label className="mb-2">Receipt page number</label>
                                                        <input type="text" className="form-control" placeholder="21" />
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label className="mb-2">Date</label>
                                                            <input
                                                                type="text"
                                                                name="date"
                                                                placeholder="date"
                                                                onChange={(e) => console.log(e.target.value)}
                                                                onFocus={(e) => (e.target.type = "date")}
                                                                onBlur={(e) => (e.target.type = "text")}
                                                                className="form-control"
                                                            />
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <button type="submit" className={`${styles.defaultBtn}`}>Save and print</button>
                                                    <button type="submit" className={`${styles.defaultBtn} ms-3`}>Save</button>
                                                </div>
                                            </form>
                                        </div>

                                        {/*Get Summary*/}
                                        <div className="get-summary mb-4">
                                            <h4>Get Summary</h4>
                                            <hr/>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <div className="row">
                                                            <div className="col-md-3 mb-3">
                                                                <div className="input-group">
                                                                    <input
                                                                        type="text"
                                                                        name="category"
                                                                        placeholder="Category"
                                                                        className="form-control"
                                                                    />
                                                                    <button type="text" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item">category one</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item">category two</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 mb-3">
                                                                <div className="input-group">
                                                                    <input
                                                                        type="text"
                                                                        name="subcategory"
                                                                        placeholder="Sub Category"
                                                                        className="form-control"
                                                                    />
                                                                    <button type="text" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item">category one</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item">category two</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 mb-3">
                                                                <input
                                                                    type="text"
                                                                    name="from_date"
                                                                    placeholder="From date"
                                                                    onChange={(e) => console.log(e.target.value)}
                                                                    onFocus={(e) => (e.target.type = "date")}
                                                                    onBlur={(e) => (e.target.type = "text")}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-md-3 mb-3">
                                                                <input
                                                                    type="text"
                                                                    name="to_date"
                                                                    placeholder="To date"
                                                                    onChange={(e) => console.log(e.target.value)}
                                                                    onFocus={(e) => (e.target.type = "date")}
                                                                    onBlur={(e) => (e.target.type = "text")}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <button className={styles.searchButton}>Search</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/*institute-name*/}
                                        <div className={styles.instituteNamePdf}>
                                            <div className={styles.instituteList}>
                                                <h4>Get Name</h4>
                                                <ul className="list-unstyled">
                                                    <li>From date - to date</li>
                                                    <li>Category Name</li>
                                                    <li>Total amount : 10 Taka</li>
                                                </ul>
                                            </div>
                                            <div style={{float: "right"}}>
                                                <button className={styles.institutePrintBtn}>Print as PDF</button>
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


export default StudentIncome;




