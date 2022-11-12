import React from "react";
import Layout from "../components/Layout/Layout"

const ChangePasswordPage = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card" style={{marginTop:100}}>
                            <h4 className="card-header text-center">Change Your Password</h4>
                            <div className="card-body">
                                <form action="#">
                                    <input
                                        type="text"
                                        placeholder="Old Password"
                                        className="form-control mb-3"
                                    />
                                    <input
                                        type="text"
                                        placeholder="New Password"
                                        className="form-control mb-3"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Conform Password"
                                        className="form-control mb-3"
                                    />
                                    <button className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ChangePasswordPage;



ChangePasswordPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};