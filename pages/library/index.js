import Layout from '../../layouts/Layout';

const library = () => {

    return (
        <div>
            <h3>Hello library</h3>
        </div>
    )
};


export default library;


library.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};