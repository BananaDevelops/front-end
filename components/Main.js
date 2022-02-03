import Head from 'next/head'
import Login from '../components/Login'
import GamePicture from '../components/GamePicture'
import Inventory from "./Inventory"
import Map from '../components/Map'
import PlayerStats from '../components/PlayerStats'
import StartGame from '../components/StartGame'
import GameText from '../components/GameText'
import Header from '../components/Header'
import axios from 'axios'
import playerRetriever from "./GetPlayer"
import { useState } from 'react'



export default function Main({ player, mapData, setPlayer, setMap, gameInfo, setGameInfo }) {


  function handleSubmit(event) {
    event.preventDefault();
    console.log('cool');
  }

  // const Player = { "name": "Generic Player name", "health": 100, "lefthandweapon": { "name": "left sword" }, "righthandweapon": { "name": "right sword" } }

  // const Shelf = Player.Inventory
  //const Shelf = [{ "name": "Hammer" }, { "name": "Axe" }, { "name": "Sword" }, { "name": "PoTion" }]


  async function handleCommand(event) {
    event.preventDefault();
    // const url = 'https://stick-figure-backend.herokuapp.com/game_logic/test_game_logic/'
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/game_logic/test_game_logic/`
    const fullMessage = { "message": event.target.response.value, "player": player, "map": mapData, "prompt": gameInfo }

    try {
      const response = await axios.post(url, fullMessage)
      console.log(response.data)
      setMap(response.data.map)
      setPlayer(response.data.player)
      setGameInfo(response.data.prompt)
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

      <main className='bg-black pt-50 h-screen'>
        <Header />
        <div className="flex">
          <Map Map_array={mapData} Player={player} />
          <GamePicture Player={player} />
          <PlayerStats Player={player} />
        </div>
        <div className='flex'>
          <GameText GameInfo={gameInfo} handleCommand={handleCommand} />
          <Inventory Shelf={player.inventory} />
        </div>
      </main>


    </div>
  )
}