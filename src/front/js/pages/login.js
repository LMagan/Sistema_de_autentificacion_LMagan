import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const handdlesubmmit = async(e) => {
        e.preventDefault()
        const response = await fetch(`${process.env.BACKEND_URL}/api/sing_in`,{
            method: "POST",
            body: JSON.stringify({
                email:email,
                password:password,
            }),
            headers: {
                "Content-Type":"application/json"
            }
        })
        const data = await response.json()
        console.log(data);
        if(response.ok){
            localStorage.setItem("token",data.access_token)
            navigate("/profile")
        }
    }

    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!!</h1>
            <form onSubmit={handdlesubmmit} >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Registrate</button>
            </form>
            <p>
                <img src={rigoImageUrl} />
            </p>
            <div className="alert alert-info">
                {store.message || "Loading message from the backend (make sure your python backend is running)..."}
            </div>
            <p>
                This boilerplate comes with lots of documentation:{" "}
                <a href="https://start.4geeksacademy.com/starters/react-flask">
                    Read documentation
                </a>
            </p>
        </div>
    );
};