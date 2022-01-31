import Head from 'next/head'
import Login from '../components/Login'
import GamePicture from '../components/GamePicture'
import Inventory from "../components/Iventory"
import Map from '../components/Map'
import PlayerStats from '../components/PlayerStats'
import StartGame from '../components/StartGame'
import GameText from '../components/GameText'
import Header from '../components/Header'


export default function Home() {

  function handleSubmit(event) {
    event.preventDefault();
    console.log('cool');
  }
  const Maproom = 2
  const Player = { "name": "Generic Player name", "health": 100, "lefthandweapon": { "name": "left sword" }, "righthandweapon": { "name": "right sword" } }
  const Shelf = [{ "name": "Hammer" }, { "name": "Axe" }, { "name": "Sword" }, { "name": "PoTion" }]
  const GameInfo = "Prompt to the Player"


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
          <GameText GameInfo={GameInfo} />
          <Inventory Shelf={Shelf} />
        </div>
        {/* <StartGame/> */}
      </main>


    </div>

  )
}
