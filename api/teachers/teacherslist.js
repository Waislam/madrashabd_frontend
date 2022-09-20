import api from "../../pages/api/api"

const getTeacherData = async () =>{
        const getTeacher = await api.get(`teachers/`)
        const data = getTeacher.data
        console.log(data)
        return data
    }

export default getTeacherData;
