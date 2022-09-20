import Layout from '../../layouts/Layout';

const library = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center">Library is coming soon .....</h3>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default library;


library.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};