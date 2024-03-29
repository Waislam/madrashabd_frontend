import axios from "axios";
import api, {BASE_URL} from "../../pages/api/api"
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

// Setting Component
import Books from "../../components/Setting/Books"
import Layout from "../../components/Layout/Layout";
//Modals import
import BookSettingUpdateModal from "../../components/Setting/Modals/BookSettingUpdateModal"


const BooksPage = () => {

    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    const [showPutForm, setShowPutForm] = useState(false);
    const [bookSettingOldData, setBookSettingOldData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [departmentList, setDepartmentList] = useState(null);
    const [classList, setClassList] = useState(null);

    //get class and department list
    const getDepartmentList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/${session?.user?.madrasha_slug}/department/`);
        const departments = list.data;
        setDepartmentList(departments)
    };
    const getClassList = async () => {
        const list = await axios.get(`${BASE_URL}/settings/${session?.user?.madrasha_slug}/classes/`);
        const classes = list.data;
        setClassList(classes)

    };

    useEffect(() => {
        getDepartmentList();
        getClassList()
    }, []);

    //handle put request
    const handlePutRequest = async (e, bookId) => {
        setLoader(true);
        e.preventDefault();
        const list = await axios.get(`${BASE_URL}/settings/books/detail/${bookId}/`);
        const bookSettingData = list.data;
        setBookSettingOldData(bookSettingData);
        setLoader(false);
        setShowPutForm(true)
    };

    return (
        <>
            <Books
                handlePutRequest={handlePutRequest}
                departmentList={departmentList}
                classList={classList}
            />

            {loader ? <h1></h1> :
                <BookSettingUpdateModal
                    show={showPutForm}
                    onHide={() => setShowPutForm(false)}
                    booksettingolddata={bookSettingOldData}
                    departmentList={departmentList}
                    classList={classList}
                >
                </BookSettingUpdateModal>
            }
        </>
    )
}

export default BooksPage;

BooksPage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}