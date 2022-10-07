import styles from './BookList.module.css'
import { useRouter } from 'next/router';

const modalpage=({shown, close})=>{


    const router = useRouter()
    return shown ? (
        <>
            <div className={styles.modalBody}>
                <div className={styles.modalContent}>
                <div className="card">
                    <div className="card-header">
                        <h1 className="text-center">Add New Book Here</h1>
                    </div>
                    <div className="card-body">
                         <form action="#" method="post">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Number</label>
                                    <input type="text" className="form-control" placeholder="Book Number"/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Name</label>
                                    <input type="text" className="form-control" placeholder="Book Name"/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book part</label>
                                    <input type="text" className="form-control" placeholder="Book part"/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Category</label>
                                    <div className="input-group">
                                        <select className="form-select">
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book for class</label>
                                    <input type="text" className="form-control" placeholder="class Name"/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Translator</label>
                                    <input type="text" className="form-control" placeholder="Book Translator"/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Publication</label>
                                    <input type="text" className="form-control" placeholder="Book Publication"/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Origianl writter</label>
                                    <input type="text" className="form-control" placeholder="Book writter"/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Language</label>
                                    <input type="text" className="form-control" placeholder="Book Language"/>
                                </div>
                                <div className="mt-3">
                                    <button type="submit" className={`${styles.defaultBtn}`}>Save</button>
                                    {/* <button type="submit" className={`${styles.defaultBtn} ms-3`} onClick={()=> router.push("/library")}>Cancel</button> */}
                                    <button type="submit" className={`${styles.defaultBtn} ms-3`} onClick={close}>Cancel</button>
                                </div>
                            </div>
                         </form>
                    </div>
                </div>
                </div>
            </div>
        </>
        
    ) : null;
}
 

export default modalpage;