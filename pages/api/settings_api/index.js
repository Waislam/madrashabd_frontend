import api from "../api";

// Get Department List from api
export const getDepartmentList = async (madrasha_slug) => {
    const url = `http://178.128.94.215:1337/settings/${madrasha_slug}/department/`
    const response = await api.get(url);

    console.log(`madrasha: ${madrasha_slug}, data: ${response.data}`)

    return response.data;
}

// export const getStudentDetailApi = async (slug) => {
//     const response = await api.get(`students/detail/${slug}/`);
//     // console.log("getStudentDetail(): response", response)
//     return response.data
// };

// export const getAllStudents = async () => {
//     const response = await api.get(`students/`);
//     // console.log("getStudentDetail(): response", response)
//     return response.data
// };