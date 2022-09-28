import { useState} from 'react';

// component for Library
import BookDist from '../../components/Library/BookDistributionList'
import Layout from '../../layouts/Layout';

const BookDistribution = () => {
    const [showModal, setShowModal] = useState(false)

    const handleModalShow=()=>{
        setShowModal(true)
    }

    return (
        <>
            <BookDist
                showmodal={handleModalShow}
                shown={showModal}
            />
        </>
    )
};


export default BookDistribution;


BookDistribution.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};