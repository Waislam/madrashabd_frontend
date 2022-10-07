import { useEffect, useState} from 'react';
import api from '../api/api'


// component for Library
import Booklist from '../../components/Library/BookList'
import Layout from '../../layouts/Layout';
// import modal file
import BookListModal from '../../components/Library/BookListModal'

const library = () => {
    const [showModal, setShowModal] = useState(false);
    const [books, setBooks] = useState(null);

    const getBooks = async () => {
        // setLoading(true);
        const list = await api.get(`library/`)
        const data = list.data
        setBooks(data)      
    };

    // Post book from here
    const addBook= async () => {
        const book = await api.post(`library/`, {
            "madrasha": 1,
            "number": "4506",
            "name": "new kitab 222",
            "part": "2",
            "category": "nesabi",
            "book_for_class": "kafia",
            "translator": null,
            "publication": "islamic publication",
            "original_writer": "lekhok",
            "language": "Bangla"
          })
        const data = list.data
        setBooks(data)
    }


    useEffect(()=>{
        getBooks()
    }, []);


    const handleModalShow=()=>{
        setShowModal(true)
    }

    const handlePostRequest=()=>{
        addBook()
    }


    return (
        <>
            <Booklist
                books={books}
                showmodal={handleModalShow}
            />
            <BookListModal  shown={showModal} close={()=>setShowModal(false)} addBook={handlePostRequest} book={books}>

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