import { InputPicture } from "../inputPicture/inputPicture";
import { Modal } from "../modal/Modal";
import { ViewPhotos } from "../viewPhotos/ViewPhotos";
import "./main.scss";
import { SelectLayout } from "../selectLayout/SelectLayout";
import { useState } from "react";

export const Main = () =>{
    const [layoutStyle, setLayoutStyle] = useState(1);

    return(
        <div className="container">
            
        <Modal>
            {<InputPicture/>}
        </Modal>
        <SelectLayout onSelect={setLayoutStyle}/>
        <ViewPhotos layout={layoutStyle}/>
       
       
   </div>
    )
}