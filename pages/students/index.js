import React from "react";

// StudentList Component
import StudentList from "../../components/Students/StudentList";
import Layout from "../../components/Layout/Layout";
import styles from "../../components/Students/StudentList.module.css";
import Image from "next/image";
import studentLogo from "../../public/assets/admission/students.png";
import Link from "next/link";
import students from "../../public/assets/admission/students.png";

// const Index = () => {
//
//     return (
//         <>
//             <StudentList/>
//         </>
//     )
// };
//
//
// export default Index;

const Students = () => {
    return (
      <>
          <StudentList />
      </>
    )
}

export default Students

Students.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
}

