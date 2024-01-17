import { useState } from "react";
import './selectLayout.scss';
import style1 from "./pictures/1.png";
import style2 from "./pictures/2.png";
import style3 from "./pictures/3.png";
import style4 from "./pictures/4.png";
import style5 from "./pictures/5.png";
import style6 from "./pictures/6.png";
import style7 from "./pictures/7.png";
import style8 from "./pictures/8.png";
import style9 from "./pictures/9.png"

export const SelectLayout = ({ onSelect }) =>{

    const [modal, setModal] = useState(false);

    const layout =[
        style1,
        style2,
        style3,
        style4,
        style5,
        style6,
        style7,
        style8,
        style9

    ]

    const toggleModal = () => {
    setModal(!modal);
  };

  const setLayoutOption = (i) => {
    toggleModal();
    onSelect(i);
  }

    return(
        <>
      <button onClick={toggleModal} className="bttn-modal">Pakeisti stilių</button>
      

      {modal && (
        <div className="modal show-modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-contents">

            <div className="modal-contents-header"><h1>Pakeisti stilių</h1></div>

          <div className="layout__images">
					{layout.map((layout, i) => (
						<img
							key={i}
							onClick={() => setLayoutOption(i)}
							src={layout}
							className="layout__img"
						/>
					))}
            </div>

            <button className="close-modal" onClick={toggleModal}>

            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="50" fill="currentColor" className="bi bi-x-circle text-danger" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
            </button>
          </div>
        </div>
      )}
      
    </>
        

    )
}

