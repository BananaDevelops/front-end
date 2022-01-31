import Image from "next/image"
import myLoader from "./Loader"

export default function GamePicture() {
  return (
    <div className="w-1/2 border-4 border-black">
      <GameImage/>
      {/* <Image  src="http://placekitten.com/200/300" alt="Picture from game" height="200px" width="200px"></Image> */}
    </div>
  )
}



const GameImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="http://placekitten.com/200/300"
      alt="Picture of the  Current Room"
      width={500}
      height={500}
    />
  )
}