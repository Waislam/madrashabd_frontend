import React, {useState, useEffect} from "react";
import styles from './Admission.module.css'
import AdmissionSidebar from './AdmissionSidebar'
import StudentDetailForm from "./StudentDetailForm";
import ParentInformationForm from "./ParentInformationForm";
import PreviousInstitutionForm from "./PreviousInstitutionForm";

import {useForm} from "react-hook-form";
import {useAdmissionFormData} from "../../context/AdmissionFormProvider";
import {
    getDistrictApi,
    getDivisionApi,
    getPostCodeApi,
    getPostOfficeApi,
    getThanaApi
} from "../../pages/api/madrasha/madrashaApi";

const AdmissionForm = (props) => {
    const [step, setStep] = useState(1);

    const [divisionList, setDivisionList] = useState([]);
    const [postOfficeList, setPostOfficeList] = useState([]);
    const [postCodeList, setPostCodeList] = useState([]);
    const [districtList, setDistricts] = useState([]);
    const [thanaList, setThanaList] = useState([]);

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

    const {setAdmissionFormValues, admissionData} = useAdmissionFormData();

    const prevStep = () => {
        setStep(step - 1)
    };

    const nextStep = () => {
        setStep(step + 1)
    };

    useEffect(() => {

        const divitionDataLoad = async () => {
            // call division api
            getDivisionApi()
                .then((data) => {
                    setDivisionList(data)
                })
                .catch((error) => {
                    console.log("getDivisionApi():", error)
                })
        }

        divitionDataLoad().then(() => {

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
                <PreviousInstitutionForm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    session={props.session}
                />
            );
        default:

    }
};


export default AdmissionForm;




