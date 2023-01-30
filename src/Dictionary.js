import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");
    let [results, setResults]=useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);

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
            <section>
                <label>What word do you want to look up?</label>
                <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} className="form-control search-input"/>
            
        </form>
        </section>
        
        <Results results={results}/>
        </div>
    )
}