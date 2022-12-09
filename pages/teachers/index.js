import React, { useEffect, useState } from "react";

// TeacherList Component
import TeacherLists from "../../components/Teachers/TeacherLists";
import Layout from '../../layouts/Layout';

// api
import api, { BASE_URL } from '../api/api'
import { getSession, useSession } from "next-auth/react";

const Index = (props) => {

    const { data: session } = useSession()

    return (
        <>
            <div>
                <TeacherLists
                    teachers={props.teacher_list}
                />
            </div>
        </>
    )
};

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    const madrasha_slug = session?.user?.madrasha_slug;

    // Fetch data from external API
    const res = await api.get(`/teachers/${madrasha_slug}/`);
    const teacher_list = await res.data;

    // Pass data to the page via props
    return {
        props: {
            teacher_list,
        }
    }
}


export default Index;


Index.getLayout = (page) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
};

