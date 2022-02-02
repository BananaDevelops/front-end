export default function PlayerStats({Player}){
    return(
      <div className="w-1/4 border-4 border-black">
        <p className=" bg-gray-200 font-bold text-lg">Player:</p>
        <p> {Player.name}</p>
        <p className=" bg-gray-200 font-bold text-sm">Status:</p>
        <p>Health: {Player.health}</p>
        <p>Left Hand Weapon: {Player.left_hand.name ? Player.left_hand.name: 'Fist' }</p>
        <p>Right Hand Weapon: {Player.right_hand.name ? Player.right_hand.name: 'Fist'}</p>
      </div>
      
    )
}