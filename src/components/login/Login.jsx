import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithEmailAndPassword } from "../../services/AuthServices";
import "./login.scss"



export const Login = () =>{
    const [credentials, setCredentials ] = useState({
        email:'',
        password:''
    })

    const navigate = useNavigate();


    const [user, loading, error] = useAuthState(auth);


    const handleChange = (e)=>{
        const value = e.target.value;
        setCredentials({
            ...credentials,
            [e.target.name]:value
        })

}
useEffect(()=>{
    if(loading) return;
    if(user) navigate('/main')
}, [user, loading])


    const submitHandler = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(credentials.email, credentials.password)
    
    
    }

    return(
        <>
        
        <form onSubmit={submitHandler}>
        
        <div className="form login-form text-center" >
        <h2 className="m-3 text-center header">Prisijunkite</h2>
            <div className="mb-3">
                <div className="mb-3 login-form--email">
                
                    <input type="email" name="email" className="form-control" placeholder="El.pastas" onChange={handleChange}/><svg className="login-form--userIcon bi bi-person-lock" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
                </svg>
                </div>
            </div>
            <div className="mb-3 login-form--password">
                <input type="password" className="form-control" name="password" placeholder="Slaptazodis" onChange={handleChange} /><svg className="login-form--lockIcon bi bi-lock" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                </svg>
            </div>
            <div className="mb-3 login-form--button"><button type="submit">Prisijungti</button></div>
            <div className="mb-3 login-form--register">
                <p>Neturite paskyros? <Link to="/register">Registruokitės</Link></p>
            </div>
            <div className="mb-3 login-form--passwordReset">
                <p>Nepavyksta prisijungti?<Link to="/password-reset"> Priminti slaptazodį</Link></p>
            </div>
        </div>
        </form>

        </>
    )
}