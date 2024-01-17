import Photo from '../../photo/Photo';
import './layout3.scss';

export const Layout3 = ({photos})=>{
    return(
        <div>
        <div className="row-layoutThird">
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
        </div>
    )
}