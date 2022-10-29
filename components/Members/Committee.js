import styles from "./Members.module.css";
import MemberSideMenu from "./MembersSideMenu";

const CommitteeMembers = ({committee, handleCommitteeModal}) => {
    return (
        <>
            <section className={styles.settingSection}>
                <div className="container-fluid">
                    <div className="row">
                        <MemberSideMenu/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="department-body">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.department}>
                                            <div className="row">
                                                <div className="col col-md-6 mt-3">
                                                    <h2><u>Committee Members</u></h2>
                                                </div>
                                                <div className="col col-md-6">
                                                    <button
                                                        type="button"
                                                        className={`${styles.defaultBtn} float-end`}
                                                        onClick={()=>handleCommitteeModal()}
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="books-table mt-3">
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Member Name</th>
                                                            <th scope="col">Podobi</th>
                                                            <th scope="col">Phone</th>
                                                            <th scope="col" className="text-center">Edit</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            committee.results?.map((data) => (
                                                                <tr key={data.id}>
                                                                    <th scope="row">2</th>
                                                                    <td className="text-sm">{data?.member_name}</td>
                                                                    <td className="text-sm">{data?.member_designation}</td>
                                                                    <td className="text-sm">{data?.phone_number}</td>
                                                                    <td className="p-0">
                                                                        <button type="button"
                                                                                className={`${styles.editButton} float-md-end`}>Edit
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommitteeMembers;