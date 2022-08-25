import React from "react";

// StudentList Component
import StudentList from "../../components/Students/StudentList";

const index = ({post}) => {

    return (
        <>
            <StudentList post={post}  />
        </>
    )
};

export default index;

