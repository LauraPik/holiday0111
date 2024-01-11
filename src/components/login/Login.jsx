import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithEmailAndPassword } from "../../services/AuthServices";


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
        <h2 className="m-3 text-center">Prisijunk</h2>
        <form onSubmit={submitHandler}>
        <div className="form" >
            <div className="mb-3">
                <div className="mb-3">
                    <input type="email" name="email" className="form-control" placeholder="El.pastas" onChange={handleChange}/>
                </div>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" name="password" placeholder="Slaptazodis" onChange={handleChange} />
            </div>
            <div className="mb-3"><button type="submit">Registruotis</button></div>
            <div className="mb-3">
                <p>Neturite paskyros ?<Link to="/register">Registruotis</Link></p>
            </div>
            <div className="mb-3">
                <p>Nepavyksta prisijungti ?<Link to="/password-reset">Atstatyti slaptazodi</Link></p>
            </div>
        </div>
        </form>

        </>
    )
}