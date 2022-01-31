export default function Inventory({Shelf}){
    return(
        <div className="w-1/4 border-4 border-black" >
            <p className=" bg-gray-200 font-bold text-lg">Inventory:</p>
            {Shelf.map(weapon => (
              <p key={weapon.name}>{weapon.name}</p>
            ))}
        </div>
    )
}