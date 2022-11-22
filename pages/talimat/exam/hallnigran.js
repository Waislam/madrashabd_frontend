import React from "react";

// Talimat Component
import HallNigran from "../../../components/Talimat/Examination/HallNigran";
import Layout from "../../../components/Layout/Layout";
import {BASE_URL} from "../../api/api";
import {getSession} from "next-auth/react";

const HallNigranPage = (props) => {

    return (
        <>
            <HallNigran hallDutyList={props.hallDutyList}/>
        </>
    )
};

export async function getServerSideProps({req}) {
    const session = await getSession({req})
    const madrasha_slug = session?.user.madrasha_slug

    const hallDutyListRes = await fetch(`${BASE_URL}/talimat/${madrasha_slug}/hall-duty/`)
    const hallDutyList = await hallDutyListRes.json()

    // will receive `posts` as a prop at build time
    return {
        props: {
            hallDutyList
        },
    }
}

export default HallNigranPage;


HallNigranPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

