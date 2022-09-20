import api from "../api";

export const getStudentDetailApi = async (slug) => {
    const response = await api.get(`students/detail/${slug}/`)
    // console.log("getStudentDetail(): response", response)
    return response.data
}