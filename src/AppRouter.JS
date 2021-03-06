/*import React from "react";
import { BrowerRouter as Router, Link, Route, Switch } from "react-router-dom";


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/admin" render={() => {
                    return localStorage.getItem("accessToken") ? <Admin /> : <Redirect to="/" />
                }}>
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

function Admin() {
    let history = useHistory()
    let logout = () => {
        localStorage.setItem("accessToken")
        history.replace("/")
    }
    return (
        <div>
            <h2> Admin </h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

function Login() {
    let history = useHistory()
    let login = () => {
        localStorage.setItem("accessToken", true)
        history.replace("/admin")
    }
    return <div>
        <h2>Login</h2>
        <button onClick={login}>Login</button>
    </div>
}*/