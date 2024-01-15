import * as service from "../../services/TimesCrudServices";
import { useState, useEffect } from 'react';
import Photo from "../photo/Photo";
import './viewPhotos.scss'

export const ViewPhotos = ()=>{
    const [photo, setPhotos] = useState([]);
    useEffect(()=>{
        service.getAllPhotos(phot =>{
            setPhotos(phot)
        })

    }, [])

    return(
        <div className="container">
            
            
        <div className="row">
        { photo.map((photo)=>{
                    return(<Photo 
                    key={photo.id}
                    id = {photo.id}
                    title= {photo.title}
                    picture ={photo.picture}
                    
                    />)
                })}
        </div>

        
            
    </div>
    )

}

