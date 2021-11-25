import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Genres } from "../Book/Genres";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Book.css";
import Search from "../Header/Search/Search";

export default function Book() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/book").then(res => {
        setData(res.data);
        console.log(res.data);
      })

  }, []);

  return (

    <div className="container__book">

      <Genres />
      <div className="card">
        {data.map((item) => (
          <Link to={`/details/${item.bookId}`} key={item.bookId}>
            <div className="card__item">
              <div className="card__img">
                <img src={item.url} alt="" />
              </div>
              <div className="card__info">
                <h2>{item.name}</h2> <></> <span>X</span>
                <h2>Tác giả: {item.author}</h2>
                <h2>Số lượng: {item.quantity}</h2>
                <h2>Loại: {item.type}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}