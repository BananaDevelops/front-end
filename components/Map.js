import Image from "next/image"
import myLoader from "./Loader"

export default function Map({Maproom}) {
  return (
    <div className="inline border-4 border-black w-1/4">
      <p className="bg-gray-200 text-lg font-bold">Map: </p>
      <p>You are in Room {Maproom}</p>
      <div className="justify-center"> 
        <MapImage/>
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