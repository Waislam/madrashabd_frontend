import React, { useState, useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";


// components
import Layout from '../../layouts/Layout';
import Admission from "../../components/Admission/Admission";
import api from "../api/api";


const AdmissionPage = (props) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    return (
        <div>
            <Admission
                session={session}
                deapartments={props.deapartments}
                classes={props.classes}
                groups={props.groups}
                shifts={props.shifts}
                session_year={props.session_year}
            />
        </div>
    )
};

export const getServerSideProps = async ({ req }) => {

    const session = await getSession({ req })
    const madrasha_id = session?.user?.madrasha_id
    const madrasha_slug = session?.user?.madrasha_slug

    const deparmentList = await api.get(`/settings/${madrasha_slug}/department/`);
    const deapartments = deparmentList.data

    const classList = await api.get(`/settings/${madrasha_slug}/classes/`);
    const classes = classList.data

    const classGroupList = await api.get(`/settings/${madrasha_slug}/group/`);
    const groups = classGroupList.data

    const classShiftList = await api.get(`/settings/${madrasha_slug}/shift/`);
    const shifts = classShiftList.data

    const sessionYears = await api.get(`/settings/${madrasha_slug}/session/`);
    const session_year = sessionYears.data

    return {
        props: {
            deapartments,
            classes,
            groups,
            shifts,
            session_year
        }
    }

}

export default AdmissionPage;


AdmissionPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};