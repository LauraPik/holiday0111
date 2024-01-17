import Photo from '../../photo/Photo';
import './layout2.scss';

export const Layout2 = ({photos})=>{
    return(
    <div className="row row--layoutSecond">
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