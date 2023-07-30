import React from "react";
import Bot from "./Bot";
function YourBotArmy ({armyBots,removeBotFRomArmy}){
    return(
        <div className="your-army">
    {armyBots.map((bot)=> <Bot key={bot.id} bot={bot} onAction={()=> removeBotFRomArmy(bot.id)}/>      )}


        </div>
    )
}

export default YourBotArmy