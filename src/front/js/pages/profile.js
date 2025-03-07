import React, { useContext, useNavigate } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Profile = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate()
	const logout = () => {
		localStorage.removeItem("access_token");
	
		navigate("/login");
	}


    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!!</h1>
            <button className="btn btn-primary" onClick={logout}>logout</button>
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