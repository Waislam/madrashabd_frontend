import {useState, useEffect} from 'react';

// component for Library
import BookDist from '../../components/Library/BookDistributionList'
import Layout from '../../layouts/Layout';
import api from "../api/api";

const BookDistribution = () => {
    const [isLoading, setLoading] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [bookDistribution, setBookDistribution] = useState({});
    const [searchBookDistribution, setSearchBookDistribution] = useState('');

    const handleModalShow = () => {
        setShowModal(true)
    };

    const getBookDistribution = async () => {
        const list = await api.get(`library/100/book-distribution/?search=${searchBookDistribution && searchBookDistribution}`);
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