import styles from "./Members.module.css";
import MemberSideMenu from "./MembersSideMenu";


const OtherMembers = ({otherMember, handleAddOtherMemberModal, handleUpdateOtherMemberModal, handleDeleteOtherMemberModal}) => {

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
                                                <div className="col-md-6 mt-3">
                                                    <h2><u>Other Members</u></h2>
                                                </div>
                                                <div className="col-md-6">
                                                    <button
                                                        type="button"
                                                        className={`${styles.defaultBtn} float-end`}
                                                        onClick={()=>handleAddOtherMemberModal()}
                                                    >Add
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
                                                            <th scope="col">Address</th>
                                                            <th scope="col">Phone</th>
                                                            <th scope="col" className="text-center">Edit</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            otherMember?.map((data, index) => (
                                                                <tr key={data.id}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td className="text-sm">{data?.member_name}</td>
                                                                    <td className="text-sm">{data?.address}</td>
                                                                    <td className="text-sm">{data?.phone_number}</td>
                                                                    <td className="text-center">
                                                                        <button
                                                                            type="button"
                                                                            className={`${styles.editButton}`}
                                                                            onClick={(e)=>handleUpdateOtherMemberModal(e, data.id)}
                                                                        >
                                                                            Edit
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-danger"
                                                                            onClick={()=>handleDeleteOtherMemberModal(data.id)}
                                                                        >Delete
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

export default OtherMembers;