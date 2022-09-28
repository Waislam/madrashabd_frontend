import { useState} from 'react';

// component for Library
import Booklist from '../../components/Library/BookList'
import Layout from '../../layouts/Layout';

const library = () => {
    const [showModal, setShowModal] = useState(false)

    const handleModalShow=()=>{
        setShowModal(true)
    }

    return (
        <>
            <Booklist
                showmodal={handleModalShow}
                shown={showModal}
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