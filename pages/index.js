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



export default function Home() {

  function handleSubmit(event) {
    event.preventDefault();
    console.log('cool');
  }
  const Maproom = 2
  const Player = { "name": "Generic Player name", "health": 100, "lefthandweapon": { "name": "left sword" }, "righthandweapon": { "name": "right sword" } }
  const Shelf = [{ "name": "Hammer" }, { "name": "Axe" }, { "name": "Sword" }, { "name": "PoTion" }]
  const GameInfo = "Prompt to the Player"

  async function handleCommand(event){
    event.preventDefault();
    const url = "http://127.0.0.1:8000/game_logic/test_game_logic/"
    let message = JSON.stringify({"message":event.target.response.value})
    try {
      const response = await axios.get(url, message)
    } catch (error) {
      console.log(message)
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
        {/* <Login handleSubmit={handleSubmit}/> */}
        <div className="flex">
          <Map Maproom={Maproom} />
          <GamePicture />
          <PlayerStats Player={Player} />
        </div>
        <div className='flex'>
          <GameText GameInfo={GameInfo} handleCommand={handleCommand}/>
          <Inventory Shelf={Shelf} />
        </div>
        {/* <StartGame/> */}
      </main>


    </div>

  )
}
