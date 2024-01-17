import * as service from "../../services/TimesCrudServices";
import { useState, useEffect } from 'react';
import Photo from "../photo/Photo";
import { auth } from "../../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { Layout0 } from "../layout/layout0/Layout0";
import { Layout1 } from "../layout/layout1/Layout1";
import { Layout2 } from "../layout/layout2/Layout2";
import { Layout3 } from "../layout/layout3/Layout3";
import { Layout4 } from "../layout/layout4/Layout4";
import { Layout5 } from "../layout/layout5/Layout5";
import { Layout6 } from "../layout/layout6/Layout6";
import { Layout7 } from "../layout/layout7/Layout7";
import { Layout8 } from "../layout/layout8/Layout8";

export const ViewPhotos = ({ layout })=>{
    const [photo, setPhotos] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(loading) return;
        if(!user) navigate("/");
        service.getAllPhotos(phot =>{
            setPhotos(phot)
        }, user)

    }, [user, loading])

    console.log(user);

    return(
        <div className="container">
            {/* {layout} */}

            {(() => {
                switch (layout) {
                case 0:   
                    return <Layout0 photos={photo} />;
                case 1: 
                    return <Layout1 photos={photo} />;
                default:
                    return <Layout1 photos={photo} />;
                case 2: 
                    return <Layout2 photos={photo} />;
                case 3: 
                    return <Layout3 photos={photo} />;
                case 4: 
                    return <Layout4 photos={photo} />;
                case 5: 
                    return <Layout5 photos={photo} />;
                case 6: 
                    return <Layout6 photos={photo} />;
                case 7: 
                    return <Layout7 photos={photo} />;
                case 8: 
                    return <Layout8 photos={photo} />;
                }
                
                
            })()}
            
        </div>
    );

}

