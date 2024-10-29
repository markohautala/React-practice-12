// this component should display and be able to search or filter the names.js

import React, { useState } from "react";
import names from "../names.js";

export default function SearchComponent() {

    const [search, setSearch] = useState("");
    const [filteredNames, setFilteredNames] = useState(names);

    const handleChange = (e) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);
        const filteredNames = names.filter((name) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredNames(filteredNames);
    };

    return (
        <div>
            <h2>Search for a name:</h2>
            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={handleChange}
            />
            <h3>Results:</h3>
            <p>Names found: {filteredNames.length}</p>
            <ul>
                {filteredNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}