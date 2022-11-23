import React, {useState, useEffect} from "react";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import api, {BASE_URL} from '../api/api'
import axios from "axios";

// StudentList Component
import OtherIncome from "../../components/Account/OtherIncome";
import Layout from "../../components/Layout/Layout";

//post and put modal import
import AddOtherIncomeModal from "../../components/Account/Modals/AddOtherIncomeModal"
import UpdateOtherIncomeModal from "../../components/Account/Modals/UpdateOtherIncomeModal"


const OtherIncomePage = (props) => {
    const router = useRouter();
    const {data: session, status} = useSession();
    const madrasha_slug = session?.user?.madrasha_slug

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [otherIncome, setOtherIncome] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const [postRequestModal, setPostRequestModal] = useState(false);

    const [transactioncategoryList, setTransactioncategoryList] = useState(null);
    const [transactionCaterory, setTransactionCaterory] = useState('');
    const [transactionSubCaterory, setTransactionSubCaterory] = useState('');

    const [putRequestModal, setPutRequestModal] = useState(false);
    const [singleObjectData, setSingleObjectData] = useState({});

    // get income category, subCategory
    const getTransactioCategory = async () => {
        const list = await axios.get(`${BASE_URL}/transactions/category/`);
        const category = list.data;
        setTransactioncategoryList(category)
    };

    const getTransactioSubCategory = async () => {
        const list = await axios.get(`${BASE_URL}/transactions/sub-category/${transactionCaterory}/`);
        const subCategory = list.data;
        setTransactionSubCaterory(subCategory)
    };

    useEffect(() => {
        getTransactioCategory()
    }, []);

    useEffect(() => {
        getTransactioSubCategory()
    }, [transactionCaterory]);

    //handle Post request Modals open
    const openPostRequestModal = (e) => {
        e.preventDefault();
        setPostRequestModal(true)
    };

    //handle put request modal open and pass id
    const passOtherIncomeId = async (income_id) => {
        setIsLoading(true);
        const list = await axios.get(`${BASE_URL}/transactions/other-income/${income_id}/`);
        const data = list.data;
        setSingleObjectData(data.data);
        setIsLoading(false);
        setPutRequestModal(true)
    };

    return (
        <>
            <OtherIncome
                otherIncomeList={props.other_income_list.results}
                openPostRequestModal={openPostRequestModal}
                passOtherIncomeId={passOtherIncomeId}

            />
            <AddOtherIncomeModal
                session={session}
                show={postRequestModal}
                onHide={() => setPostRequestModal(false)}
                incomecategorylist={transactioncategoryList}
                setTransactionCategory={setTransactionCaterory}
                transactionSubCategory={transactionSubCaterory}
                madrasha_slug={madrasha_slug}
            >
            </AddOtherIncomeModal>
            {isloading ? <h1></h1> :
                <UpdateOtherIncomeModal
                    show={putRequestModal}
                    onHide={() => setPutRequestModal(false)}
                    incomecategorylist={transactioncategoryList}
                    setTransactionCategory={setTransactionCaterory}
                    transactionSubCategory={transactionSubCaterory}
                    singleobjectdata={singleObjectData}
                >
                </UpdateOtherIncomeModal>
            }
        </>
    )
};


export async function getServerSideProps({req}) {

    const session_data = await getSession({req});
    const res = await api.get(`/transactions/${session_data.user?.madrasha_slug}/other-income/`);
    const other_income_list = await res.data;

    return {
        props: {
            other_income_list,
            session_data
        }
    }
}


export default OtherIncomePage;


OtherIncomePage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};