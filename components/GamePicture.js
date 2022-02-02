import Image from "next/image"
import myLoader from "./Loader"

export default function GamePicture() {
  return (
    <div className="w-1/2 border-4 border-green-200 rounded-2xl bg-black">
      <div className="flex my-4 justify-center">
      <GameImage/>
      </div>
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
      width={400}
      height={400}
    />
  )
}