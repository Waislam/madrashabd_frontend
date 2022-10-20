import api from "../api";

export const getStudentDetailApi = async (slug) => {
    const response = await api.get(`students/detail/${slug}/`);
    // console.log("getStudentDetail(): response", response)
    return response.data;
};

export const getAllStudents = async () => {
    const response = await api.get(`students/`);
    // console.log("getStudentDetail(): response", response)
    return response.data;
};

// Get student detail by id
export const getStudentDetailById = async (student_id) => {
    const response = await api.get(`http://178.128.94.215:1337/students/detail-by-id/${student_id}/`);
    return response.data;
}