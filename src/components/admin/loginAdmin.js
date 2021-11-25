import axios from "axios";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function loginAdmin() {
    let history = useHistory();
    axios
        .post("http://localhost:8080/authenticate", {
        })

        .then((res) => {
            if (res.data.role === 'admin') {
                localStorage.setItem("token", res.data.role);
                history.push("/home");
            }
            else {

            };
        })

        .catch((error) => {
            console.log(error);
        });
}

export default loginAdmin;