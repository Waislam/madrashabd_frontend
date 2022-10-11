import { useEffect, useState } from 'react';
import api from '../api/api'
import axios from 'axios';
import { useRouter } from 'next/router';


// component for Library
import Booklist from '../../components/Library/BookList'
import Layout from '../../layouts/Layout';
// import modal file
import BookListModal from '../../components/Library/BookListModal'

const library = () => {

    const router = useRouter()

    const [showModal, setShowModal] = useState(false);
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
        language: ""
    })

    const [updateId, setUpdateId] = useState(1)


    const getBooks = async () => {
        // setLoading(true);
        const list = await axios.get(` http://127.0.0.1:8000/library/100/`)
        const data = list.data
        setBooks(data)
    };

    const handleOnChange = (event) => {
        event.preventDefault()
        event.stopPropagation();
        const value = event.target.value
        setPostData({ ...postData, [event.target.name]: value })

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
        axios.get(`http://127.0.0.1:8000/library/detail/${id}/`)
            .then((response) => {
                const data = response.data
                console.log('inside update',data)
                console.log('number before set:',data.data.id)

                // setPostData(prevValue =>())
                setPostData(data.data);

            })
        setShowModal(true)

    };

    console.log("after chaning data:", postData)

    return (
        <>
            <Booklist
                books={books}
                showmodal={handleModalShow}
                idshow={update}
            />
            <BookListModal shown={showModal} close={() => setShowModal(false)} onChange={handleOnChange} post={postData} submit={addBookHandle}>

            </BookListModal>
        </>
    )
};


export default library;


library.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};