import axios from "axios";

export default function StartGame({player, setMap}){
    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target.InitialUserName.value)
    }

    async function getMap(){
        // const url= "https://stick-figure-backend.herokuapp.com/game_logic/test_map/"
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/game_logic/test_map/`
        try{
          const response = await axios.get(url);
          console.log("success", response.data.Data);
          setMap(response.data.Data)
        }
        catch(error){
          
          console.log("You lose", error.message);
          return [[]]
      
        }
      }

    async function handleCommand(event) {
        event.preventDefault();
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/player/`
        let name = {"name":event.target.InitialUserName.value}
        try {
          const response = await axios.post(url, name)
          player(response.data);
          getMap()
          console.log(response)
        } catch (error) {
          console.log("You lose", error.message)
        }
    }
    
    return(
        <form onSubmit={handleCommand}>
            <label>What is your name?</label>
            <input type="text" name="InitialUserName"></input>
            <button type="Submit">Enter</button>
        </form>
    )
}