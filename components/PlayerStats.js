export default function PlayerStats({Player}){
    return(
      <div className="w-1/4 border-4 border-green bg-black rounded-2xl p-4">
        <p className="text-green font-bold underline decoration-inherit text-3xl">Player:</p>
        <p className="text-green font-bold text-xl"> {Player.name.toUpperCase()}</p>
        <p className="text-green font-bold underline decoration-inherit text-2xl">Status:</p>
        <p className="text-green">Health: {Player.health}</p>
        <p className="text-green">Left Hand Weapon: {Player.left_hand.type ? Player.left_hand.type: 'Fist' }</p>
        <p className="text-green">Right Hand Weapon: {Player.right_hand.type ? Player.right_hand.type: 'Fist'}</p>
        <section>
          <p className="text-green font-bold underline decoration-inherit text-3xl mt-5">Commands</p>
          <p className="text-green font-bold text-xl">move up</p>
          <p className="text-green font-bold text-xl">move down</p> 
          <p className="text-green font-bold text-xl">move left</p>
          <p className="text-green font-bold text-xl">move right</p>
          <p className="text-green font-bold text-lg">equip sword left or right</p>
          <p className="text-green font-bold text-xl">attack</p>
        </section>
      </div>
      
    )
}