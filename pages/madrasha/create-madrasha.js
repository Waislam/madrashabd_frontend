import React, {useState, useEffect, useMemo} from 'react'
import Layout from "../../components/Layout/Layout";
import api from "../api/api";
import {useAxiosGet} from "../api/hooks/useFetchData";
import {
    getDistrictApi,
    getDivisionApi,
    getPostOfficeApi,
    getPostCodeApi, getThanaApi, createMadrashaApi
} from "../api/madrasha/madrashaApi";

const CreateMadrasha = () => {
    const [madrashaName, setMadrashaName] = useState('')
    const [divisionList, setDivisionList] = useState([])
    const [districts, setDistricts] = useState([])
    const [postCodeList, setPostCodeList] = useState([])
    const [postOfficeList, setPostOfficeList] = useState([])
    const [thanaList, setThanaList] = useState([])
    const [addressInfo, setAddressInfo] = useState('')

    const [selectDivision, setSelectDivision] = useState('')
    const [selectDistrict, setSelectDistrict] = useState('')
    const [selectThana, setSelectThana] = useState('')
    const [selectPostCode, setSelectPostCode] = useState('')
    const [selectPostOffice, setSelectPostOffice] = useState('')

    const [loading, setLoading] = useState(false)


    useEffect(async () => {
        setLoading(true)
        // call division api
        getDivisionApi()
            .then((data) => {
                console.log("getDivisionApi(): results", data)
                setDivisionList(data.results)
                setLoading(false)
            })
            .catch((error) => {
                console.log("getDivision", error)
            })

        // call district api
        getDistrictApi()
            .then((data) => {
                setDistricts(data.results)
                setLoading(false)
            })
            .catch((error) => {
                console.log("getDistrictApi", error)
            })

        // call post Office api
        getPostOfficeApi()
            .then((data) => {
                setPostOfficeList(data.results)
                setLoading(true)
            })
            .catch((error) => {
                console.log("getPostOfficeApi(): error", error)
            })

        // call post code api
        getPostCodeApi()
            .then((data) => {
                setPostCodeList(data.results)
                setLoading(true)
            })
            .catch((error) => {
                console.log("getPostCodeApi(): error", error)
            })

        // call thana api
        getThanaApi()
            .then((data) => {
                setThanaList(data.results)
                setLoading(true)
            })
            .catch((error) => {
                console.log("getThanaApi(): error", error)
            })

    }, [])

    const handleMadrashaSubmit = (event) => {
        event.preventDefault()
        const payload = {
            "name": madrashaName,
            "madrasha_address": {
                "division": selectDivision,
                "district": selectDistrict,
                "thana": selectThana,
                "post_office": selectPostOffice,
                "post_code": selectPostCode,
                "address_info": addressInfo
            },
            "madrasha_logo": null,
            "created_by": "1",
            "updated_by": "1",
            "active_status": "active"
        }

        createMadrashaApi(payload)
            .then((data) => {
                console.log("data", data)
            })
    }

    return (
        <>
            <h1>Create Madrasha</h1>
            <div className="container">
                <form className="row g-3">
                    <div className="col-md-12">
                        <label htmlFor="inputMadrashaName" className="form-label">Madrasha Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputMadrashaName"
                            onChange={(e) => setMadrashaName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputDivision" className="form-label">Division</label>
                        <select
                            value={selectDivision}
                            name="inputDivision"
                            className="form-select"
                            onChange={(e) => setSelectDivision(e.target.value)}
                        >
                            <option value=''>Choose...</option>
                            {
                                divisionList.map((division) => (
                                    <option key={division.pk} value={division.pk}>
                                        {division.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputDistrict" className="form-label">District</label>
                        <select
                            value={selectDistrict}
                            name="inputDistrict"
                            className="form-select"
                            onChange={(e) => setSelectDistrict(e.target.value)}
                        >
                            <option value=''>Choose...</option>
                            {
                                districts.map((district) => (
                                    <option key={district.pk} value={district.pk}>
                                        {district.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputPostOffice" className="form-label">Post Office</label>
                        <select
                            value={selectPostOffice}
                            name="inputPostOffice"
                            className="form-select"
                            onChange={(e) => setSelectPostOffice(e.target.value)}
                        >
                            <option value=''>Choose...</option>
                            {
                                postOfficeList.map((postOffice) => (
                                    <option key={postOffice.pk} value={postOffice.pk}>
                                        {postOffice.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPostCode" className="form-label">Post Code</label>
                        <select
                            value={selectPostCode}
                            name="inputPostCode"
                            className="form-select"
                            onChange={(e) => setSelectPostCode(e.target.value)}
                        >
                            <option value=''>Choose...</option>
                            {
                                postCodeList.map((postCode) => (
                                    <option key={postCode.pk} value={postCode.pk}>
                                        {postCode.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputThana" className="form-label">Thana</label>
                        <select
                            value={selectThana}
                            name="inputThana"
                            className="form-select"
                            onChange={(e) => setSelectThana(e.target.value)}
                        >
                            <option value=''>Choose...</option>
                            {
                                thanaList.map((thana) => (
                                    <option key={thana.pk} value={thana.pk}>
                                        {thana.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="col-md-12">
                        <label
                            htmlFor="inputAddressInfo"
                            className="form-label"
                        >
                            Address Info
                        </label>
                        <input type="text" className="form-control" id="inputAddressInfo" onChange={(e) => setAddressInfo(e.target.value)}/>
                    </div>

                    <div className="col-12">
                        <button onClick={handleMadrashaSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default CreateMadrasha

CreateMadrasha.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}