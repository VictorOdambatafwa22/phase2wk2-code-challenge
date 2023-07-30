import React from "react";
import Bot from "./Bot";
function BotCollection({bots,addBoatToYourArmy}) {



  return (

    <div className="bot-collection">
  
       {bots.map((bot)=> <Bot key={bot.id} bot={bot} onAction={()=>addBoatToYourArmy(bot.id)}/>      )}

    </div>



  )
}

export default BotCollection;