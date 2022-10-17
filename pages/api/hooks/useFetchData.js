import React, {useEffect, useState} from 'react'
import api from '../api'

// export const useAxiosGet = (url, params) => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState("");
//     const [loaded, setLoaded] = useState(false);
//
//     useEffect(() => {
//         api
//             .get(url)
//             .then((response) => setData(response.data))
//             .catch((error) => setError(error.message))
//             .finally(() => setLoaded(true));
//     }, []);
//
//     return {data, error, loaded};
// };

