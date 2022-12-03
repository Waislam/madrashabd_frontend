import React, { useState, useEffect } from "react";
import styles from './Admission.module.css'
import AdmissionSidebar from './AdmissionSidebar'
import StudentDetailForm from "./StudentDetailForm";
import ParentInformationForm from "./ParentInformationForm";
import PreviousInstitutionForm from "./PreviousInstitutionForm";

import { useForm } from "react-hook-form";
import { useAdmissionFormData } from "../../context/AdmissionFormProvider";
import {
    getDistrictApi,
    getDivisionApi,
    getPostCodeApi,
    getPostOfficeApi,
    getThanaApi
} from "../../pages/api/madrasha/madrashaApi";
import {
    getClassList,
    getDepartmentList,
    getDesignationList,
    getGroupList,
    getSessionList, getShiftList
} from "../../pages/api/settings_api";
import { getSession } from "next-auth/react";

const AdmissionForm = (props) => {

    const madrasha_id = props.session?.user?.madrasha_id
    const madrasha_slug = props.session?.user?.madrasha_slug


    const [step, setStep] = useState(1);
    const [isloading, setIsloading] = useState(false)

    const [divisionList, setDivisionList] = useState([]);
    const [postOfficeList, setPostOfficeList] = useState([]);
    const [postCodeList, setPostCodeList] = useState([]);
    const [districtList, setDistricts] = useState([]);
    const [thanaList, setThanaList] = useState([]);

    const [pdistrictList, setPDistricts] = useState([]);
    const [pthanaList, setpThanaList] = useState([]);
    const [ppostOfficeList, setpPostOfficeList] = useState([]);
    const [ppostCodeList, setpPostCodeList] = useState([]);



    // const [departmentList, setDepartmentList] = useState([]);
    const [designationList, setDesignationList] = useState([]);
    // const [classList, setClassList] = useState([]);
    // const [groupList, setGroupList] = useState([]);
    // const [sessionList, setSessionList] = useState([]);
    // const [shiftList, setShiftList] = useState([]);

    const [selectPresentAddressDistrict, setSelectPresentAddressDistrict] = useState('');
    const [selectPresentAddressDivision, setSelectPresentAddressDivision] = useState('');
    const [selectPresentAddressThana, setSelectPresentAddressThana] = useState('');
    const [selectPresentAddressPostOffice, setSelectPresentAddressPostOffice] = useState('');
    const [selectPresentAddressPostCode, setSelectPresentAddressPostCode] = useState('');
    const [selectPermanentAddressDistrict, setSelectPermanentAddressDistrict] = useState('');
    const [selectPermanentAddressDivision, setSelectPermanentAddressDivision] = useState('');
    const [selectPermanentAddressThana, setSelectPermanentAddressThana] = useState('');
    const [selectPermanentAddressPostOffice, setSelectPermanentAddressPostOffice] = useState('');
    const [selectPermanentAddressPostCode, setSelectPermanentAddressPostCode] = useState('');

    const { setAdmissionFormValues, admissionData } = useAdmissionFormData();
    // console.log("divison value here: ", selectPermanentAddressDivision)

    const prevStep = () => {
        setStep(step - 1)
    };

    const nextStep = () => {
        setStep(step + 1)
    };

    useEffect(() => {
        // getDepartmentList(`${madrasha_slug}`).then((data) => {
        //     setDepartmentList(data)
        // })

        getDesignationList(madrasha_slug).then((data) => {
            setDesignationList(data)
        })

        // getClassList(madrasha_slug).then((data) => {
        //     setClassList(data)
        // })

        // getGroupList(madrasha_slug).then((data) => {
        //     setGroupList(data)
        // })

        // getSessionList(madrasha_slug).then((data) => {
        //     setSessionList(data)
        // })

        // getShiftList(madrasha_slug).then((data) => {
        //     setShiftList(data)
        // })

    }, [])


    useEffect(() => {

        const divisionDataLoad = async () => {
            // call division api
            getDivisionApi()
                .then((data) => {
                    setDivisionList(data)
                })
                .catch((error) => {
                    console.log("getDivisionApi():", error)
                })
        }

        divisionDataLoad().then(() => {

        })


    }, [])

    useEffect(() => {

        // call post Office api
        getPostOfficeApi(selectPresentAddressDistrict)
            .then((data) => {
                setPostOfficeList(data)
            })
            .catch((error) => {
                console.log("getPostOfficeApi(): error", error)
            })
    }, [selectPresentAddressDistrict])


    useEffect(() => {

        // call district api
        getDistrictApi(selectPresentAddressDivision)
            .then((data) => {
                setDistricts(data)
            })
            .catch((error) => {
                console.log("getDistrictApi", error)
            })
    }, [selectPresentAddressDivision])


    useEffect(() => {

        // call post code api
        getPostCodeApi(selectPresentAddressPostOffice)
            .then((data) => {
                setPostCodeList(data)
            })
            .catch((error) => {
                console.log("getPostCodeApi(): error", error)
            })
    }, [selectPresentAddressPostOffice])


    useEffect(() => {

        // call thana api
        getThanaApi(selectPresentAddressDistrict)
            .then((data) => {
                setThanaList(data)
            })
            .catch((error) => {
                console.log("getThanaApi(): error", error)
            })
    }, [selectPresentAddressDistrict])


    //get address for permanent address
    useEffect(() => {

        // call district api
        getDistrictApi(selectPermanentAddressDivision)
            .then((data) => {
                setPDistricts(data)
            })
            .catch((error) => {
                console.log("getDistrictApi", error)
            })
    }, [selectPermanentAddressDivision])

    useEffect(() => {

        // call thana api
        getThanaApi(selectPermanentAddressDistrict)
            .then((data) => {
                setpThanaList(data)
            })
            .catch((error) => {
                console.log("getThanaApi(): error", error)
            })
    }, [selectPermanentAddressDistrict])

    useEffect(() => {

        // call post Office api
        getPostOfficeApi(selectPermanentAddressDistrict)
            .then((data) => {
                setpPostOfficeList(data)
            })
            .catch((error) => {
                console.log("getPostOfficeApi(): error", error)
            })
    }, [selectPermanentAddressDistrict])

    useEffect(() => {

        // call post code api
        getPostCodeApi(selectPermanentAddressPostOffice)
            .then((data) => {
                setpPostCodeList(data)
            })
            .catch((error) => {
                console.log("getPostCodeApi(): error", error)
            })
    }, [selectPermanentAddressPostOffice])


    switch (step) {
        case 1:
            return (
                <StudentDetailForm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    divisionList={divisionList}
                    districtList={districtList}
                    postOfficeList={postOfficeList}
                    postCodeList={postCodeList}
                    thanaList={thanaList}

                    pdistrictList={pdistrictList}
                    pthanaList={pthanaList}
                    ppostOfficeList={ppostOfficeList}
                    ppostCodeList={ppostCodeList}

                    setSelectPresentAddressDistrict={setSelectPresentAddressDistrict}
                    setSelectPresentAddressDivision={setSelectPresentAddressDivision}
                    setSelectPresentAddressThana={setSelectPresentAddressThana}
                    setSelectPresentAddressPostCode={setSelectPresentAddressPostCode}
                    setSelectPresentAddressPostOffice={setSelectPresentAddressPostOffice}
                    setSelectPermanentAddressDistrict={setSelectPermanentAddressDistrict}
                    setSelectPermanentAddressDivision={setSelectPermanentAddressDivision}
                    setSelectPermanentAddressThana={setSelectPermanentAddressThana}
                    setSelectPermanentAddressPostCode={setSelectPermanentAddressPostCode}
                    setSelectPermanentAddressPostOffice={setSelectPermanentAddressPostOffice}
                    session={props.session}
                />
            );
        case 2:
            return (
                <ParentInformationForm
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 3:
            return (
                <>
                    <PreviousInstitutionForm
                        nextStep={nextStep}
                        prevStep={prevStep}
                        session={props.session}
                        departmentList={props.deapartments}
                        classList={props.classes}
                        groupList={props.groups}
                        shiftList={props.shifts}
                        sessionList={props.session_year}
                    />
                </>
            );
        default:

    }
};



export default AdmissionForm;




