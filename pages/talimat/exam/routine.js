import React from "react";

// Talimat Component
import Routine from "../../../components/Talimat/Examination/Routine";
import Layout from "../../../components/Layout/Layout";

// api
import {BASE_URL} from "../../api/api";
import {getSession} from "next-auth/react";

const RoutinePage = (props) => {
    // console.log('props data', props)

    return (
        <>
            <Routine
                classList={props.classList}
                examTermList={props.examTermList}
                madrashaBookList={props.madrashaBookList}
            />
        </>
    )
};


export async function getServerSideProps({req}) {
    const session = await getSession({req})
    const madrasha_slug = session?.user.madrasha_slug

    const madrashaBookRes = await fetch(`${BASE_URL}/settings/${madrasha_slug}/books/`)
    const madrashaBookList = await madrashaBookRes.json()

    const classListRes = await fetch(`${BASE_URL}/settings/${madrasha_slug}/classes/`)
    const classList = await classListRes.json()

    const examTermListRes = await fetch(`${BASE_URL}/talimat/${madrasha_slug}/exam-term/`)
    const examTermList = await examTermListRes.json()


    return {
        props: {
            madrashaBookList,
            classList,
            examTermList
        },
    }
}

export default RoutinePage;


RoutinePage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

