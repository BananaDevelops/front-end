import Head from 'next/head'
import Login from '../components/Login'
import GamePicture from '../components/GamePicture'
import Inventory from "../components/Iventory"
import Map from '../components/Map'
import PlayerStats from '../components/PlayerStats'
import StartGame from '../components/StartGame'
import GameText from '../components/GameText'
import Header from '../components/Header'
import axios from 'axios'
import playerRetriever from "./GetPlayer"
import { useState } from 'react'



export default function Main({player, mapData, setPlayer, setMap}){





  function handleSubmit(event) {
    event.preventDefault();
    console.log('cool');
  }

  // const Player = { "name": "Generic Player name", "health": 100, "lefthandweapon": { "name": "left sword" }, "righthandweapon": { "name": "right sword" } }

  // const Shelf = Player.Inventory
  const Shelf = [{ "name": "Hammer" }, { "name": "Axe" }, { "name": "Sword" }, { "name": "PoTion" }]
  const GameInfo = "Prompt to the Player"

  async function handleCommand(event){
    event.preventDefault();
    const url = "http://127.0.0.1:8000/game_logic/test_game_logic/"
    const fullMessage = {"message":event.target.response.value,"player":player,"map":mapData }

    try {
      const response = await axios.post(url, fullMessage)
      console.log(response.data)
      setMap(response.data.map)
      setPlayer(response.data.player)
    } catch (error) {
      console.log(fullMessage)
      console.log("You lose", error.message)
    }

  }

  return (
    <div >

    <Head>
      <title>Stick Adventure</title>
    </Head>

    <main >
      <Header/>
      <div className="flex">
        <Map Map_array={mapData} />
        <GamePicture />
        <PlayerStats Player={player} />
      </div>
      <div className='flex'>
        <GameText GameInfo={GameInfo} handleCommand={handleCommand}/>
        <Inventory Shelf={Shelf} />
      </div>
    </main>


  </div>
  )
}