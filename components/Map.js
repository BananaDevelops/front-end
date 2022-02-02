import Image from "next/image"
import { useState, useEffect } from "react"
import myLoader from "./Loader"
import axios from "axios"


export default function Map({Map_array}) {

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
      <p>You are in Room</p>
      <div>
        {mapGenerator(Map_array)}
      </div>
    </div>
  )
}

