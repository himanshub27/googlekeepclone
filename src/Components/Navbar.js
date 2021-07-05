import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./Navbar.css";

const Navbar = ({ searchNote }) => {

    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const searchBtn = ()=>{
        searchNote(search);
        setSearch("");
    }

    return (
        <div className="navbar">
            <div className="navbar_left">
                <img src="	https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" />
                <h3>Keep</h3>
            </div>
            <div className="navbar_right">
                    <input type="search" value={search} onChange={handleChange} className="inp" placeholder="Search by title" type="text" />
                    <button onClick={searchBtn} className="searchBtn">
                  <SearchIcon />
                </button>
            </div>
            
            
        </div>
    )
}

export default Navbar;
