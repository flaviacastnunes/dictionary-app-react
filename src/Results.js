import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms.js";
import Phonetic from "./Phonetic.js";
import Photos from "./Photos.js";

import "./Results.css";

export default function Results(props) {

    if(props.results){
        return(
             <div className="Results">
                <h1>{props.results.word}</h1>
                {props.results.phonetics.map(function(phonetic, index) {
                    return(
                        <div key={index}>
                            <Phonetic phonetic={phonetic}/>
                        </div>

                    )
                })}
                {props.results.meanings.map(
                    function(meaning, index) {
                    return(
                        <div key={index}>
                         <Meaning meaning={meaning} />
                         <Synonyms synonyms={meaning.synonyms}/>
                         
                         </div>
                    )
                   
                })}
    </div>
        )
        }
        else {
            return(null)
        }

}