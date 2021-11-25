import React, { useState } from "react";
import { AiFillNotification } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import '../Home/Home.css';


function Home() {
    const [isSearch, setIsSearch] = useState(false);
    const [productSearch, setProductSearch] = useState([]);

    function onSearchBtn(productSearch) {
        setProductSearch(productSearch);
        setIsSearch(true);
    }

    return (
        <div className="app__container">
            <div className="infomation">
                <div className="h2"><AiFillNotification /> THÔNG TIN - THÔNG BÁO <br /></div>
                <h1> Ngày 20/10/2021</h1>
                <TiTick /> Thư viện tạm thời đóng cửa ngày 21/10/2021 hoạt động lại <br />
                <h1> Ngày 06/10/2021</h1>
                <TiTick /> Thay đổi giờ làm việc <br />
                <TiTick /> Sau 14h00 ngày 06/10/2021, thư viện đóng cửa để dọn vệ sinh

            </div>

        </div>
    );
}

export default Home;