import {useEffect, useState} from 'react';
import api, {BASE_URL} from '../api/api'
import axios from 'axios';
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";


// component for Library
import Booklist from '../../components/Library/BookList'
import Layout from '../../layouts/Layout';
// import modal file
import BookListModal from '../../components/Library/BookListModal'
import LibraryBookUpdateModal from "../../components/Library/LibraryBookUpdateModal";
import AssignBookDistributionModal from "../../components/Library/AssignBookDistributionModal";


const Library = (props) => {
    const router = useRouter();
    const {data: session, status} = getSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loader, setLoader] = useState(true);
    const [library, setLibrary] = useState({});
    const [libraryBookUpdateModalShow, setLibraryBookUpdateModalShow] = useState(false);
    const [books, setBooks] = useState(null);

    const [showBookDistributionModal, setShowBookDistributionModal] = useState(false);
    const [bookID, setBookID] = useState('');


    const handleModalShow = () => {
        setShowModal(true)
    };

    const handleModalClose = (event) => {
        setShowModal(false)
    };

    const handleBookUpdate = (book_id) => {
        setLoader(true);
        axios.get(`${BASE_URL}/library/detail/${book_id}/`)
            .then((response) => {
                const data = response.data.data;
                setLibrary(data);
                setLoader(false)
            });
        setLibraryBookUpdateModalShow(true)
    };

    // AssignBookDistributionModal

    const assignBookDistributionModal = (book_id) => {
        setBookID(book_id);
        setShowBookDistributionModal(true)
    };


    if (props.library_list) {
        return (
            <>
                <Booklist
                    books={props.library_list.results}
                    libraryBookUpdateModalShow={libraryBookUpdateModalShow}
                    handleBookUpdate={handleBookUpdate}
                    addBookModalShow={handleModalShow}
                    assignBookDistributionModal={assignBookDistributionModal}
                />

                <BookListModal
                    session={session}
                    shown={showModal}
                    close={handleModalClose}
                >

                </BookListModal>

                <AssignBookDistributionModal
                    show={showBookDistributionModal}
                    onHide={() => setShowBookDistributionModal(false)}
                    bookID={bookID}
                />

                {
                    loader ?
                        <h1></h1>
                        :
                        <LibraryBookUpdateModal
                            show={libraryBookUpdateModalShow}
                            onHide={() => setLibraryBookUpdateModalShow(false)}
                            library={library}
                        />
                }

            </>
        )
    }
    else {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">No Data Found</span>
                </div>
            </div>
        )
    }


};


export async function getServerSideProps({req}) {

    const session_data = await getSession({req});
    const res = await api.get(`/library/${session_data.user?.madrasha_slug}/`);
    const library_list = await res.data;

    return {
        props: {
            library_list,
            session_data
        }
    }
}


export default Library;


Library.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};