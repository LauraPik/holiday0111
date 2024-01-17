import Photo from '../../photo/Photo';
import './layout6.scss';

export const Layout6 = ({photos})=>{
    return(
        <div className="row row-layoutSix">
        { photos.map((photo)=>{
         return(<Photo 
         key={photo.id}
         number = {photo.number}
         id = {photo.id}
         title= {photo.title}
         picture ={photo.picture}          
          />)
             })
         }

         </div>
    )
}