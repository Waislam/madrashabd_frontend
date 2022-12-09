import React from 'react';
import {useSession} from "next-auth/react"

const PrintBanner = ({data}) => {
    const {data: session} = useSession();


    return (
        <>
            <div className="print-banner">
                <div className="text-center">
                    <h5 className="text-capitalize">{session?.user?.madrasha_name}</h5>
                    <p>{data}</p>
                    <hr/>
                </div>
            </div>
        </>
    )
};

export default PrintBanner;