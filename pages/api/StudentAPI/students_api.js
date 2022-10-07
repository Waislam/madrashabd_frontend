import api from "../api";

export const getStudentDetailApi = async (slug) => {
    const response = await api.get(`students/detail/${slug}/`);
    // console.log("getStudentDetail(): response", response)
    return response.data
};

export const getAllStudents = async () => {
    const response = await api.get(`students/`);
    // console.log("getStudentDetail(): response", response)
    return response.data
};