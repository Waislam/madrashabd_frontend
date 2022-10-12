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

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Library = () => {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false);
    const [loader, setLoader] = useState(true);
    const [library, setLibrary] = useState({});
    const [libraryBookUpdateModalShow, setLibraryBookUpdateModalShow] = useState(false);
    const [books, setBooks] = useState(null);
    const [postData, setPostData] = useState({
        madrasha: 1,
        number: "",
        name: "",
        part: "",
        category: "nesabi",
        book_for_class: "",
        translator: "",
        publication: "",
        original_writer: "",
        language: "mashuk vai"
    })


    const [updateData, setUpdateData] = useState({
        number: "",
        name: "",
        part: "",
        category: "nesabi",
        book_for_class: "",
        translator: "",
        publication: "",
        original_writer: "",
        language: ""
    })
    const [updateId, setUpdateId] = useState(1)


    const getBooks = async () => {
        // setLoading(true);
        const list = await api.get(`library/100/`)
        const data = list.data
        setBooks(data)
    };

    const handleOnChange = (event) => {
        const value = event.target.value
        setPostData({...postData, [event.target.name]: value})

    }


    // Post book from here
    const addBookHandle = async (event) => {
        event.preventDefault()
        const data = postData;
        await axios.post(`${BASE_URL}/library/100/`, data)
        setShowModal(false) // it should be like router.push('/library') but not working

    }


    useEffect(() => {
        getBooks().then(() => {

        })


    }, []);



    const handleModalShow = () => {
        setShowModal(true)
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


    const getLibrary = () => {
        setLoader(false)
        axios.get(`${BASE_URL}/library/detail/1/`)
            .then((response) => {
                const data = response.data
                // console.log(data)
                setLibrary(data.data)
                setLoader(false)
            })
    }


    return (
        <>
            <Booklist
                books={books}
                libraryBookUpdateModalShow={libraryBookUpdateModalShow}
                handleBookUpdate={handleBookUpdate}
            />

            <BookListModal
                shown={showModal}
                close={() => setShowModal(false)}
                onChange={handleOnChange}
                post={updateData} submit={addBookHandle}
            >

            </BookListModal>


            {
                loader ?
                    <h1>Loading</h1>
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


export default Library;


Library.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};