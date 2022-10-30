import React, {useEffect, useState} from "react";

// Dawah Component
import Dawah from "../../components/Talimat/Dawah";
import Layout from "../../components/Layout/Layout";
import api from "../api/api";

const DawahPage = () => {

    const [dawah, setDawahList] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const getDawahList = async () => {
        setLoading(true);
        api.get(`http://127.0.0.1:8086/talimat/100/dawah/`)
            .then((response) => {
                setDawahList(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
            })
    };

    useEffect(() => {
        getDawahList().then(() => {

        })
    }, []);


    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (!dawah) {
        return (
            <h2 className="text-center">No data found</h2>
        )
    }

    return (
        <div>
            <Dawah
                dawah={dawah}
            />
        </div>
    )
};


export default DawahPage;


DawahPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

