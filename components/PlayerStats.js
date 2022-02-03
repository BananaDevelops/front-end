export default function PlayerStats({Player}){
    return(
      <div className="w-1/4 border-4 border-green bg-black rounded-2xl">
        <p className="text-green font-bold text-lg">Player:</p>
        <p className="text-green"> {Player.name}</p>
        <p className="text-green">Status:</p>
        <p className="text-green">Health: {Player.health}</p>
        {/* <p className="text-green">Left Hand Weapon: {Player.left_hand.name ? Player.left_hand.name: 'Fist' }</p>
        <p className="text-green">Right Hand Weapon: {Player.right_hand.name ? Player.right_hand.name: 'Fist'}</p> */}
      </div>
      
    )
}