import { Link } from 'react-router-dom';
import Register from '../register/Register';
import User from '../user/User';
import { Main } from '../main/Main';
import "./header.scss"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import { useState, useEffect } from "react";

export const Header = ()=>{
    const [user, loading, error] = useAuthState(auth);
 

    return(
        <>
        {user&&
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container one">
        <a href="" className="navbar-brand">Holiday photos</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <User/>

        </div>
        

        
        </div>
    </nav>
        }
        </>

    )
}