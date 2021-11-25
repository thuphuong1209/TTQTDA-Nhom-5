import axios from "axios";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Login.css";


function Login() {
    let history = useHistory();
    const [username, setUser] = useState({ username: "", password: "" });
    const [details, setDetails] = useState({ username: "", password: "" });
    /*const Logout = () => {
        setUser({ username: "", password: "" });
    }*/
    const handlerOnLogin = () => {
        const passwordDB = window.btoa(details.username + ":" + details.password);
        axios
            .post("http://localhost:8080/authenticate", {
                username: details.username,
                password: passwordDB
            })
            .then((res) => {
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("name", res.data.name);
                    localStorage.setItem("flag", "true");
                    history.push("/home");
                }
            })

            .catch((error) => {
                console.log(error);
            });
    };

    const SignUp = () => {
        history.push("/signUp");
    }

    return (
        <>

            <div> <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_Kinh_t%E1%BA%BF_%C4%90%C3%A0_N%E1%BA%B5ng.jpg"
                width="200" height="200" />
            </div>
            <form >
                <div className="form-inner">
                    <h2>HỆ THỐNG QUẢN LÍ THƯ VIỆN</h2>
                    <div className="login">
                        <label htmlFor="username">Tài khoản: </label>
                        <input type="username" name="username" id="username"
                            onChange={e => setDetails({ ...details, username: e.target.value })}
                            value={details.username}
                        />
                    </div>
                    <div className="login">
                        <label htmlFor="password">Mật khẩu: </label>
                        <input type="password" name="password" id="password"
                            onChange={e => setDetails({ ...details, password: e.target.value })}
                            value={details.password}
                        />
                    </div>
                    <input onClick={handlerOnLogin} type="button" value="Đăng nhập" />
                    <div>
                        <label className="menu_items" onClick={SignUp}>Đăng kí</label>
                    </div>

                </div>
            </form>
        </>
    );
};

export default Login;