import styles from './BookList.module.css'
import { useRouter } from 'next/router';

const modalpage=({show})=>{
    const router = useRouter()
    return show ? (
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
                                <div className="col-md-3 mb-3">
                                    <label className="mb-2">Student ID</label>
                                    <input type="text" className="form-control" placeholder="32165165"/>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label className="mb-2">Student Name</label>
                                    <input type="text" className="form-control" placeholder="Auto"/>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label className="mb-2">Student Class</label>
                                    <input type="text" className="form-control" placeholder="auto"/>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label className="mb-2">Contact</label>
                                    <input type="text" className="form-control" placeholder="auto"/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Number</label>
                                    <input type="text" className="form-control" placeholder="35461"/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Book Name</label>
                                    <input type="text" className="form-control" placeholder="Auto"/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="mb-2">Taken Date</label>
                                    <input
                                                                type="text"
                                                                name="date"
                                                                placeholder="date"
                                                                onChange={(e) => console.log(e.target.value)}
                                                                onFocus={(e) => (e.target.type = "date")}
                                                                onBlur={(e) => (e.target.type = "text")}
                                                                className="form-control"
                                                            />
                                </div>
                                <div className="mt-3">
                                    <button type="submit" className={`${styles.defaultBtn}`}>Save</button>
                                    <button type="submit" className={`${styles.defaultBtn} ms-3`} onClick={()=> router.push("/library/bookdistribution")}>Cancel</button>
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