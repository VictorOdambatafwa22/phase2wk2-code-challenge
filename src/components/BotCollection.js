import React from "react";
import { useEffect, useState } from "react";

function BotCollection() {

  const [bot, setBot] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots?q=")
      .then((resp) => resp.json())
      .then(data => setBot(data))
  }, [])


  return (

    <div>

        <ul>
          {bot.map((list, id) => (
            //<li key={id}>{list.name} {list.health} {list.damage} {list.armor} {list.bot_class} {list.catchphrase} {list.avatar_url} {list.created_at}</li>
            <li key={id}>{<img width={150} src={list.avatar_url} alt="avatar" />} {list.name}</li>

          ))}
        </ul>
     
    </div>

  )
}

export default BotCollection;