import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, registerWithEmailAndPassword} from "../../services/AuthServices"
import "./register.scss"




export const Register = () =>{
    const navigate = useNavigate();

    const [userData, setUserData]= useState({
        name: '',
        email:'',
        password:'',
    })

    const [user, loading, error ] = useAuthState(auth);

    const handleChange = (e)=>{
        const value = e.target.value;
        setUserData({
            ...userData,
            [e.target.name]:value
        })

    }
    

    useEffect(()=>{
        if(loading) return;
        if(user) navigate('/Main')

    }, [user, loading])

    const submitHandler = (e)=>{
        e.preventDefault();
        registerWithEmailAndPassword(userData.name, userData.email, userData.password)

    }



    return(
        <>
        
        <form className="register-form" onSubmit={submitHandler}>
                <div className="mb-3">
                <h2 className="m-3 text-center header">Registruokis</h2>
                    <input type="text" className="form-control register-form--name" name="name" placeholder="Jusu vardas" onChange={handleChange}/>
                    <div className="mb-3">
                        <input type="email" name="email" className="form-control register-form--email" placeholder="El.pastas" onChange={handleChange}/>
                    </div>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control register-form--password" name="password" placeholder="Slaptazodis" onChange={handleChange}/>
                </div>

                <div className="mb-3 register-form--button"><button type="submit">Registruotis</button></div>

                <div className="mb-3 register-form--login">
                    <p>Turite paskyra?<Link to="/">Galite prisijungti</Link></p>
                </div>
        </form>
        </>
    )

}