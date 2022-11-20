import styles from "./Setting.module.css";
import SettingSideMenu from "./SettingSideMenu";
import axios from "axios";
import api, {BASE_URL} from "../../pages/api/api"
import {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import {useForm} from "react-hook-form";

const ExamRule = () => {

    return (
        <>
            <section className={styles.settingSection}>
                <div className="container-fluid">
                    <div className="row">
                        <SettingSideMenu/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="department-body">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.department}>
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <h2><u>Exam Rules</u></h2>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className={`${styles.defaultBtn} float-end`}>Add</button>
                                                </div>
                                            </div>
                                            <div className="department-table mt-3">
                                                <h2 className="text-center">Exam Rule pending ....</h2>
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

export default ExamRule;