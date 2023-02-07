import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos.js";

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");
    let [results, setResults]=useState(null);
    let [photos, setPhotos]=useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
        setPhotos();

    }
    function handlePexelsResponse(response) {
        console.log(response.data.photos);
        setPhotos(response.data.photos);
    }
    
    function search(event){
        event.preventDefault()
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(url).then(handleResponse);

        let pexelsKey ="JZvDmKMMra8niDlbqe5vrTfyi7jDSNc9KU7BBhbxw3yuY3OeD0lXhhxO";
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {Authorization: `Bearer ${pexelsKey}`};
        axios.get(pexelsUrl, {headers: headers}).then(handlePexelsResponse);
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
        <Photos photos={photos}/>
        </div>
    )
}