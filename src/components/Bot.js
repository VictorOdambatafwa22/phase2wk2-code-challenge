import React from "react";

function Bot({bot,onAction}){

    return(

        <div className="bot-card" onClick={onAction}>
        <img src={bot.avatar_url} alt="avatar"/> 
        <h3>{bot.name}</h3> 
        <p>{bot.catchphrase}</p> 
         
        </div>

    )
}

export default Bot