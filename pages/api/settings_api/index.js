import api from "../api";

// Get Department List from api
export const getDepartmentList = async (madrasha_slug) => {
    const url = `/settings/${madrasha_slug}/department/`;
    const response = await api.get(url);

    return response.data;
}

// Get Department List from api
export const getDesignationList = async (madrasha_slug) => {
    const url = `/settings/${madrasha_slug}/designation/`;
    const response = await api.get(url);

    return response.data;
}

// Get Classes from api
export const getClassList = async (madrasha_slug) => {
    const url = `/settings/${madrasha_slug}/classes/`;
    const response = await api.get(url);

    return response.data;
}

// Get Groups from api
export const getGroupList = async (madrasha_slug) => {
    const url = `/settings/${madrasha_slug}/group/`;
    const response = await api.get(url);

    return response.data;
}

// Get Sessions from api
export const getSessionList = async (madrasha_slug) => {
    const url = `/settings/${madrasha_slug}/session/`;
    const response = await api.get(url);

    return response.data;
}

// Get Shift from api
export const getShiftList = async (madrasha_slug) => {
    const url = `/settings/${madrasha_slug}/shift/`;
    const response = await api.get(url);

    return response.data;
}
