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


const Library = () => {
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

    const [searchName, setSearchName] = useState('');
    const [searchNumber, setSearchNumber] = useState('');
    const [libraryListPageNum, setLibraryListPageNum] = useState(1);

    const [showBookDistributionModal, setShowBookDistributionModal] = useState(false);
    const [bookID, setBookID] = useState('');


    const getBooks = async () => {
        const list = await api.get(`library/${session.user?.madrasha_slug}/?name=${searchName && searchName}&search=${searchNumber && searchNumber}&page=${libraryListPageNum}`);
        const data = list.data;
        setBooks(data)
    };


    useEffect(() => {
        getBooks()
    }, [libraryListPageNum]);


    // SearchName
    const handleSearchName = () => {
        getBooks()
    };

    const handleSearchNumber = () => {
        getBooks()
    };


    // Pagination
    const handleLibraryListPageNum = () => {
        setLibraryListPageNum(libraryListPageNum + 1)
    };

    const nextPage = () => {
        setLibraryListPageNum(libraryListPageNum + 1)
    };

    const prevPage = () => {
        setLibraryListPageNum(libraryListPageNum - 1)
    };


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

    return (
        <>
            <Booklist
                books={books}
                libraryBookUpdateModalShow={libraryBookUpdateModalShow}
                handleBookUpdate={handleBookUpdate}
                addBookModalShow={handleModalShow}

                libraryListPageNum={libraryListPageNum}
                handleLibraryListPageNum={handleLibraryListPageNum}
                nextPage={nextPage}
                prevPage={prevPage}
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
};




export default Library;


Library.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};