import { useEffect, useState} from 'react';
import api from '../api/api'


// component for Library
import Booklist from '../../components/Library/BookList'
import Layout from '../../layouts/Layout';

const Library = () => {
    const [showModal, setShowModal] = useState(false);
    const [books, setBooks] = useState(null);

    const getBooks = async () => {
        // setLoading(true);
        const list = await api.get(`100/library/`)
        const data = list.data
        setBooks(data)      
    };


    useEffect(()=>{
        getBooks().then(() => {

        })
    }, []);


    const handleModalShow=()=>{
        setShowModal(true)
    }

    return (
        <>
            <Booklist
                showmodal={handleModalShow}
                shown={showModal}
                books={books}
            />
        </>
    )
};


export default Library;


Library.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};