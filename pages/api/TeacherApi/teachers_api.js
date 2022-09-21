import api from "../api";

export const getAllTeachers = async () => {
    const respones = await api.get('teachers/')
    return respones.data
}