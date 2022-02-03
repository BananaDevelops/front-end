import Image from "next/image"
import myLoader from "./Loader"

export default function GamePicture({Player}) {
  return (
    <div className="w-1/2 border-4 border-green rounded-2xl bg-black">
      <div className="flex my-4 justify-center">
        {/*this need Player.combat in true test */}
        {Player.combat != false ? <Image src="/../public/static/img/monster.png" alt="Picture of the  Monster" width={400} height={400}
    /> : <Image src="/../public/static/img/corridor.png" alt="Picture of the  Monster" width={600} height={400}/> }
      </div>
    </div>
  )
}



const GameImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="/../public/static/img/monster.png"
      alt="Picture of the  Monster"
      width={400}
      height={400}
    />
  )
}