import Photo from '../../photo/Photo';
import './layout5.scss';

export const Layout5 = ({photos})=>{
     
    return(
        <div className="row row-layoutFive">
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