import Image from "next/image"
import { useState, useEffect } from "react"
import myLoader from "./Loader"
import axios from "axios"
import playerRetriever from "./GetPlayer"


export default function Map({Map_array, Player}) {

  function mapGenerator(array) {
    return (
      <table className="bg-green w-11/12">
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
            return <td key={idxB} className="bg-black"><Image src="/../public/player.png" alt="player icon" width = "50" height="50"/></td>
          }
          // 3 is monster
          if (mapTile === 3) {
            color = "w-1 p-5 bg-black"
          }
          // 4 is item space
          if (mapTile === 4) {
            color = "w-1 p-5 bg-black"
          }          
          return <td key={idxB} className={color}></td>})}</tr>)}
        </tbody>
      </table>
    )
  }

  return (
    <div className="inline flex-auto border-4 border-green bg-black rounded-2xl p-4">
      <p className="text-green font-bold underline decoration-inherit text-2xl">Map: </p>
      <p className="text-green">You are {Player.combat ? "in Combat" : "free to explore"}</p>
      <div className="flex justify-center">
        {mapGenerator(Map_array)}
      </div>
    </div>
  )
}

