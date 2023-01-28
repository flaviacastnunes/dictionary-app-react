import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
    let [keyword, setKeyword]=useState(null);

    function handleResponse(response) {

    }
    
    function search(event){
        event.preventDefault()
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(url).then(handleResponse);
        }

    function handleKeywordChange(event){
            setKeyword(event.target.value);
        }

    return(
        <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} />
            <input type="submit" value="Search" />

        </form>
        </div>
    )
}