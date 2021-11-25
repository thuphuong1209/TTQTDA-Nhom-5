import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Genres } from "../Book/Genres";
import axios from "axios";
import "./Details.css";
import { FiShoppingCart } from "react-icons/fi";

export default function Details() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/book/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <div className="container__book">
      <Genres />
      <div className="details__book">
        <div className="card__item">
          <div className="card__img">
            <img src={data.url} alt="" />
            <FiShoppingCart size="1.7em" />
          </div>
          <div className="card__info">
            <h2>{data.name}</h2>
            <h2>Tác giả: {data.author}</h2>
            <h2>Số lượng: {data.quantity}</h2>
            <h2>Loại: Triết {data.type}</h2>
            <h2>Mô tả: </h2>
            <div className="detail">
              Nội dung cuốn sách gồm 3 phần:<br />
              Phần thứ nhất: Hồ Chí Minh về cán bộ và công tác cán bộ.<br />
              Phần thứ hai: Tư tưởng Hồ Chí Minh về cán bộ và công tác cán bộ.<br />
              Phần thứ ba: Vận dụng tư tưởng Hồ Chí Minh về cán bộ và công tác cán bộ trong giai đoạn hiện nay.
              Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức
              và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế
              nhập khẩu.
            </div>

          </div>
        </div>
      </div>
    </div >
  );
}
