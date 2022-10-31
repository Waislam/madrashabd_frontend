import api from "../api";

// get exam list api
export const getExamListApi = async (madrasha_slug) => {
    const url = `talimat/${madrasha_slug}/exam-announcement/`;
    const response = await api.get(url);

    return response.data;
}