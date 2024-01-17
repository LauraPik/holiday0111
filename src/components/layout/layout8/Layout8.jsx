import Photo from '../../photo/Photo';
import './layout8.scss';

export const Layout8 = ({photos})=>{
    return(
        <div className="row row-layoutEight">
        { photos.map((photo, index)=>{
         return(<Photo 
         key={photo.id}
         number = {photo.number}
         id = {photo.id}
         title= {photo.title}
         picture ={photo.picture}
         isCircle={index % 2 === 0} // Check if the index is even to make it a circle             
          />)
             })
         }

         </div>
    )
}