export default function Inventory({Shelf}){

    function generateInventory(Shelf){
        if (Shelf.length === 0){
            return <p>Empty</p>
        }
        else{
            return Shelf.map(weapon => <p key={weapon.name}>{weapon.name}</p>)
        }
    }

    return(
        <div className="w-1/4 border-4 border-black" >
            <p className=" bg-gray-200 font-bold text-lg">Inventory:</p>
            {generateInventory(Shelf)}
        </div>
    )
}