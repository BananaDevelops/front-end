import Image from "next/image"
import { useState } from "react"
import myLoader from "./Loader"
import axios from "axios"

export default function Map({Maproom}) {

  const [BackEndData, setBackEndData] = useState('')

  async function handleButton(event){
    // const url= "https://stick-figure-backend.herokuapp.com/game_logic/test_map/"
    const url = "http://127.0.0.1:8000/game_logic/test_map/"
    try{
      const response = await axios.get(url)
      console.log(response.data.Data)
      setBackEndData(response.data.Data)
    }
    catch(error){
      
      console.log("You lose", error.message)

    }
  }

  function mapGenerator(array) {
    return (
      <table className="w-full">
        <tbody>
          {array.map((mapRow, idx) => <tr key={idx}>{mapRow.map((mapTile, idxB) => {
          let color = "";
          if (mapTile === 0) {
            color = "w-2 p-5 bg-black"
          }
          if (mapTile === 1) {
            color = "w-2 p-5 bg-white"
          }
          if (mapTile === 2) {
            color = "w-2 p-5 bg-red-600"
          }
          if (mapTile === 3) {
            color = "w-2 p-5 bg-white"
          }
          return <td key={idxB} className={color}></td>})}</tr>)}
        </tbody>
      </table>
    )
  }

  return (
    <div className="inline border-4 border-black w-1/4">
      <p className="bg-gray-200 text-lg font-bold">Map: </p>
      <p>You are in Room {Maproom}</p>
      <div className="justify-center"> 
        <MapImage/>
      </div>
      <div>
        {BackEndData ? mapGenerator(BackEndData) : <button onClick={handleButton}>Press Me</button>}
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