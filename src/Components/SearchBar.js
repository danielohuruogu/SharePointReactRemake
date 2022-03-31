import React from "react";

import { useNavigate } from 'react-router-dom'

import "./SearchBar.css";


export default function SearchBar(props) {

	const { searchQuery, setSearchQuery } = props

    const navigate = useNavigate();

    return (
        <div className="searchBarContainer">
            <form className="searchForm">
                <input
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    placeholder="Search for a recording"
                    type="search"
                    name="search"
                    className="searchBox"
                    autoComplete="off"
                    />
            </form>
        </div>
    );
};