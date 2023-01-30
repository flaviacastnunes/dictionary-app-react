import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if(props.photos) {
           return(
            <section className="Photos">
                <div className="row">
                {props.photos.map(
                    function(photo, index) {
                        <div key={index} className="col-4">
                            <a href={photo.src.original} target="_blank" rel="noreferrer noopener"><img src={photo.src.landscape} className="img-fluid" alt="Pexel"/></a>
                           
                           </div>
                           })}
                           </div> 
                         
                         </section>
                       
                        )
           
    }
    else {
        return null;
    }
 
}