export default function Inventory({Shelf}){

    function generateInventory(Shelf){
        if (Shelf==0){
            return <p className="text-green">Empty</p>
        }
        else{
             return Shelf.map(weapon => <p key={weapon.type}>{weapon.type}</p>)
        }
    }

    return(
        <div className="w-1/4 border-4 border-green bg-black rounded-2xl p-4" >
            <p className="text-green font-bold underline decoration-inherit text-2xl">Inventory:</p>
            <div className="text-green">
            {generateInventory(Shelf)}
            </div>
        </div>
    )
}