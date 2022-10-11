import {useEffect, useState} from 'react';
import api from '../api/api'
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

const library = () => {

    const router = useRouter()

    const [showModal, setShowModal] = useState(false);
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
        await axios.post(`http://192.168.0.108:8087/library/100/`, data)
        setShowModal(false) // it should be like router.push('/library') but not working

    }


    useEffect(() => {
        getBooks()

    }, []);


    const handleModalShow = () => {
        setShowModal(true)
    }

    const update = (id) => {
        console.log('id: ', id)
        axios.get(`http://192.168.0.108:8087/library/detail/2/`)
            .then((response) => {
                const data = response.data
                console.log(data)

                setUpdateData(
                    data
                )
            })
        setShowModal(true)

    };

    console.log(updateData)


    return (
        <>
            <Booklist
                books={books}
                showmodal={handleModalShow}
                idshow={update}
            />
            <BookListModal shown={showModal} close={() => setShowModal(false)} onChange={handleOnChange}
                           post={updateData} submit={addBookHandle}>

            </BookListModal>


            <Button variant="primary" onClick={() => setLibraryBookUpdateModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <LibraryBookUpdateModal
                show={libraryBookUpdateModalShow}
                onHide={() => setLibraryBookUpdateModalShow(false)}
            />
        </>
    )
};


export default library;


library.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};