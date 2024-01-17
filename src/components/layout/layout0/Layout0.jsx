import './layout0.scss';
import Photo from '../../photo/Photo';

export const Layout0 = ({ photos }) => {

    return(
        
            <>
                <div className="row-layoutZero">
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
            </>
            
    );

}

