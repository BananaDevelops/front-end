import Image from "next/image"
import { useState, useEffect } from "react"
import myLoader from "./Loader"
import axios from "axios"


export default function Map({Map_array}) {

  function mapGenerator(array) {
    return (
      <table className="bg-green">
        <tbody>
          {array.map((mapRow, idx) => <tr key={idx}>{mapRow.map((mapTile, idxB) => {
          let color = "";
          // 0 is wall
          if (mapTile === 0) {
            color = "w-1 p-5 bg-green"
          }
          // 1 is open space
          if (mapTile === 1) {
            color = "w-1 p-5 bg-black"
          }
          // 2 is player
          if (mapTile === 2) {
            // color = "w-1 p-5 bg-red"
            return <Image src="/../public/player.png" alt="player icon" width = "50" height="50"/>
          }
          // 3 is monster
          if (mapTile === 3) {
            color = "w-1 p-5 bg-black"
          }
          return <td key={idxB} className={color}></td>})}</tr>)}
        </tbody>
      </table>
    )
  }

  return (
    <div className="inline flex-auto border-4 border-green bg-black w-1/4 rounded-2xl">
      <p className="text-lg font-bold text-green">Map: </p>
      <p className="text-green">You are in Room</p>
      <div className="flex justify-center">
        {mapGenerator(Map_array)}
      </div>
    </div>
  )
}

