import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Search.css';

function Search(props) {
    const [searchText, setSearchText] = useState('');
    function handleChange(e) {
        setSearchText(e.target.value);
    }

    function handleClickSearch() {
        props.onSearch(searchText);
    }

    return (
        <div className="header__search">
            <a href="" className="header__logo">
                <Link to="/home" >
                </Link>
            </a>

            <div className="header__search-input-wrap">
                <input
                    type="text"
                    className="header__search-input"
                    placeholder="Tìm kiếm sách"
                    onChange={handleChange}
                />
                <button
                    className="header__search-btn"
                    onClick={handleClickSearch}
                >
                    <FaSearch className="header__search-btn-icon fas fa-search" />
                </button>
            </div>
        </div>
    );
}

export default Search;