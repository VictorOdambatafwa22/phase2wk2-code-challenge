
import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"


function Bots(){

    const [bots, setBots] = useState([])
    const [armyBots, setArmyBots] = useState([])
    


  useEffect(() => {
    fetch("http://localhost:3000/bots?q=")
      .then((resp) => resp.json())
      .then(data => setBots(data))
  }, [])

  function addBoatToYourArmy(id){
  const bot=bots.find((bot)=> bot.id===id) 
  const isBotAvailable=checkIfBotExistsInArmy(bot)
  if (!isBotAvailable){
    setArmyBots([...armyBots,bot])
  }
 
}

function checkIfBotExistsInArmy(bot){
return armyBots.includes(bot)
}

function removeBotFRomArmy(id){
   const army=armyBots.filter((bot)=> bot.id !==id)
   setArmyBots(army)
    }

    //function deleteBotFromService(id){
      //const army=armyBots.filter((bot)=> bot.id !==id)
      //setArmyBots(army)
      // }

return(
<div>
    <YourBotArmy armyBots={armyBots} removeBotFRomArmy={removeBotFRomArmy}/>
    <BotCollection  bots={bots} addBoatToYourArmy={addBoatToYourArmy}/>
</div>
)


}

export default Bots