import api from "../api";

export const getDivisionApi = async () => {
    const response = await api.get('accounts/division/')
    console.log("getDivisionApi(): response", response)
    return response.data
}

export const getDistrictApi = async () => {
    const response = await api.get('accounts/district/')
    return response.data
}

export const getPostOfficeApi = async () => {
    const response = await api.get('accounts/post-office/')
    return response.data
}

export const getThanaApi = async () => {
    const response = await api.get('accounts/thana/')
    return response.data
}

export const getPostCodeApi = async () => {
    const response = await api.get('accounts/post-code/')
    return response.data
}

export const createMadrashaApi = async (payload) => {
    // const payload = {
    //     "name": "Madrasha Create by masuk",
    //     "madrasha_address": {
    //         "id": 1,
    //         "division": 1,
    //         "district": 1,
    //         "thana": 1,
    //         "post_office": 1,
    //         "post_code": 1,
    //         "address_info": "null habi jabi"
    //     },
    //     "madrasha_logo": null,
    //     "created_by": "1",
    //     "updated_by": "1",
    //     "active_status": "active"
    // }
    const response = await api.post('accounts/madrasha/', JSON.stringify(payload))
    return response.data
}