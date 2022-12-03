import React from "react";

// Talimat Component
import ResultSheet from "../../../../components/Talimat/Examination/ResultSheet";
import Layout from "../../../../components/Layout/Layout";
import api from "../../../api/api";
import { getSession } from "next-auth/react";

const ResultSheetPage = (props) => {

    return (
        <>
            <ResultSheet
                result_list={props.resultInfoList}
            />
        </>
    )
};

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    const madrasha_slug = session?.user?.madrasha_slug;

    const resultInfo = await api.get(`talimat/${madrasha_slug}/result-info/`);
    const resultInfoList = resultInfo.data;
    const result = "do something";

    return {
        props: {
            resultInfoList,

        }
    }
};

export default ResultSheetPage;


ResultSheetPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

