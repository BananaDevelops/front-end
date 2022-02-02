import Main from "../components/Main"
import StartGame from "../components/StartGame"
import { useState } from "react"



export default function Home() {

  const [player, setPlayer] = useState(false)


  return (
    <>
    { player ?<Main player = {player} />: <StartGame player = {setPlayer}/>}
    </>

  )
}
