import Main from "../components/Main"
import StartGame from "../components/StartGame"
import { useState } from "react"



export default function Home() {

  const [player, setPlayer] = useState(false)
  const [mapData, setMapData] = useState([[0, 0, 0]]);
  const [gameInfo, setGameInfo] = useState("Welcome to game")


  return (
    <div className="bg-black font-mono">
      {player ? <Main gameInfo={gameInfo} setGameInfo={setGameInfo} player={player} mapData={mapData} setPlayer={setPlayer} setMap={setMapData} /> : <StartGame setMap={setMapData} player={setPlayer} />}
    </div>

  )
}
