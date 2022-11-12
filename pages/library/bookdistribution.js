import {useState, useEffect} from 'react';
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

// component for Library
import BookDist from '../../components/Library/BookDistributionList'
import DeleteAlertModal from '../../components/Library/DeleteAlertModal'

import Layout from '../../layouts/Layout';
import api from "../api/api";


const BookDistribution = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [isLoading, setLoading] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [bookDistribution, setBookDistribution] = useState({});
    const [searchBookDistribution, setSearchBookDistribution] = useState('');

    const [deleteAlert, setDeleteAlert] = useState(false);
    const [deleteID, setDeleteID] = useState('');
    const [bookID, setBookID] = useState('');
    const [bookName, setBookName] = useState('');


    const handleModalShow = () => {
        setShowModal(true)
    };

    const getBookDistribution = async () => {
        const list = await api.get(`library/${session.user?.madrasha_slug}/book-distribution/?search=${searchBookDistribution && searchBookDistribution}`);
        const data = list.data;
        setBookDistribution(data);
        setLoading(false);
    };

    useEffect(() => {
        getBookDistribution()
    }, []);


    // Handle Search
    const handleSearchBtn = () => {
        getBookDistribution()
    };

    // Handle Delete
    const handleDelete = (distributionID, bookID, bookName) => {
        setDeleteID(distributionID);
        setBookID(bookID);
        setBookName(bookName);
        setDeleteAlert(true);


    };


    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (bookDistribution) {
        return (
            <>
                <BookDist
                    showmodal={handleModalShow}
                    shown={showModal}
                    bookDistribution={bookDistribution}
                    setSearchBookDistribution={setSearchBookDistribution}
                    handleSearchBtn={handleSearchBtn}
                    handleDelete={handleDelete}

                />
                <DeleteAlertModal
                    show={deleteAlert}
                    onHide={() => setDeleteAlert(false)}
                    deleteID={deleteID}
                    bookID={bookID}
                    bookName={bookName}
                />
            </>
        )
    }
    else {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-5">
                            <p className='text-center'>
                                No Book Distribution Information Found
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

};


export default BookDistribution;


BookDistribution.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};