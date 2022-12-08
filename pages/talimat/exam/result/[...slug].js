import React from "react";
import Layout from "../../../../components/Layout/Layout";
import {getSession} from "next-auth/react";
import api from "../../../api/api";

const ResultSheetPage = (props) => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="academicInfo text-center mb-4">
                            <h3 style={{fontWeight: "bold"}}>Madrash Name</h3>
                            <h5>Phone : +88 <span className="mx-2"/> E-mail : @gmail.com</h5>
                            <h6>Webite : ikhwanBD</h6>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <dl className="row">
                            <dt className="col-sm-6">
                                Name of Student
                            </dt>
                            <dd className="col-sm-6">
                                <span className="mx-2">:</span>
                                Sakib Al Hasan
                            </dd>
                            <dt className="col-sm-6">
                                Student ID
                            </dt>
                            <dd className="col-sm-6">
                                <span className="mx-2">:</span>
                                {props.subject_mark_list[0].student.student_id}

                            </dd>
                            <dt className="col-sm-6">
                                Student Roll
                            </dt>
                            <dd className="col-sm-6">
                                <span className="mx-2">:</span>
                                {props.subject_mark_list[0].student.student_roll_id}

                            </dd>
                        </dl>
                    </div>
                    <div className="col-md-6">
                        <dl className="row">
                            <dt className="col-sm-6">
                                Date
                            </dt>
                            <dd className="col-sm-6">
                                <span className="mx-2">:</span>
                                11-11-2022
                            </dd>
                            <dt className="col-sm-6">
                                Academic Session
                            </dt>
                            <dd className="col-sm-6">
                                <span className="mx-2">:</span>
                                {props.subject_mark_list[0].exam_year.actual_year}

                            </dd>
                            <dt className="col-sm-6">
                                Exam Term
                            </dt>
                            <dd className="col-sm-6">
                                <span className="mx-2">:</span>
                                {props.subject_mark_list[0].exam_term.term_name}
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                <tr className="text-center">
                                    <th scope="col">#</th>
                                    <th scope="col">Subject Name</th>
                                    <th scope="col">Marks</th>
                                    <th scope="col">Total marks</th>
                                    <th scope="col">Teacher</th>
                                </tr>
                                </thead>
                                <tbody>
                                {props.subject_mark_list.map((mark, index) => (
                                    <tr className="text-center" key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{mark?.subject?.name}</td>
                                        <td>{mark.mark}</td>
                                        <td>Total marks</td>
                                        <td>Sakib</td>
                                    </tr>

                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <p>Mohotami singnature and seal</p>
                        <p>Date : 11-11-2022</p>
                    </div>
                    <div className="col-md-6">
                        <div className="float-end">
                            <p>Talimat singnature and seal</p>
                            <p>Date : 11-11-2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export const getServerSideProps = async ({req, params}) => {
    const session_data = await getSession({req});
    const madrasha_slug = session_data?.user?.madrasha_slug;

    const subject_marks_response = await api.get(`/talimat/${params.slug}/subject-mark/`);
    const subject_mark_list = subject_marks_response.data;
    console.log("session_data", session_data);

    return {
        props: {
            subject_mark_list,
            session_data,
            madrasha_slug
        }
    }
};

export default ResultSheetPage;


ResultSheetPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

