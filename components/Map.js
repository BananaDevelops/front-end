import Image from "next/image"
import { useState } from "react"
import myLoader from "./Loader"
import axios from "axios"

export default function Map({Maproom}) {

  const [BackEndData, setBackEndData] = useState('')

  async function handleButton(event){
    const url= "https://stick-figure-backend.herokuapp.com/game_logic/test_map/"
    try{
      const response = await axios.get(url)
      console.log(response.data.Data)
      setBackEndData(response.data.Data)
    }
    catch(error){
      
      console.log("You lose", error.message)

    }
  }

  return (
    <div className="inline border-4 border-black w-1/4">
      <p className="bg-gray-200 text-lg font-bold">Map: </p>
      <p>You are in Room {Maproom}</p>
      <div className="justify-center"> 
        <MapImage/>
      </div>
      <div>
        {BackEndData ? <p>{BackEndData}</p> : <button onClick={handleButton}>Press Me</button>}
      </div>
    </div>
  )
}

const MapImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="http://placekitten.com/200/300"
      alt="Picture of the Map"
      width={96}
      height={96}
    />
  )
}