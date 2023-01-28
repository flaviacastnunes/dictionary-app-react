import React, {useState} from "react";

export default function Dictionary(){
    let [keyword, setKeyword]=useState(null);
    
    function search(event){
        event.preventDefault()
        }
        function handleKeywordChange(){

        }

    return(
        
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} />
            <input type="submit" />

        </form>
    )
}