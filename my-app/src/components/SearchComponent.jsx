import React, { useState } from "react";
import names from "../names.js";
import loader from "../images//loader.gif";

export default function SearchComponent() {
    const [search, setSearch] = useState("");
    const [filteredNames, setFilteredNames] = useState(names);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);

        // Start loading and set a timeout to stop it after 1 second
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Filter names based on the search term
        const filtered = names.filter((name) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredNames(filtered);
    };

    return (
        <>
            <div>
                <h2>Search for a name:</h2>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={search}
                    onChange={handleChange}
                />
            </div>
            <div>
                {loading ? (
                    <img src={loader} alt="Loading..." style={{ width: "100px", margin: "10px" }} />
                ) : null}
                <h3>Results:</h3>
                <p>Names found: {filteredNames.length}</p>
                <ul>
                    {filteredNames.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
