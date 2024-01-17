import Photo from '../../photo/Photo';
import './layout7.scss';

export const Layout7 = ({photos})=>{
    return(
        <div className="row row-layoutSeven">
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