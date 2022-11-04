import React from "react";

// Talimat Component
import Routine from "../../../components/Talimat/Examination/Routine";
import Layout from "../../../components/Layout/Layout";

// api
import { BASE_URL } from "../../api/api";

const RoutinePage = (props) => {
    console.log('props data', props)

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


export async function getStaticProps() {
    const madrashaBookRes = await fetch(`${BASE_URL}settings/100/books/`)
    const madrashaBookList = await madrashaBookRes.json()

    const classListRes = await fetch(`${BASE_URL}settings/100/classes/`)
    const classList = await classListRes.json()

    const examTermListRes = await fetch(`${BASE_URL}talimat/100/exam-term/`)
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
    return(
        <Layout>
            { page }
        </Layout>
    )
};

