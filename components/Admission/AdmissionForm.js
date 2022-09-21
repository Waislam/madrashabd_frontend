import React, {useState} from "react";
import styles from './Admission.module.css'
import AdmissionSidebar from './AdmissionSidebar'
import StudentDetailForm from "./StudentDetailForm";
import ParentInformationForm from "./ParentInformationForm";
import PreviousInstitutionForm from "./PreviousInstitutionForm";

import { useForm } from "react-hook-form";
import {useAdmissionFormData} from "../../context/AdmissionFormProvider";

const AdmissionForm = () => {
    const [step, setStep] = useState(1);

    const { setAdmissionFormValues } = useAdmissionFormData();

    const prevStep = () => {
        setStep(step - 1)
    };

    const nextStep = () => {
        setStep(step + 1)
    };

    switch (step) {
        case 1:
            return (
                <StudentDetailForm
                    nextStep={nextStep}
                />
            );
        case 2:
            return (
                 <ParentInformationForm
                     nextStep={nextStep}
                 />
            );
        case 3:
            return (
                <PreviousInstitutionForm
                    nextStep={nextStep}
                />
            );
        default:

    }

    // return (
    //     <>
    //         {/*Student Details*/}
    //         <StudentDetailForm/>
    //         <br/>
    //         <br/>
    //         {/*parents-information **************************/}
    //         <ParentInformationForm/>
    //         <br/>
    //         <br/>
    //         {/*previous-institution *************************/}
    //         <PreviousInstitutionForm/>
    //     </>
    // )
};


export default AdmissionForm;




