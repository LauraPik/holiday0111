import { useState } from "react";
import * as service from "../../services/TimesCrudServices";
import { useEffect } from 'react';
import './photo.scss'
import { useParams } from "react-router-dom";

const Photo = (props) => {
  const [modalTargetName, setModalTargetName] = useState("modalImg-"+props.id);
  const dd = "#";

  console.log(modalTargetName);


  return (
    <div className="card col-6" >
      <img src={props.picture} name="picture" className="card-img-top" alt={props.title} data-bs-toggle="modal" data-bs-target={dd+modalTargetName} />

      {/* {Modal} */}
      <div className='modal fade' id={modalTargetName} tabIndex='-1' aria-hidden="true">
        <div className="modal-dialog" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'black', opacity: '0.8' }}>
          <div className="modal-content" style={{ background: '#fff' }}>
            <div className="modal-body">
              <img src={props.picture}  alt={props.title} />
              <button type="button" className='btn-close' data-bs-dismiss="modal" aria-label='Close'></button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Photo;
