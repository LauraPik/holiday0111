import Photo from '../../photo/Photo';
import './layout1.scss';

export const Layout1 = ({ photos })=> {
    console.log(photos);
    return(
       
            <div className="row row--layoutOne">
            { photos.map((photo)=>{
                        return(<Photo 
                        key={photo.id}
                        number = {photo.number}
                        id = {photo.id}
                        title= {photo.title}
                        picture ={photo.picture}
                        
                        />)
                    })}
            </div>
       
    );

}

