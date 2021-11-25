import { Link } from "react-router-dom";

export const Genres = () => {
  return (
    <div className="option">
      <h3>Thể Loại</h3>
      <ul>
        <li>
          <Link to="/details/:id">Giáo trình</Link>
        </li>
        <li>
          <Link to="/details/:id">Tài liệu</Link>
        </li>
        <li>
          <Link to="/details/:id">Ngoại ngữ</Link>
        </li>
        <li>
          <Link to="/details/:id">Khác</Link>
        </li>
      </ul>
    </div>
  );
};