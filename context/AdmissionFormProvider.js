import { useState, createContext, useContext } from "react";

export const AdmissionFormContext = createContext();

export default function AdmissionFormProvider({ children }) {
  const [admissionData, setAdmissionData] = useState({});

  const setAdmissionFormValues = (values) => {
    setAdmissionData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <AdmissionFormContext.Provider value={{ admissionData, setAdmissionFormValues }}>
      {children}
    </AdmissionFormContext.Provider>
  );
}

export const useAdmissionFormData = () => useContext(AdmissionFormContext);
