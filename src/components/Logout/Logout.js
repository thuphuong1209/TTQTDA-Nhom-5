import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function Logout(props) {
    let history = useHistory()

    useEffect(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.setItem('flag', 'false');
        history.push("/");
    }, []);

    return (
        <div>
        </div>
    );
}

export default Logout;