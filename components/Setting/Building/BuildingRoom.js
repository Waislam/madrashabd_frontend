import React from "react";
import SettingSideMenu from "../SettingSideMenu";
import {useRouter} from "next/router";
import BuildingHeader from './BuildingHeader'

const BuildingRoom = ({building_room_list, handleAddBuildingRoomModal, handleUpdateRoomModal}) => {

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
                                        <BuildingHeader/>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-6 mt-3">
                                                <h2><u>Building Room</u></h2>
                                            </div>
                                            <div className="col-md-6">
                                                <button type="button" className={`btn btn-primary float-end`}
                                                        onClick={() => handleAddBuildingRoomModal()}>Add
                                                </button>
                                            </div>
                                        </div>
                                        <div className="books-table mt-3">
                                            <div className="table-responsive">
                                                <table className="table table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Room Name</th>
                                                        <th scope="col">Building</th>
                                                        <th scope="col">Total Seat</th>
                                                        <th scope="col">Floor</th>
                                                        <th scope="col" className="text-center">Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        building_room_list && building_room_list?.map((data, index) => (
                                                            <tr key={data.id}>
                                                                <th scope="row">{index + 1}</th>
                                                                <th scope="row">{data.room_name}</th>
                                                                <th scope="row">{data.building?.building_name}</th>
                                                                <td className="text-sm">{data.total_seat}</td>
                                                                <td className="text-sm">{data.floor}</td>
                                                                <td className="text-sm text-center">
                                                                    <button className="btn btn-primary"
                                                                            onClick={() => handleUpdateRoomModal(data.id)}>Edit
                                                                    </button>
                                                                </td>
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

export default BuildingRoom;