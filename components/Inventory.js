export default function Inventory({Shelf}){

    function generateInventory(Shelf){
        if (Shelf==0){
            return <p className="text-green">Empty</p>
        }
        else{
            // return Shelf.map(weapon => <p key={weapon.name}>{weapon.name}</p>)
        }
    }

    return(
        <div className="w-1/4 border-4 border-green bg-black rounded-2xl" >
            <p className=" font-bold text-lg text-green">Inventory:</p>
            <div className="text-green">
            {generateInventory(Shelf)}
            </div>
        </div>
    )
}