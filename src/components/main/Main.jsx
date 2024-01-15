import { InputPicture } from "../inputPicture/inputPicture"
import { Modal } from "../modal/Modal"
import { ViewPhotos } from "../viewPhotos/ViewPhotos"

export const Main = () =>{
    return(
        <div className="container">
            
        <Modal>
            {<InputPicture/>}
        </Modal>
        <ViewPhotos/>
       
       
   </div>
    )
}