import Photo from '../../photo/Photo';
import './layout4.scss';

export const Layout4 = ({photos})=>{
    return(
        
        <div className="row-layoutFour">
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
       
    )
}