import api from "../api";

export const getTeacherDetailApi = async (slug) => {
    const response = await api.get(`teachers/detail/${slug}/`);
    // console.log("getStudentDetail(): response", response)
    return response.data
};

export const getAllTeacher = async () => {
    const response = await api.get(`teachers/`);
    return response.data
};