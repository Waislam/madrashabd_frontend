import {useEffect, useState} from 'react';
import api, {BASE_URL} from '../api/api'
import axios from 'axios';
import {useRouter} from 'next/router';


// component for Library
import Booklist from '../../components/Library/BookList'
import Layout from '../../layouts/Layout';
// import modal file
import BookListModal from '../../components/Library/BookListModal'
import LibraryBookUpdateModal from "../../components/Library/LibraryBookUpdateModal";
import { set } from 'react-hook-form';

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


const library = () => {

    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [loader, setLoader] = useState(true);
    const [library, setLibrary] = useState({});
    const [libraryBookUpdateModalShow, setLibraryBookUpdateModalShow] = useState(false);
    const [books, setBooks] = useState(null);


    const getBooks = async () => {
        // setLoading(true);
        const list = await api.get(`library/100/`)
        const data = list.data
        setBooks(data)
    };
    

    useEffect(() => {
        getBooks()
    }, []);



    const handleModalShow = () => {
        setShowModal(true)
    }

    const handleModalClose=(event)=>{
        // setPostData(updateData)
        setShowModal(false)
    }

    const handleBookUpdate = (book_id) => {
        setLoader(true)
        axios.get(`${BASE_URL}/library/detail/${book_id}/`)
            .then((response) => {
                const data = response.data.data
                setLibrary(data)
                setLoader(false)
            })
        setLibraryBookUpdateModalShow(true)
    };


    return (
        <>
            <Booklist
                books={books}
                libraryBookUpdateModalShow={libraryBookUpdateModalShow}
                handleBookUpdate={handleBookUpdate}
                addBookModalShow={handleModalShow}
            />

            <BookListModal
                shown={showModal}
                close={handleModalClose}
            >

            </BookListModal>


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

             {/* For test  data */}
        </>
    )
};


export default library;


library.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};