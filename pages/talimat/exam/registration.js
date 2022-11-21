import React from "react";

// Talimat Component
import Registration from "../../../components/Talimat/Examination/Registration";
import Layout from "../../../components/Layout/Layout";
import api, { BASE_URL } from "../../api/api";
import {getSession} from "next-auth/react";

const RegistrationPage = (props) => {

    return (
        <>
            <Registration
                examRegistrationList={props.examRegistrationList}
                termList={props.termList}
                classList={props.classList}
            />
        </>
    )
};

export async function getServerSideProps({req}) {
    const session = await getSession({req})
    const madrasha_slug = session?.user.madrasha_slug

    const examRegistrationRes = await fetch(`${BASE_URL}/talimat/${madrasha_slug}/exam-registration/`)
    const examRegistrationList = await examRegistrationRes.json()

    const termListres = await fetch(`${BASE_URL}/talimat/${madrasha_slug}/exam-term/`)
    const termList = await termListres.json()

    const classListRes = await fetch(`${BASE_URL}/settings/${madrasha_slug}/classes/`)
    const classList = await classListRes.json()

    // will receive `posts` as a prop at build time
    return {
        props: {
            examRegistrationList,
            termList,
            classList
        },
    }
}


export default RegistrationPage;


RegistrationPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};



