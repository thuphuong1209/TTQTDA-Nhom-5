import React, { useState, useEffect } from "react";
import Navbar from "../Header/Navbar/Navbar";
import { AiOutlineUser } from "react-icons/ai";
import Logo from "../../img/logo.jfif"
import "./Header.css";
import Search from './Search/Search';
import axios from "axios";

function Header(props) {
  const [name, setName] = useState();
  useEffect(() => {
    if (localStorage.getItem("flag") === "true")
      setName(localStorage.getItem("name"));
    else
      setName("Đăng nhập");
  }, [])

  const [booksSearch, setBooksSearch] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/book").then(res => {
        setData(res.data);
        console.log(res.data);
      })


  }, []);
  function onSearch(value) {
    const foundBooksTemp = [];

    data.map(item => {
      /*if (item.name.includes(value)) {
        foundBooksTemp.push(item);
      }*/
      console.log(item.name);
    })

    //setBooksSearch(foundBooksTemp);
    //console.log(foundBooksTemp);
    //props.onSearchBtn(foundBooksTemp);
  }

  return (
    <div className="header">
      <div className="header__logo__title">
        <div className="header__logo">
          <img src={Logo} width="100" height="100" alt="logo" />
          <h1>
            ĐẠI HỌC ĐÀ NẴNG <br />
            TRƯỜNG ĐẠI HỌC KINH TẾ
          </h1>
        </div>

        <div className="account">
          <p>{name}</p>
          <AiOutlineUser size="1.5em" />
        </div>

      </div>
      <Navbar />
      <Search
        onSearch={onSearch}
      />


    </div>
  );
}
export default Header;