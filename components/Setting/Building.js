import React from "react";
import SettingSideMenu from "./SettingSideMenu";
import {useRouter} from "next/router";

const Building = ({building}) => {
    console.log("buidling: info: ", building)
    const router = useRouter();

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <SettingSideMenu/>
                    <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                        <div className="department-body">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <div className="row">
                                            <div className="col-md-6 mt-3">
                                                <h2><u>Building</u></h2>
                                            </div>
                                            <div className="col-md-6">
                                                <button type="button" className={`btn btn-primary float-end`}>Add
                                                </button>
                                            </div>
                                        </div>
                                        <div className="books-table mt-3">
                                            <div className="table-responsive">
                                                <table className="table table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Building</th>
                                                        <th scope="col">Total Floor</th>
                                                        <th scope="col">Total Room</th>
                                                        <th scope="col" className="text-center">Edit</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                       building && building?.map((data, index) => (
                                                            <tr key={data.id}>
                                                                <th scope="row">{data.building?.building_name}</th>
                                                                <td className="text-sm">8</td>
                                                                <td className="text-sm">i</td>
                                                                <td className="text-sm">8</td>
                                                            </tr>
                                                        ))
                                                    }


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
            </div>
        </>
    )
};

export default Building;